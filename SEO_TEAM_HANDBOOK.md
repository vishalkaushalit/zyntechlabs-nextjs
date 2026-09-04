# 📘 SEO Team Handbook: WordPress vs. Next.js + Sanity.io CMS Guide

Yeh document **SEO Team** ke liye ek Complete Standard Operating Procedure (SOP) aur Comparison Guide hai. Isme WordPress (Yoast SEO) ke har feature ko is naye **Next.js 16 + Sanity.io CMS** platform ke sath compare karke step-by-step samjhaya gaya hai.

---

## 📊 Summary Comparison Table

| SEO Feature | 🟢 Traditional WordPress (Yoast) | 🚀 Next.js + Sanity.io (New Architecture) | SEO Team Action / Where to edit |
| :--- | :--- | :--- | :--- |
| **SEO Title & Description** | Yoast meta box niche scroll karke | Sanity Studio (`/studio`) mein real-time character limit check | Studio > Post/Page > SEO Section |
| **URL Slugs** | `/wp-admin` Permalink field | Sanity automatic slug generator with custom edit | Studio > Slug field (Auto generated from title) |
| **Headings (H1, H2, H3)** | Gutenberg / Classic Editor blocks | Sanity PortableText WYSIWYG dropdown | Select heading level directly in editor |
| **Image ALT Text** | WordPress Media Library "Alt Text" | Upload par mandatory ALT text validation | Studio > Image upload popup |
| **Canonical Tags** | Yoast Advanced Tab "Canonical URL" | Automatic dynamic canonical + custom override field | Auto-managed in `<head>` or override in Studio |
| **XML Sitemap** | `/sitemap_index.xml` (Yoast plugin) | `/sitemap.xml` (Next.js Dynamic API) | Automatic (har naye post par auto-update) |
| **Robots.txt** | File edit via FTP / Yoast file editor | `/robots.txt` (Next.js Dynamic Route) | `src/app/robots.ts` or Studio siteSettings |
| **301 Redirects** | Redirection Plugin / `.htaccess` | Next.js Edge Redirects / Studio Redirects table | `next.config.ts` or Studio Redirects |
| **Schema (JSON-LD)** | Schema Pro / Yoast Schema | Native JSON-LD structured data in `<head>` | Auto-generated for Articles, Org, Breadcrumbs |
| **Breadcrumbs** | Yoast shortcode `[wpseo_breadcrumb]` | Native React Breadcrumbs + Schema markup | Har dynamic page par built-in |
| **Index / No-Index** | Yoast Advanced "Allow search engines" | "Disallow Indexing (noindex)" checkbox | Studio > SEO > noIndex toggle |
| **Social OpenGraph Tags** | Yoast Social Tab (Facebook/Twitter) | OpenGraph & Twitter Cards image + meta | Studio > SEO > ogImage field |
| **GA4 / GTM / Search Console** | Header & Footer Scripts Plugin | Native Next.js Script tags (zero render blocking) | Studio > Site Settings or `.env` |
| **Page Speed & Core Web Vitals** | 40–60 score (bloated plugins/PHP) | **95–100 score** (Static Site Generation + Edge CDN) | Automatic Next.js `<Image>` & static caching |

---

## 🔍 Detailed Feature-by-Feature Guide for SEO Team

---

### 1. SEO Title & Meta Description Edit Facility
* **WordPress Mein Kaise Hota Tha:**
  Post ke niche Yoast box mein jaakar Title aur Description type karte the.
* **Next.js + Sanity Mein Kaise Chalega:**
  1. Login karein **`/studio`** par.
  2. Blog Post ya Case Study open karein.
  3. **"Yoast SEO Settings"** fieldset open karein:
     * **Meta Title:** Max 60-70 characters (live counter indicator diya gaya hai).
     * **Meta Description:** Max 155-160 characters.
  4. Publish click karte hi Next.js page ke `<title>` aur `<meta name="description">` ko automatically update kar deta hai.
* **SERP Preview:**
  Blog post ke end mein live Google Search preview box bhi visualize hota hai (Mobile & Desktop).

---

### 2. SEO-Friendly Clean URL Structure
* **WordPress Mein Kaise Hota Tha:**
  `/%postname%/` permalink setting se URL banta tha.
