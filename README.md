# 🚀 ZynTech Labs - Next.js 16 + Sanity.io CMS + Enterprise SEO Platform

A full replica of **[https://zyntechlabs.io/](https://zyntechlabs.io/)** built with **Next.js 16 (App Router)**, **Sanity.io Headless CMS (WordPress Alternative)**, and complete **Yoast-Style SEO Controls**.

---

## 📋 Quick Start Guide (Application Kaise Start Karein)

### 1. Step 1: Open Terminal in Project Directory
Ensure you are in the project folder `d:\web2`:
```bash
cd d:\web2
```

### 2. Step 2: Install Dependencies (If not already installed)
```bash
npm install
```

### 3. Step 3: Start the Local Development Server
```bash
npm run dev
```

The application will start running on **[http://localhost:3000](http://localhost:3000)**.

---

## 🌐 Application URLs & Routes

Once the development server is running (`npm run dev`), you can open these URLs in your browser:

| Feature / Page | Local URL | Purpose |
| :--- | :--- | :--- |
| **🏠 Homepage** | [http://localhost:3000](http://localhost:3000) | Full replica of ZynTech Labs (Hero glow, Counters, Flip-cards, Services) |
| **📝 CMS Admin Studio** | [http://localhost:3000/studio](http://localhost:3000/studio) | WordPress alternative admin dashboard for Blogs, Case Studies & SEO |
| **📰 Engineering Blog** | [http://localhost:3000/blog](http://localhost:3000/blog) | Dynamic SEO blog listing with category filters |
| **💼 Portfolio & Case Studies** | [http://localhost:3000/case-studies](http://localhost:3000/case-studies) | Case study showcase (GIG Logistics, Tarzan Transport) |
| **📞 Contact & Discovery Call** | [http://localhost:3000/contact](http://localhost:3000/contact) | Discovery call booking form with budget selector |
| **📘 SEO Team Handbook (Web)** | [http://localhost:3000/seo-docs](http://localhost:3000/seo-docs) | Built-in SEO team documentation & interactive SERP tester |
| **📄 SEO Handbook (HTML)** | [http://localhost:3000/seo-documentation.html](http://localhost:3000/seo-documentation.html) | Standalone single-file HTML documentation page |
| **🗺️ Dynamic XML Sitemap** | [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml) | Google-compliant dynamic XML sitemap (auto-updated) |
| **🤖 Robots.txt** | [http://localhost:3000/robots.txt](http://localhost:3000/robots.txt) | Search engine crawling directives |

---

## ⚙️ Environment Variables (Optional Sanity Connection)

The application comes with **Intelligent Graceful Fallback Data**, meaning it works, builds, and runs immediately without requiring any API keys!

If you want to connect your live Sanity project, create a `.env.local` file in the root folder:

```env
# Sanity.io Credentials (Free from https://sanity.io/manage)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-08-01

# Production Website URL
NEXT_PUBLIC_SITE_URL=https://zyntechlabs.io

# Google Tracking (Optional)
NEXT_PUBLIC_GA4_ID=G-LPLPSRELWG
NEXT_PUBLIC_GTM_ID=GTM-WFGWS5HN
NEXT_PUBLIC_GOOGLE_VERIFICATION=
```

---

## 🏗️ Production Build & Test

To verify TypeScript types and test the optimized production build:

```bash
npm run build
```

To run the production server locally after building:

```bash
npm run start
```

---

## 🚀 Deploying to Vercel (1-Click Deployment)

1. Push this project (`d:\web2`) to your **GitHub** / **GitLab** repository:
   ```bash
   git add .
   git commit -m "feat: complete zyntechlabs replica with sanity cms & seo engine"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
2. Go to **[Vercel](https://vercel.com)** and log in.
3. Click **"Add New..."** > **"Project"** and import your GitHub repository.
4. (Optional) Add your Environment Variables in the Vercel dashboard:
   * `NEXT_PUBLIC_SANITY_PROJECT_ID`
   * `NEXT_PUBLIC_SANITY_DATASET`
   * `NEXT_PUBLIC_SITE_URL`
5. Click **"Deploy"**. 
6. Vercel will build and deploy both the **Website** and the **Sanity Studio CMS (`/studio`)** in under 60 seconds!

For deploying to your own AWS EC2 server instead (including whether a database is needed —
it isn't), see [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## 📁 Key Project Folder Structure

```
d:\web2/
├── public/
│   ├── favicon.svg               # Vector brand favicon
│   └── seo-documentation.html   # Standalone interactive SEO team documentation
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx              # Homepage (ZynTech Labs replica)
│   │   ├── contact/page.tsx      # Contact & Discovery Call booking
│   │   ├── blog/                 # Blog listing & dynamic [slug] detail pages
│   │   ├── case-studies/         # Case studies listing & dynamic [slug] pages
│   │   ├── seo-docs/page.tsx     # Native SEO Team documentation page
│   │   ├── studio/[[...tool]]/   # Embedded Sanity CMS Admin Studio
│   │   ├── sitemap.ts            # Dynamic XML Sitemap generator
│   │   ├── robots.ts             # Dynamic Robots.txt generator
│   │   └── not-found.tsx         # Branded 404 error page
│   ├── components/               # Reusable UI & SEO Components
│   │   ├── home/                 # Hero, Counters, Flip-cards, Services, Enterprise
│   │   ├── layout/               # Fixed Navbar & Footer
│   │   ├── seo/                  # JSON-LD Schema Markup, Breadcrumbs, Yoast SERP Box
│   │   └── blog/                 # PortableText Rich Renderer, Blog Cards, Social Share
│   ├── sanity/                   # Sanity CMS Configuration & Schemas
│   │   └── schemaTypes/          # Post, Case Study, SEO, Author, Category, SiteSettings
│   └── lib/
│       ├── fallbackData.ts       # Authentic replica data for offline/fallback mode
│       └── seo.ts                # Dynamic Yoast-style constructMetadata helper
├── SEO_TEAM_HANDBOOK.md          # Comprehensive SEO handbook for your team
└── README.md                     # Application start & deployment documentation
```
