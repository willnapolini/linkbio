---

# 🔗 LinkBio - Modern Links in Bio

> A beautiful, modern alternative to Linktree with glassmorphism design, smooth animations, mobile-first approach, multilingual support, and dynamic theming.

![LinkBio Preview](https://github.com/willnapolini/linkbio/blob/main/assets/LinkBio%20Preview.png?raw=true)

## ✨ Features

- 🎨 **Modern Design**: Glassmorphism UI with vibrant gradients and a Bento grid layout.
- 📱 **Mobile First**: Responsive design with breakpoints at 768px (tablet) and 1024px (desktop).
- ⚡ **Fast Loading**: Optimized for Core Web Vitals with minimal CSS/JS and image compression.
- 🔄 **Smooth Animations**: Subtle parallax, ripple, fade-in, and pulse effects with `prefers-reduced-motion` fallback.
- 🌍 **Multilingual Support**: 26 languages with dynamic updates for links, bio, and socials.
- 🎨 **Dynamic Theming**: 27 customizable themes (e.g., aurora, dark, solarized) with localStorage persistence.
- ♿ **Accessibility**: Semantic HTML5, ARIA labels, keyboard navigation, and RTL support.
- 🎯 **Easy Setup**: Deploy in 5 minutes using GitHub Pages.
- 🆓 **Completely Free**: No monthly fees, hosted on GitHub Pages.
- 🔧 **Fully Customizable**: Modular CSS (BEM), centralized configuration, and reusable JavaScript components.

## 🆙 Upgrades

LinkBio has evolved significantly with the following enhancements:

- **Multilingual Support**: Added support for 26 languages with dynamic updates for links, social media, and bio.
- **Dynamic Theming**: Expanded to 27 themes with smooth transitions and localStorage persistence.
- **Bento Grid Layout**: Implemented for tablet/desktop, enhancing visual organization of links.
- **Accessibility Improvements**: Added ARIA labels, keyboard navigation, and RTL support for languages like Arabic and Persian.
- **Performance Optimization**: Improved Core Web Vitals with WebP images, GPU-accelerated animations, and minified CSS/JS.

![LinkBio Upgrades](https://github.com/willnapolini/linkbio.github.io/blob/main/assets/LinkBio%20Preview%20Upgrade.png?raw=true)

## 🚀 Quick Start (5 Minutes Setup)

### Method 1: Use GitHub Template (Easiest)
1. Click **"Use this template"** at the top of the [repository](https://github.com/willnapolini/linkbio).
2. Name your repository (e.g., `my-linkbio`).
3. Make it public (required for free GitHub Pages).
4. Go to **Settings** → **Pages** → Select **GitHub Actions** → Define **GitHub Pages Jekyll** → Press **Configure**.
5. Your site is live at `https://yourusername.github.io/repository-name`.

### Method 2: Fork and Customize
1. Fork the [repository](https://github.com/willnapolini/linkbio).
2. Clone to your computer:
   ```bash
   git clone https://github.com/yourusername/linkbio.git
   cd linkbio
   ```
3. Edit `index.html`, `js/data.js`, `js/links.js`, and `js/languages.js` with your details.
4. Push changes:
   ```bash
   git add .
   git commit -m "Customize my LinkBio"
   git push
   ```

## 📝 Customization Guide

### Step 1: Update Your Profile
Edit `js/data.js`:
```javascript
export const data = {
  name: "Your Name Here",
  image: "your-image-url",
  bio: { en: "Your tagline or bio", fr: "Votre slogan ou bio" }
};
```

Update profile image in `assets/images/` or use a CDN URL (e.g., GitHub avatar).

### Step 2: Add Social Media Links
Edit `js/links.js` and `js/languages.js`:
```javascript
// js/links.js
export const socials = [
  { name: "twitter", icon: "<svg>...</svg>" },
  { name: "instagram", icon: "<svg>...</svg>" }
];

// js/languages.js
export const languageLinks = {
  twitter: {
    url: { en: "https://twitter.com/yourusername", fr: "https://twitter.com/yourusername_fr" },
    label: { en: "Follow me on Twitter", fr: "Suivez-moi sur Twitter" }
  }
};
```

### Step 3: Customize Main Links
Edit `js/links.js`:
```javascript
export const links = [
  {
    url: { en: "https://your-website.com", fr: "https://your-website.fr" },
    title: { en: "My Website", fr: "Mon Site" },
    subtitle: { en: "Visit my site", fr: "Visitez mon site" },
    icon: "🌐",
    size: "medium",
    type: "external"
  }
];
```

### Step 4: Customize Themes
Edit `css/themes.css` and `js/themes.js`:
```css
.theme--aurora {
  --primary-gradient: linear-gradient(135deg, #00ff87 0%, #60efff 50%, #b967db 100%);
}
```
```javascript
export const themes = [
  { id: "aurora", label: "Aurora Borealis" },
  { id: "dark", label: "Dark" }
];
```

Popular themes:
- **Purple**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Sunset**: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
- **Ocean**: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`

## 📱 Testing Your Site

### Local Testing
1. Install **Live Server** extension in VS Code.
2. Open `index.html` and select **Open with Live Server**.
3. Test with live reload in your browser.

### Mobile Testing
- Use **Chrome DevTools** (F12 → mobile icon) to simulate devices.
- Visit the live URL on a real mobile device.
- Test responsiveness across screen sizes.

## 🌐 Going Live

### GitHub Pages Setup
1. Go to your repository’s **Settings** → **Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Select `main` or `gh-pages` branch and `/ (root)` folder.
4. Save and wait 2-3 minutes.
5. Your site is live at `https://yourusername.github.io/repository-name`.

### Custom Domain (Optional)
1. Purchase a domain (e.g., Namecheap, GoDaddy).
2. Add a `CNAME` file to your repository with your domain.
3. Update DNS settings to point to GitHub Pages.
4. Enable HTTPS in GitHub Pages settings.

## 🔧 Advanced Tips

### Analytics
Add Google Analytics in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

Extend `js/utils.js` for click tracking:
```javascript
export function trackClick(type, title) {
  gtag('event', 'click', { 'event_category': type, 'event_label': title });
}
```

### SEO Optimization
Update meta tags in `index.html`:
```html
<meta name="description" content="Your bio and what you do">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Name - Links">
<meta property="og:description" content="Your bio">
<meta property="og:image" content="your-image-url">
```

### Performance Tips
- **Images**: Use WebP format, compress to <100KB, add `loading="lazy"`.
- **CSS/JS**: Minify files, debounce event listeners in `js/main.js`.
- **CDN**: Host images on Imgur or similar for faster loading.
- **Testing**: Use Google PageSpeed Insights for performance checks.

## 🆕 Adding New Languages
1. Edit `js/languages.js` to add a new language:
   ```javascript
   languages.push({ code: "es", label: "Español", icon: "🇪🇸", dir: "ltr" });
   translations.bio.es = "Tu biografía aquí";
   translations.languageLabel.es = "Seleccionar idioma";
   languageLinks.twitter.url.es = "https://twitter.com/yourusername_es";
   languageLinks.twitter.label.es = "Sígueme en Twitter";
   ```
2. Update `js/links.js` for main links and footer:
   ```javascript
   links[0].title.es = "Mi Sitio";
   links[0].subtitle.es = "Visita mi sitio";
   footer.github.label.es = "Perfil de GitHub";
   ```
3. Test locally, ensuring bio, links, and socials update correctly.

## 🆕 Adding New Links
1. Add to `js/links.js`:
   ```javascript
   links.push({
     url: { en: "https://newlink.com", fr: "https://newlink.fr" },
     title: { en: "New Link", fr: "Nouveau Lien" },
     subtitle: { en: "Description", fr: "Description" },
     icon: "🔗",
     size: "medium",
     type: "external"
   });
   ```
2. For social links, update `socials` in `js/links.js` and `languageLinks` in `js/languages.js`.
3. Test across languages and devices.

## 📂 File Structure
```
project-root/
├── index.html            # Main HTML file
├── css/
│   ├── buttons.css       # Button and switcher styles
│   ├── components.css    # Profile, footer, and link grid styles
│   ├── main.css          # Global styles, resets, animations
│   ├── responsive.css    # Media queries for tablet/desktop
│   └── themes.css        # Theme-specific styles
├── js/
│   ├── components.js     # UI components (LinkButton, SocialFooter, etc.)
│   ├── data.js           # Profile configuration
│   ├── languages.js      # Language settings and translations
│   ├── links.js          # Links and social media configurations
│   ├── main.js           # App initialization
│   ├── themes.js         # Theme configurations
│   └── utils.js          # Helper functions
├── assets/
│   └── images/           # Profile and background images
└── README.md             # Project documentation
```

## ❓ FAQ

**Q: Is this really free?**  
A: Yes! GitHub Pages is free for public repositories.

**Q: Can I use a custom domain?**  
A: Yes, configure in GitHub Pages settings with a `CNAME` file.

**Q: How do I update links?**  
A: Edit `js/links.js`, commit, and push. Changes reflect in 1-2 minutes.

**Q: Can I add more languages?**  
A: Yes, update `js/languages.js` and `js/links.js` for translations.

**Q: Does it work on mobile?**  
A: Yes, designed mobile-first with responsive breakpoints.

**Q: Can I remove the footer?**  
A: Yes, delete the footer section in `index.html` or `js/components.js`.

## 🆘 Need Help?
- Check `/docs` folder or examples in the repository.
- Watch the video tutorial (linked in repository).
- Open an issue on GitHub for support.

## 🎯 Examples & Inspiration
- [Creative Designer](https://example1.github.io/linkbio)
- [Tech YouTuber](https://example2.github.io/linkbio)
- [Small Business](https://example3.github.io/linkbio)

## 📄 License
MIT License - Free for personal or commercial use.

## 📜 Changelog
- **v3.0.0 (June 6, 2025)**: Added 26-language support, Bento grid, 27 themes, enhanced accessibility, and performance optimizations.
- **v2.0.0**: Introduced multiple themes and internationalization foundation.
- **v1.0.0**: Initial release with basic Linktree functionality.

---

**⭐ Star this repository if it helped you!**  
**🤝 Share with friends who need a links page.**  
**💬 Questions? Open an issue!**

---
