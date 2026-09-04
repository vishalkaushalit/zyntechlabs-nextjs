# Deployment Guide

This covers deploying to your own AWS EC2 server. For the 1-click Vercel path, see the
[README](./README.md#-deploying-to-vercel-1-click-deployment).

## Do you need a database?

**No.** This project has no traditional database (MySQL/PostgreSQL/MongoDB) — **Sanity** is
the fully-hosted data layer for every Blog Post, Page, Case Study, Category, Author, and Site
Setting. It's not something you install; it already exists at `manage.sanity.io`, and the app
just talks to it over the internet using a project ID and dataset name.

| WordPress needs | This project needs |
|---|---|
| A server | A server |
| PHP runtime | Node.js runtime |
| MySQL, installed and tuned yourself | A Sanity account — nothing to install |
| Local `wp-content/uploads` storage | Nothing local — uploads go straight to Sanity's CDN |

The EC2 server itself is stateless — it only runs the Next.js app. The only real
configuration is telling it *which* Sanity project to use (three env vars below).

### Your Sanity plan, right now

Check current status: `manage.sanity.io/organizations/oor1p665s/project/3zwa5faq/plan`

- You're on a **Growth Trial** — after it ends, the project **auto-downgrades to Free** unless
  upgraded.
- **Free plan:** 2 datasets max, and they must be **public** (published content readable by
  anyone with the project ID, without a token — drafts stay protected either way). Your
  `production` dataset is already public today, so this isn't a new exposure.
- **Growth plan ($15/seat/month):** adds private datasets, Scheduled drafts, Comments and
  Tasks, and AI Assist. If the content team is relying on any of those during the trial,
  factor the trial end date into your deployment timeline — those features stop working on
  Free.

## Before you start

- An AWS account with billing set up
- Access to your domain's DNS settings
- The GitHub repo URL for this project
- Your Sanity project ID + dataset name
- Your Gemini API key, and a Resend account (see below for creating the API key)
- An SSH client

## Getting your Resend API key

The contact form (`/api/contact`) and the newsletter signup (`/api/subscribe`) both
send email through [Resend](https://resend.com). Get this key before filling in
step 6 below.

1. Sign up (or log in) at [resend.com](https://resend.com) — the free tier covers
   100 emails/day / 3,000/month, which is plenty for a contact form.
2. Verify the account via the email Resend sends you.
3. Dashboard → **API Keys** → **Create API Key**.
   - Name it something identifiable, e.g. `zyntechlabs-production`.
   - Permission: **Sending access** is enough, no need for full access.
4. Copy the key immediately — it starts with `re_` and is only ever shown once.
   This is your `RESEND_API_KEY` for step 6.

**Sender domain:** right now the code sends from Resend's shared test domain
(`onboarding@resend.dev` — see `src/app/api/contact/route.ts:167,176` and
`src/app/api/subscribe/route.ts`). That works with zero setup, but mail from a
shared domain is more likely to land in spam and shows Resend's address instead
of yours. For production, verify your own domain instead:

Dashboard → **Domains** → **Add Domain** → enter `zyntechlabs.io` → add the
TXT/DKIM/MX records it gives you at your domain registrar → wait for the
domain to show **Verified** → then update the `from:` addresses in those two
route files to something like `ZynTech Labs <hello@zyntechlabs.io>`.

**`CONTACT_TO_EMAIL` isn't a key from any service** — it's just the inbox you
want leads delivered to (e.g. `hello@zyntechlabs.io` or `sales@zyntechlabs.io`).
Pick any mailbox your team actually checks. If you leave it unset, the code
falls back to a hardcoded placeholder Gmail address
(`src/app/api/contact/route.ts:160`) — don't skip this in production.

## 1. Launch the EC2 instance

AWS Console → **EC2 → Launch Instance**.

- **AMI:** Ubuntu Server 22.04 LTS
- **Instance type:** `t3.small` (2 GB RAM — `t3.micro`'s 1 GB isn't reliably enough for
  `next build`)
- **Key pair:** create one, download the `.pem` file

Security group inbound rules:

| Port | Purpose |
|---|---|
| 22 | SSH (restrict to your own IP if possible) |
| 80 | HTTP — needed for Certbot's SSL verification |
| 443 | HTTPS — the live site |

Allocate an **Elastic IP** and associate it with the instance — without it, the server's
public IP changes on every restart, breaking your DNS.

## 2. Point your domain at the server

At your registrar, add:

| Type | Host | Value |
|---|---|---|
| A | @ | your Elastic IP |
| A | www | your Elastic IP |

## 3. Connect & install base packages

```bash
chmod 400 zyntech-key.pem
ssh -i zyntech-key.pem ubuntu@YOUR_ELASTIC_IP
```

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nginx
```

## 4. Install Node.js 20

The app was built and tested on Node 20:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v   # should print v20.x.x

sudo npm install -g pm2
```

## 5. Clone the repository

```bash
cd /var/www
sudo git clone YOUR_REPO_URL zyntechlabs
sudo chown -R ubuntu:ubuntu zyntechlabs
cd zyntechlabs
```

## 6. Create the environment file

`/var/www/zyntechlabs/.env.production` — notice there's no database connection string:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-08-01
NEXT_PUBLIC_SITE_URL=https://zyntechlabs.io

GEMINI_API_KEY=your_gemini_key
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=where_contact_form_emails_go

SANITY_REVALIDATE_SECRET=any_random_string_you_make_up
```

This file holds real secrets — never commit it. Confirm `.env*` is in `.gitignore`.

## 7. Install dependencies & build

```bash
npm install
npm run build
```

## 8. Run it with PM2

```bash
pm2 start npm --name "zyntech-labs" -- start
pm2 save
pm2 startup   # run the command it prints, so PM2 survives a reboot
```

Check: `pm2 status` should show `zyntech-labs` as `online`.

## 9. Put Nginx in front of it

`/etc/nginx/sites-available/zyntechlabs`:

```nginx
server {
    listen 80;
    server_name zyntechlabs.io www.zyntechlabs.io;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/zyntechlabs /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 10. Enable HTTPS with Certbot

Only once DNS from step 2 has propagated:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d zyntechlabs.io -d www.zyntechlabs.io
```

Test renewal: `sudo certbot renew --dry-run`

## 11. Make Sanity auto-refresh the live site

The app has a built-in endpoint, `/api/revalidate`, that clears cached pages — including the
sitemap — the moment content changes.

`manage.sanity.io` → your project → **API → Webhooks → Add webhook**:

| Field | Value |
|---|---|
| URL | `https://zyntechlabs.io/api/revalidate` |
| Dataset | production |
| Trigger on | Create, Update, Delete |
| HTTP method | POST |
| HTTP headers | `x-revalidate-secret` = the value from step 6 |

## 12. Deploying future code updates

For new code (not content — step 11 handles that):

```bash
git pull origin main
npm install
npm run build
pm2 restart zyntech-labs
```

## 13. Weekly backups

There's no database file to back up, but there's still real content to protect — see
[`scripts/README.md`](./scripts/README.md) for the full setup (Sanity API token, S3 bucket,
the Node 22 requirement for the Sanity CLI, cron schedule, and how to restore). Quick version:

```bash
crontab -e
# add:
0 2 * * 0 source ~/.backup-env && /var/www/zyntechlabs/scripts/backup-sanity.sh >> ~/sanity-backup.log 2>&1
```

## Environment variable reference

| Variable | What it's for |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Almost always `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version string, e.g. `2024-08-01` |
| `NEXT_PUBLIC_SITE_URL` | The canonical domain — used in the sitemap, SEO tags, and structured data |
| `GEMINI_API_KEY` | Powers the AI chatbot at `/api/chat` |
| `RESEND_API_KEY` | Sends contact-form & newsletter emails via Resend |
| `CONTACT_TO_EMAIL` | The inbox that receives contact-form / newsletter submissions |
| `SANITY_REVALIDATE_SECRET` | Shared with the webhook in step 11 |
| `SANITY_AUTH_TOKEN` | Read-only token used only by the weekly backup script (step 13) |
| `BACKUP_S3_BUCKET` | The S3 bucket the weekly backup script uploads to (step 13) |

## Troubleshooting

| Symptom | Check |
|---|---|
| Site won't load at all | `pm2 status` — app online? `sudo systemctl status nginx` — Nginx running? |
| "502 Bad Gateway" | Next.js isn't answering on port 3000. `pm2 logs zyntech-labs` for the crash reason. |
| Content changes aren't showing | Sanity → API → Webhooks → click it → "Attempt log." |
| `next build` gets killed | Instance too small — resize to `t3.small` or add a swap file. |
| SSL certificate errors | `sudo certbot certificates` to check expiry; `sudo certbot renew` to force it. |

## Go-live checklist

- [ ] EC2 instance running, Elastic IP attached
- [ ] DNS A records point to the Elastic IP and have propagated
- [ ] `.env.production` filled in with real values, not committed to Git
- [ ] `pm2 status` shows the app online, `pm2 save` + `pm2 startup` run
- [ ] Nginx reverse proxy live, `nginx -t` passes
- [ ] HTTPS working, `certbot renew --dry-run` passes
- [ ] Sanity webhook to `/api/revalidate` added and tested with a real publish
- [ ] Weekly Sanity backup cron job installed and tested by hand once
- [ ] A restore has actually been tried once, into a throwaway dataset
- [ ] Sanity plan checked — trial end date and dataset limits accounted for
