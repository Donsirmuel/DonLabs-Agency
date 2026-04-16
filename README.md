# DonLabs - Web Development Agency

## About

This repository contains the website for **DonLabs**, a web development agency based in Lagos, Nigeria. The site showcases services, projects, and the team's capabilities in building business websites, e-commerce platforms, and web applications.

### Technologies Featured
- **Backend**: Django, Django REST Framework, Flask, Python
- **Frontend**: HTML, CSS, JavaScript, React, Tailwind CSS
- **Databases**: PostgreSQL, MySQL, SQLite
- **Tools**: Git, Docker, AWS, Celery, Redis

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Analytics Setup (GA4)

1. Create a GA4 property and web data stream for your site.
2. Set `VITE_GA4_MEASUREMENT_ID` in your deployment environment and local `.env` file.
3. Deploy. Analytics loads immediately once the Measurement ID is available.

Tracked events include route `page_view` plus key contact-flow events.

## Google Indexing Checklist

The project now uses clean BrowserRouter URLs and an absolute-url sitemap for `https://donlabs.vercel.app`.

After deployment:

1. Verify [public/robots.txt](public/robots.txt) is served at `/robots.txt`.
2. Verify [public/sitemap.xml](public/sitemap.xml) is served at `/sitemap.xml`.
3. Submit `https://donlabs.vercel.app/sitemap.xml` in Google Search Console.
4. Request indexing for primary pages: `/`, `/services`, `/projects`, `/pricing`, `/about`, `/contact`.
