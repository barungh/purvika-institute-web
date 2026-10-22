# Purvika Institute of Learning — website

Single-page static site for Purvika Institute of Learning, Siliguri. No build step.

```
public/
  index.html          the whole page (CSS and JS inline)
  img/                classroom photos
  purvika-*.svg|png   logo, dark logo, app icon
  og-image.png        1200×630 share preview (WhatsApp, Facebook)
  robots.txt, sitemap.xml
vercel.json           static hosting config (framework: none, output: public)
```

## Update the site

1. Edit `public/index.html` (fees, courses, contact are plain HTML sections).
2. Commit and push to `main`. Vercel deploys automatically.

## When a custom domain is added

Replace the site address in `public/index.html` (canonical, og:url, og:image, JSON-LD),
`public/robots.txt` and `public/sitemap.xml`, then submit the sitemap in Google Search Console.
