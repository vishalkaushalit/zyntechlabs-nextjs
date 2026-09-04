# Sanity backups

This project has no separate database — every Blog Post, Page, Case Study, Category,
Author, and Site Setting lives in Sanity, not on the server. "Backing up the data" means
exporting the Sanity dataset, not backing up the app server.

`backup-sanity.sh` exports the dataset, uploads it to S3, and prunes old local copies. It's
meant to run weekly from cron.

## Requirement: Node 22 for the Sanity CLI

The Sanity CLI needs Node **>=22.12**, even though the app itself runs on Node 20. Don't
upgrade the server's system Node for this — install a second version with
[nvm](https://github.com/nvm-sh/nvm) and point the script at it, so the app's Node 20 runtime
is untouched:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 20   # switch back — the app keeps running on Node 20
ls ~/.nvm/versions/node   # note the exact v22.x.x folder name, you'll need it below
```

## One-time setup

1. **Create a read-only Sanity API token** — `manage.sanity.io` → your project → API →
   Tokens → Add API token → permission **Viewer**. Copy it, it's shown only once.
2. **Create an S3 bucket** for offsite storage (e.g. `zyntechlabs-backups`), private. A
   backup that only lives on the same server it's protecting isn't a real backup.
3. **Give the server permission to write to that bucket** — attach an IAM role to the EC2
   instance (or configure AWS CLI credentials) with `s3:PutObject` + `s3:ListBucket` scoped
   to that bucket.
4. **Set the environment variables** the script needs, e.g. in `~/.backup-env`:

   ```bash
   export SANITY_AUTH_TOKEN=your_sanity_read_token
   export BACKUP_S3_BUCKET=zyntechlabs-backups
   export SANITY_CLI_NODE_BIN=$HOME/.nvm/versions/node/v22.x.x/bin   # match your actual version
   ```

## Running it manually (export)

```bash
source ~/.backup-env
./scripts/backup-sanity.sh
```

This writes `<dataset>-<date>.tar.gz` to `~/sanity-backups` (override with `BACKUP_DIR`) and,
if `BACKUP_S3_BUCKET` is set, uploads it to S3. It keeps the 4 most recent local copies and
deletes older ones — S3 is the durable long-term copy.

## Scheduling it weekly

```bash
crontab -e
# add:
0 2 * * 0 source ~/.backup-env && /var/www/zyntechlabs/scripts/backup-sanity.sh >> ~/sanity-backup.log 2>&1
```

Runs every Sunday at 2 AM. Check `~/sanity-backup.log` after the first scheduled run to
confirm it actually fired.

## Restoring (import)

```bash
# if restoring onto a different/fresh machine, pull the backup down from S3 first
aws s3 cp s3://zyntechlabs-backups/production-2026-09-03.tar.gz .

# import it — --replace overwrites existing documents that share an ID with ones in the backup
npx sanity dataset import production-2026-09-03.tar.gz production --replace
```

`--replace` is the option to use when actually recovering from data loss. Omitting it (or
using `--missing`) only adds documents that don't already exist — useful for merging, not for
a real restore.

**Test this at least once.** A backup nobody has ever restored is a guess, not a safety net —
run the import into a throwaway dataset (not `production`) every so often to confirm the
backups are actually usable:

```bash
npx sanity dataset create restore-test
npx sanity dataset import production-2026-09-03.tar.gz restore-test
# check it in the Studio, then delete it when done
npx sanity dataset delete restore-test
```

> **Sanity plan limit:** both the Free and Growth plans cap a project at **2 datasets total**.
> With `production` as one, `restore-test` uses your only other slot — always run
> `sanity dataset delete restore-test` right after checking it, so the slot is free the next
> time you need it. Also note: on the Free plan, any dataset you create (including a test one)
> must be **public** — there's no private-dataset option until the Growth plan. Check
> `manage.sanity.io/organizations/oor1p665s/project/3zwa5faq/plan` before relying on a second
> dataset being available.

## Troubleshooting

| Symptom | Check |
|---|---|
| `SANITY_AUTH_TOKEN is not set` | Did you `source ~/.backup-env` before running the script (or does the cron line include it)? |
| `Node.js version >=22.12 required` | `SANITY_CLI_NODE_BIN` isn't pointing at a real Node 22 install — check the path with `ls ~/.nvm/versions/node`. |
| Export runs but nothing appears in S3 | Confirm `BACKUP_S3_BUCKET` is set and the instance's IAM role actually has `s3:PutObject` on that bucket — check with `aws s3 ls s3://your-bucket` from the server. |
| Cron job never runs | Cron doesn't load your shell profile — make sure the crontab line itself does `source ~/.backup-env`, as shown above, rather than assuming env vars are already set. |
