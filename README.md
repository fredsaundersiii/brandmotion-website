# BrandMotion — Website

Static site for BrandMotion (brandmotionsf.com). Plain HTML/CSS/JS — no build step, no framework, free to host on GitHub Pages.

## Structure

```
index.html       Home
services.html    Services
about.html       About
contact.html     Contact (mailto-based form, no backend needed)
css/style.css    All styles
js/script.js     Nav toggle, footer year, contact form
CNAME            Custom domain config for GitHub Pages
```

## Deploy to GitHub Pages (free)

1. **Create a new GitHub repo** (e.g. `brandmotion-website`), public.
2. **Push this folder** to the repo:
   ```bash
   cd brandmotion
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**: repo → Settings → Pages → Source: `Deploy from a branch` → Branch: `main`, folder `/ (root)` → Save.
4. GitHub will build a URL like `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a minute or two — confirm the site loads there first.

## Point your custom domain (www.brandmotionsf.com) at it

This repo already includes a `CNAME` file containing `www.brandmotionsf.com`, which tells GitHub Pages to serve the site on that domain once DNS is configured.

**At your domain registrar / DNS provider** (wherever brandmotionsf.com's DNS is currently managed — check your Squarespace domain settings or registrar):

1. Add a **CNAME record**:
   - Host: `www`
   - Value: `YOUR-USERNAME.github.io`
2. For the bare domain (`brandmotionsf.com` without www) to also work, add **A records** pointing `@` to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Back in GitHub: repo → Settings → Pages → under "Custom domain" enter `www.brandmotionsf.com` → Save. Check "Enforce HTTPS" once it becomes available (can take a few hours after DNS propagates).

DNS changes can take anywhere from a few minutes to 24-48 hours to fully propagate.

**Important:** if brandmotionsf.com is still on Squarespace, you'll need to either cancel/downgrade the Squarespace plan once DNS is repointed, or at minimum turn off Squarespace's own domain hosting for it, so the two don't conflict.

## Editing content later

- Text lives directly in the `.html` files — search for the text you want to change and edit it.
- Colors, fonts, and spacing are defined once at the top of `css/style.css` under `:root` — change a value there and it updates everywhere.
- The contact form has no backend; it opens the visitor's email client pre-filled with their message, addressed to fred@brandmotionsf.com. If you'd rather collect submissions without opening email (e.g. into a spreadsheet or inbox), a free service like [Formspree](https://formspree.io) can be dropped in — happy to wire that up if you want it.
