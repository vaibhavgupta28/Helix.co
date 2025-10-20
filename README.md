# Helix — AdTech Marketing Website

Production-ready marketing website for **Helix**, an AI-native AdTech services company. Built with Next.js 14, TypeScript, Tailwind CSS, and MDX.

## Overview

Helix is a B2B AdTech engineering partner building DSPs, SSPs, DMPs, ad servers, and MetaDSP platforms. This website showcases services, case studies, insights, and provides a contact interface for potential clients.

**Live Preview:** [helix.co](https://helix.co) _(update with actual URL)_

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Content:** MDX for case studies and blog posts
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify / Self-hosted

## Features

### Core Pages
- **Home** — Hero, capabilities, AI differentiator, proof points
- **About** — Mission, story, leadership team
- **Services** — Full-stack AdTech solutions (DSP, SSP, DMP, MetaDSP, consulting)
- **Studio** — Startup studio offering
- **Case Studies** — Real-world client results with detailed breakdowns
- **Insights** — Technical blog with AdTech thought leadership
- **Careers** — Open positions and culture
- **Contact** — Form with server-side validation

### Design System
- **Brand Colors:** Dark theme with neon cyan accent (`#00E5FF`)
- **Typography:** System fonts (optimized for performance)
- **Components:** Reusable Hero, StatBar, Cards, CTABand, Badges, etc.
- **Animations:** Subtle Framer Motion transitions with `prefers-reduced-motion` support

### SEO & Performance
- **Metadata:** Open Graph, Twitter Cards, canonical URLs
- **Structured Data:** JSON-LD for Organization and Services
- **Sitemap:** Auto-generated from pages and MDX content
- **Robots.txt:** Search engine directives
- **Accessibility:** WCAG AA compliant, semantic HTML, focus states, skip-to-content

### Analytics & Privacy
- **Analytics:** Google Analytics 4 integration (opt-in via `.env`)
- **Cookie Consent:** Non-intrusive banner with localStorage persistence
- **Privacy Policy** & **Terms of Service** pages included

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Helix.co
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and configure:
   ```env
   # Google Analytics (optional)
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

   # Email service for contact form (optional)
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

   # Site URL
   NEXT_PUBLIC_SITE_URL=https://helix.co
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

The build generates static pages for optimal performance.

## Project Structure

```
Helix.co/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── api/                 # API routes (contact form)
│   ├── careers/             # Careers page
│   ├── case-studies/        # Case studies index & [slug]
│   ├── contact/             # Contact page
│   ├── insights/            # Blog index & [slug]
│   ├── privacy/             # Privacy policy
│   ├── services/            # Services page
│   ├── studio/              # Studio page
│   ├── terms/               # Terms of service
│   ├── layout.tsx           # Root layout with fonts, metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Auto-generated sitemap
│   └── robots.ts            # Robots.txt configuration
├── components/              # Reusable React components
│   ├── ui/                  # Base UI components (Button, Badge, etc.)
│   ├── Header.tsx           # Site header with nav
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section component
│   ├── StatBar.tsx          # Animated statistics bar
│   ├── CapabilityCard.tsx   # Service capability cards
│   ├── CaseStudyCard.tsx    # Case study preview cards
│   ├── BlogCard.tsx         # Blog post preview cards
│   ├── CTABand.tsx          # Call-to-action band
│   ├── ContactForm.tsx      # Contact form with validation
│   ├── CookieConsent.tsx    # Cookie consent banner
│   ├── Analytics.tsx        # Analytics integration
│   └── JsonLd.tsx           # Structured data components
├── content/                 # MDX content files
│   ├── case-studies/        # Case study MDX files
│   │   ├── metadsp-global-advertiser.mdx
│   │   ├── dmp-healthcare-network.mdx
│   │   └── ssp-publisher-consortium.mdx
│   └── insights/            # Blog post MDX files
│       ├── metadsps-redefining-programmatic.mdx
│       ├── data-privacy-meets-performance.mdx
│       ├── ai-in-media-buying-beyond-optimization.mdx
│       └── building-ad-server-that-scales.mdx
├── lib/                     # Utility functions
│   ├── utils.ts             # General utilities (cn, formatNumber, etc.)
│   └── mdx.ts               # MDX content loaders
├── public/                  # Static assets
├── .env.example             # Environment variables template
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Content Management

### Adding Case Studies

Create a new `.mdx` file in `content/case-studies/`:

```mdx
---
title: "Your Case Study Title"
client: "Client Name"
industry: "Industry"
challenge: "Brief description of the challenge"
results:
  - "Result 1"
  - "Result 2"
  - "Result 3"
tags:
  - "DSP"
  - "AI"
date: "2024-12-01"
---

## Your case study content here

Write in Markdown/MDX format...
```

The case study will automatically appear on `/case-studies` and be accessible at `/case-studies/[slug]`.

### Adding Blog Posts

Create a new `.mdx` file in `content/insights/`:

```mdx
---
title: "Your Blog Post Title"
excerpt: "A brief excerpt describing the post"
date: "2024-12-01"
author: "Author Name"
tags:
  - "AdTech"
  - "AI"
readingTime: "5 min read"
---

## Your blog content here

Write in Markdown/MDX format...
```

The post will automatically appear on `/insights` and be accessible at `/insights/[slug]`.

## Contact Form Setup

The contact form uses a Next.js API route (`/app/api/contact/route.ts`). To enable email sending:

1. **Install Resend** (recommended):
   ```bash
   npm install resend
   ```

2. **Update `/app/api/contact/route.ts`:**

   Uncomment and configure the email sending code in the `sendEmail()` function.

3. **Add Resend API key to `.env`:**
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   ```

Alternatively, integrate with SendGrid, Mailgun, or your preferred email service.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables
5. Deploy!

### Self-Hosted

```bash
npm run build
npm run start
```

Use a process manager like PM2 or run in a Docker container.

## Customization

### Branding

Update brand colors in `tailwind.config.ts`:

```ts
colors: {
  hx: {
    bg: "#0B0F14",        // Background
    surface: "#0E141B",   // Surface
    text: "#E6EDF5",      // Text
    muted: "#9AA6B2",     // Muted text
    accent: "#00E5FF",    // Primary accent
    "accent-2": "#3B82F6", // Secondary accent
    border: "#1F2A37",    // Borders
  },
}
```

### Typography

System fonts are used for performance. To use Google Fonts:

1. Install `next/font/google`
2. Import fonts in `app/layout.tsx`
3. Update `tailwind.config.ts` fontFamily

### Analytics

Enable Google Analytics by adding your Measurement ID to `.env`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Or replace the `Analytics` component with your preferred solution (Plausible, Fathom, etc.).

## Performance

- **Lighthouse Scores:** Target 95+ for performance, accessibility, and SEO
- **Image Optimization:** Use Next.js `<Image/>` component
- **Code Splitting:** Automatic with Next.js App Router
- **Static Generation:** Most pages pre-rendered at build time

## Accessibility

- **WCAG AA Compliant:** Color contrast, semantic HTML, ARIA labels
- **Keyboard Navigation:** All interactive elements accessible via keyboard
- **Focus States:** Visible focus indicators
- **Skip to Content:** Link for screen reader users
- **Reduced Motion:** Respects `prefers-reduced-motion` preference

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT License - feel free to use this template for your own projects.

## Support

For questions or issues, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