* **Next.js + Sanity Mein Kaise Chalega:**
  * Post Title type karte hi **"Generate Slug"** button se clean, lowercase, hyphenated slug banta hai:
    * Blog URL: `https://zyntechlabs.io/blog/scaling-enterprise-microservices-2026`
    * Case Study URL: `https://zyntechlabs.io/case-study/gig-logistics`
  * SEO team chahe toh slug ko manually custom keyword ke hisab se edit kar sakti hai.

---

### 3. H1, H2, H3 Headings Hierarchy Management
* **WordPress Mein Kaise Hota Tha:**
  Gutenberg blocks mein Heading select karte the.
* **Next.js + Sanity Mein Kaise Chalega:**
  * Page ka Title hamesha automatic **`<h1>`** tag banta hai (Single H1 per page rule strictly followed).
  * Rich-text editor ke andar dropdown se **H2, H3, H4, Bullet list, Blockquote** select karein.
  * Next.js semantic HTML5 render karta hai jisse Google crawler ko perfect content structure milta hai.

---

### 4. Image ALT Text & Automated Optimization
* **WordPress Mein Kaise Hota Tha:**
  Image upload karke right sidebar mein Alt text bharna padta tha. Bhool jaane par image bina alt tag ke chali jaati thi.
* **Next.js + Sanity Mein Kaise Chalega:**
  * Sanity schema mein Image ALT text **mandatory (required)** set kiya gaya hai.
  * Image upload hote hi ALT text aur optional Caption ka field popup hota hai.
  * Next.js automatically image ko **Next-gen WebP/AVIF format** mein compress karta hai aur exact screen size ke hisab se serve karta hai (No slow image penalties by Google!).

---

### 5. Canonical Tags Management
* **WordPress Mein Kaise Hota Tha:**
  Yoast auto canonical banata tha ya Advanced tab se custom canonical URL dalte the.
* **Next.js + Sanity Mein Kaise Chalega:**
  * Default behavior: Next.js automatically self-referencing canonical tag generate karta hai:
    `<link rel="canonical" href="https://zyntechlabs.io/blog/post-slug" />`
  * Agar kisi syndicated / cross-domain article ke liye custom canonical chahiye, toh Studio mein **"Canonical URL Override"** field mein custom link paste kar dein.

---

### 6. Dynamic XML Sitemap
* **WordPress Mein Kaise Hota Tha:**
  Yoast plugin `/sitemap_index.xml` generate karta tha.
* **Next.js + Sanity Mein Kaise Chalega:**
  * URL: **`https://zyntechlabs.io/sitemap.xml`**
  * Yeh live dynamic route hai (`src/app/sitemap.ts`).
  * Jab bhi SEO team Sanity mein naya blog post ya case study publish karti hai, sitemap **automatically bina kisi manual action ke update** ho jata hai.
  * Priority (`1.0`, `0.9`, `0.8`), `changeFrequency`, aur `lastModified` dates Googlebot ke standard ke hisab se dynamically calculated rehte hain.

---

### 7. Dynamic Robots.txt
* **WordPress Mein Kaise Hota Tha:**
  Yoast File Editor ya FTP se physical `robots.txt` edit hota tha.
* **Next.js + Sanity Mein Kaise Chalega:**
  * URL: **`https://zyntechlabs.io/robots.txt`**
  * Auto-configured rules:
    ```txt
    User-agent: *
    Allow: /
    Disallow: /studio
    Disallow: /api/

    Sitemap: https://zyntechlabs.io/sitemap.xml
    ```
  * Search engines ko public content crawl karne deta hai aur admin CMS (`/studio`) aur API routes ko block rakhta hai.

---

### 8. 301 Permanent Redirects
* **WordPress Mein Kaise Hota Tha:**
  "Redirection" plugin install karke source aur target URL enter karte the.
* **Next.js + Sanity Mein Kaise Chalega:**
  * **Option A:** `next.config.ts` ke `redirects()` function mein 1 line add karein (Instant Edge 301 Redirect with 0ms latency).
  * **Option B:** Sanity Studio > **Site Settings** > **301 Redirects Table** mein directly Source & Target URL add karein.

---

### 9. Schema Markup (Structured Data JSON-LD)
* **WordPress Mein Kaise Hota Tha:**
  Schema Pro plugin ya RankMath schema generator.
* **Next.js + Sanity Mein Kaise Chalega:**
  Next.js Google ke officially recommended **JSON-LD format** mein structured data `<head>` mein inject karta hai:
  * **Organization Schema:** Company name, logo, contact points, sameAs social links.
  * **WebSite Schema:** Sitelinks Search Box support.
  * **BlogPosting Schema:** Headline, author name, datePublished, dateModified, publisher logo.
  * **CreativeWork / CaseStudy Schema:** Client name, case study overview.
  * **BreadcrumbList Schema:** Google search snippets mein breadcrumb trail hierarchy display ke liye.

