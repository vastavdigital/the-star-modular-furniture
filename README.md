# The Star Modular Furniture — website

Static HTML/CSS/JS. No build step, no framework. Upload the folder contents to any host (cPanel, Hostinger, Netlify, GitHub Pages).

## Before going live
1. **Set your domain** (needed for canonical URLs, sitemap and social previews). From inside this folder:
   `grep -rl "https://www.yourdomain.com" . | xargs sed -i 's#https://www.yourdomain.com#https://YOUR-REAL-DOMAIN#g'`
2. **Check the Instagram handle.** The brochure says `thestarmodulaefurniture` (looks like a typo). Search the file for `thestarmodulaefurniture` and correct it in contact.html, footer and the JSON-LD.
3. **Add videos** to `assets/videos/` (see PUT-VIDEOS-HERE.txt): `hero-kitchen.mp4`, `showroom-loop.mp4`. Until then the photos show.
4. **Submit** `sitemap.xml` in Google Search Console, and create/verify a Google Business Profile for the Tagore Road showroom (biggest local SEO win).

## Free stock photos/videos
Photos: unsplash.com, pexels.com, pixabay.com, burst.shopify.com. Videos: pexels.com/videos, pixabay.com/videos, mixkit.co, coverr.co, videvo.net.
To replace a photo, save it as WebP (squoosh.app) under the same filename in `assets/images/`.

## SEO included
Unique title + meta description per page, canonical, Open Graph, one H1 per page, JSON-LD (FurnitureStore, Service, FAQPage, BreadcrumbList), sitemap.xml, robots.txt, lazy-loaded images with width/height and alt text, preloaded hero image, mobile-first layout, tap-to-call and WhatsApp bar.

## Enquiry form
Opens WhatsApp with the visitor's details pre-filled (no server needed). For email delivery, connect Formspree or Web3Forms.