---

### 10. Breadcrumbs Navigation
* **WordPress Mein Kaise Hota Tha:**
  Yoast Breadcrumbs shortcode theme file mein daalna padta tha.
* **Next.js + Sanity Mein Kaise Chalega:**
  * Har deep page (Blog detail, Case study detail, Contact) par visual breadcrumbs built-in hain:
    `Home > Blog > How Enterprise Companies Are Scaling Microservices`
  * Har link Google Rich Results `BreadcrumbList` schema se connected hai.

---

### 11. Open Graph & Social Sharing Tags
* **WordPress Mein Kaise Hota Tha:**
  Yoast Social tab mein Facebook Title / Twitter Image select karte the.
* **Next.js + Sanity Mein Kaise Chalega:**
  * Studio ke SEO section mein **Open Graph Image** upload karein (1200x630px recommended).
  * Next.js automatically generate karega:
    * `<meta property="og:title" ... />`
    * `<meta property="og:description" ... />`
    * `<meta property="og:image" ... />`
    * `<meta name="twitter:card" content="summary_large_image" />`
  * User ke liye LinkedIn, Twitter/X, Facebook, aur 1-Click Copy Link share buttons live page par ready hain.

---

### 12. Index / No-Index Toggle
* **WordPress Mein Kaise Hota Tha:**
  Yoast Advanced tab > "Allow search engines to show this Post in search results?" > No.
* **Next.js + Sanity Mein Kaise Chalega:**
  * Studio mein post/page ke andar **"Disallow Indexing (noindex)"** aur **"Disallow Follow (nofollow)"** checkbox diya gaya hai.
  * Checkbox select karne par Next.js page par:
    `<meta name="robots" content="noindex, nofollow" />` automatically set kar deta hai aur XML sitemap se us URL ko exclude kar deta hai.

---

### 13. Tracking Integrations (GSC, GA4, GTM)
* **WordPress Mein Kaise Hota Tha:**
  Insert Headers and Footers plugin ya Site Kit by Google.
* **Next.js + Sanity Mein Kaise Chalega:**
  * **Google Tag Manager (GTM):** GTM container script async load hota hai bina Core Web Vitals ko affect kiye.
  * **Google Analytics 4 (GA4):** Next.js route change tracking automatic gtag integration ke sath configured hai.
  * **Google Search Console Verification:** Verification meta tag directly inject hota hai.
  * *Where to update IDs:* `.env.local` file ya Sanity Studio > Site Settings.

---

### 14. SEO-Friendly Pagination
* **WordPress Mein Kaise Hota Tha:**
  `/blog/page/2/` with rel="next" / rel="prev".
* **Next.js + Sanity Mein Kaise Chalega:**
  * Clean server-side query parameter `/blog?page=2` ya sub-route based pagination support.
  * Canonical tags page number ke sath accurately maintain rehte hain duplicate content issue se bachne ke liye.

---

### 15. Speed & Core Web Vitals Advantage
* **WordPress:** Heavy PHP rendering + 20+ plugins = LCP > 3.5s, Low Mobile Score (40-60).
* **Next.js + Sanity:** Static Site Generation (SSG) + Global Edge Caching = **LCP < 1.0s, CLS = 0, Google PageSpeed Score = 95–100**.

---

## 🛠️ SEO Team Workflow: Naya Article Publish Kaise Karein?

1. **Step 1:** Browser mein `https://yourdomain.com/studio` par jaayein aur login karein.
2. **Step 2:** Left menu se **"Blog Posts (Articles)"** par click karein aur **"Create New Post"** dabayein.
3. **Step 3:** Title likhein aur Slug generate karein.
4. **Step 4:** Cover Image upload karein aur **Image ALT Text** zaroor fill karein.
5. **Step 5:** Body content mein headings (H2, H3) aur internal links add karein.
6. **Step 6:** Niche **Yoast SEO Section** mein:
   * Meta Title (40-60 chars)
   * Meta Description (140-160 chars)
   * Focus Keywords
   * Open Graph Share Image
7. **Step 7:** **Publish** par click karein.
8. **Step 8:** Next.js instant page render karega, XML sitemap update ho jayega, aur Googlebot ke liye page instant ready ho jayega!
