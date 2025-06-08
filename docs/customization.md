# LinkBio Customization Guide

This guide walks you through customizing your LinkBio page, a modern Linktree alternative with glassmorphism design, multilingual support, and dynamic theming. Whether you're updating your profile, adding links, or creating new themes, these steps will help you make your page uniquely yours.

## 🛠️ Prerequisites

- **Repository Access**: Fork or use the template from [willnapolini/linkbio](https://github.com/willnapolini/linkbio).
- **Text Editor**: Use VS Code or similar for editing files.
- **Local Testing**: Install the Live Server extension in VS Code for real-time previews.
- **GitHub Pages**: Ensure your repository is public for free hosting.

## 📝 Step 1: Update Your Profile

Your profile details (name, bio, and image) are managed in `js/data.js`. This file centralizes your information for easy updates.

1. **Open `js/data.js`** in your text editor.
2. **Update the following fields**:
   ```javascript
   export const data = {
     name: "Your Name Here", // Your display name
     image: "https://your-image-url.com/profile.jpg", // URL to your profile image (or use a local path like "./assets/images/profile.jpg")
     bio: {
       en: "Your tagline or bio", // English bio
       fr: "Votre slogan ou bio", // French bio (add entries for other languages as needed)
       // Add more languages, e.g., es: "Tu biografía aquí"
     }
   };
   ```
3. **Profile Image**:
   - **Option 1: External URL**: Use a CDN like Imgur or your GitHub avatar (e.g., `https://github.com/yourusername.png`).
   - **Option 2: Local Image**: Place your image in `assets/images/`, then reference it (e.g., `./assets/images/profile.jpg`). Compress to <100KB using WebP format with tools like Squoosh.
4. **Test Changes**:
   - Run locally with Live Server (right-click `index.html` → Open with Live Server).
   - Verify your name, bio, and image display correctly across languages using the language switcher.

## 🔗 Step 2: Customize Social Media Links

Social media links are configured in `js/links.js` (for platform definitions) and `js/languages.js` (for language-specific URLs and labels).

1. **Edit `js/links.js`**:
   - Update the `socials` array to define platforms:
     ```javascript
     export const socials = [
       { name: "twitter", icon: "<svg viewBox='0 0 24 24'><path d='...'></path></svg>" }, // Replace with SVG icon
       { name: "instagram", icon: "<svg viewBox='0 0 24 24'><path d='...'></path></svg>" },
       // Add more, e.g., { name: "linkedin", icon: "<svg>...</svg>" }
     ];
     ```
   - Find SVG icons from resources like [FontAwesome](https://fontawesome.com) or [Heroicons](https://heroicons.com).

2. **Edit `js/languages.js`**:
   - Add language-specific URLs and labels in the `languageLinks` object:
     ```javascript
     export const languageLinks = {
       twitter: {
         url: {
           en: "https://twitter.com/yourusername",
           fr: "https://twitter.com/yourusername_fr"
           // Add more, e.g., es: "https://twitter.com/yourusername_es"
         },
         label: {
           en: "Follow me on Twitter",
           fr: "Suivez-moi sur Twitter"
           // Add more, e.g., es: "Sígueme en Twitter"
         }
       },
       instagram: {
         url: { en: "https://instagram.com/yourusername", fr: "https://instagram.com/yourusername_fr" },
         label: { en: "Follow me on Instagram", fr: "Suivez-moi sur Instagram" }
       }
       // Add more platforms, e.g., linkedin
     };
     ```

3. **Accessibility**:
   - Ensure SVG icons include `aria-hidden="true"` if decorative.
   - Labels in `languageLinks` are used as `aria-label` for screen readers.

4. **Test Changes**:
   - Check that social links appear in the footer (`.social-footer`).
   - Switch languages to confirm URLs and labels update correctly.
   - Verify links are clickable and accessible via keyboard navigation.

## 🌐 Step 3: Customize Main Links

Main links are displayed in the Bento grid (`.link-grid`) and configured in `js/links.js`.

1. **Edit `js/links.js`**:
   - Update the `links` array to add or modify links:
     ```javascript
     export const links = [
       {
         url: {
           en: "https://your-website.com",
           fr: "https://your-website.fr"
           // Add more, e.g., es: "https://your-website.es"
         },
         title: {
           en: "My Website",
           fr: "Mon Site"
         },
         subtitle: {
           en: "Visit my site",
           fr: "Visitez mon site"
         },
         icon: "🌐", // Emoji or SVG (e.g., "<svg>...</svg>")
         pulse: false, // Enable pulse animation (true/false)
         size: "medium", // Options: small, medium, wide, tall, large
         type: "external" // Options: external, email, tel
       },
       // Add more links
       {
         url: { en: "https://youtube.com/c/yourchannel", fr: "https://youtube.com/c/yourchannel_fr" },
         title: { en: "YouTube", fr: "YouTube" },
         subtitle: { en: "Watch my videos", fr: "Regardez mes vidéos" },
         icon: "📺",
         pulse: true,
         size: "wide",
         type: "external"
       }
     ];
     ```

2. **Common Link Types**:
   - **Email**: `url: { en: "mailto:your@email.com" }, type: "email"`
   - **Phone**: `url: { en: "tel:+1234567890" }, type: "tel"`
   - **TikTok**: `url: { en: "https://tiktok.com/@yourusername" }, icon: "🎵"`
   - **Blog**: `url: { en: "https://yourblog.com" }, icon: "✍️"`

3. **Bento Grid Layout**:
   - Use `size` to control link appearance (e.g., `wide` for larger tiles).
   - Test on tablet/desktop (min-width: 768px/1024px) to ensure grid layout is balanced.

4. **Test Changes**:
   - Verify links appear in the Bento grid with correct icons, titles, and subtitles.
   - Switch languages to ensure translations work.
   - Check responsiveness on mobile, tablet, and desktop.

## 🎨 Step 4: Customize Themes

LinkBio supports 27 dynamic themes, managed in `css/themes.css` and `js/themes.js`.

1. **Edit `css/themes.css`**:
   - Modify or add a theme:
     ```css
     .theme--aurora {
       --primary-gradient: linear-gradient(135deg, #00ff87 0%, #60efff 50%, #b967db 100%);
       --secondary-gradient: linear-gradient(135deg, #00e6d9 0%, #00a5a7 50%, #006b99 100%);
       --text-primary: #ffffff;
       --shadow-light: 0 8px 32px rgba(0, 255, 135, 0.3);
     }
     /* Add new theme */
     .theme--custom {
       --primary-gradient: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
       --secondary-gradient: linear-gradient(135deg, #ff9a8b 0%, #ff6a88 100%);
       --text-primary: #333333;
       --shadow-light: 0 8px 32px rgba(255, 107, 107, 0.3);
     }
     ```

2. **Edit `js/themes.js`**:
   - Sync the theme ID and label:
     ```javascript
     export const themes = [
       { id: "aurora", label: "Aurora Borealis" },
       { id: "dark", label: "Dark" },
       { id: "custom", label: "Custom Theme" } // Add new theme
     ];
     ```

3. **Popular Color Schemes**:
   - **Purple**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
   - **Sunset**: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
   - **Ocean**: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`

4. **Test Changes**:
   - Select the theme from the theme switcher (`.theme-switcher`).
   - Verify colors, gradients, and text contrast (WCAG 2.1 compliant, 4.5:1 ratio).
   - Check localStorage persistence by refreshing the page.

## 🌍 Step 5: Add a New Language

LinkBio supports 26 languages, with translations for bio, links, and socials. Add a new language by updating `js/languages.js` and `js/links.js`.

1. **Edit `js/languages.js`**:
   - Add the language to the `languages` array:
     ```javascript
     export const languages = [
       { code: "en", label: "English", icon: "🇺🇳", dir: "ltr" },
       { code: "fr", label: "Français", icon: "🇫🇷", dir: "ltr" },
       { code: "es", label: "Español", icon: "🇪🇸", dir: "ltr" } // New language
     ];
     ```
   - Add translations for bio and language switcher:
     ```javascript
     export const translations = {
       bio: {
         en: "Mindset • Skillset • Toolset",
         fr: "Esprit • Compétences • Outils",
         es: "Mentalidad • Habilidades • Herramientas"
       },
       languageLabel: {
         en: "Select Language",
         fr: "Sélectionner la langue",
         es: "Seleccionar idioma"
       }
     };
     ```
   - Add social media URLs/labels:
     ```javascript
     export const languageLinks = {
       twitter: {
         url: { en: "https://twitter.com/yourusername", fr: "https://twitter.com/yourusername_fr", es: "https://twitter.com/yourusername_es" },
         label: { en: "Follow me on Twitter", fr: "Suivez-moi sur Twitter", es: "Sígueme en Twitter" }
       }
       // Update other platforms
     };
     ```

2. **Edit `js/links.js`**:
   - Add translations for main links:
     ```javascript
     export const links = [
       {
         url: { en: "https://your-website.com", fr: "https://your-website.fr", es: "https://your-website.es" },
         title: { en: "My Website", fr: "Mon Site", es: "Mi Sitio" },
         subtitle: { en: "Visit my site", fr: "Visitez mon site", es: "Visita mi sitio" },
         icon: "🌐",
         pulse: false,
         size: "medium",
         type: "external"
       }
     ];
     ```
   - Update footer GitHub link:
     ```javascript
     export const footer = {
       github: {
         url: "https://github.com/yourusername",
         label: { en: "GitHub Profile", fr: "Profil GitHub", es: "Perfil de GitHub" }
       }
     };
     ```

3. **RTL Support** (if applicable, e.g., Arabic):
   - Set `dir: "rtl"` in `languages` (e.g., `{ code: "ar", label: "العربية", icon: "🇸🇦", dir: "rtl" }`).
   - Add RTL styles in `css/main.css`:
     ```css
     [lang="ar"], [lang="ur"], [lang="fa"] {
       direction: rtl;
       text-align: right;
     }
     ```

4. **Test Changes**:
   - Select the new language from the language switcher.
   - Verify bio, main links, social links, and footer update correctly.
   - Check RTL layout for languages like Arabic or Persian.

## 🔗 Step 6: Add New Links

Add main or social media links to expand your page.

1. **Add a Main Link**:
   - In `js/links.js`, append to the `links` array:
     ```javascript
     links.push({
       url: { en: "https://newlink.com", fr: "https://newlink.fr", es: "https://newlink.es" },
       title: { en: "New Link", fr: "Nouveau Lien", es: "Nuevo Enlace" },
       subtitle: { en: "Description", fr: "Description", es: "Descripción" },
       icon: "🔗",
       pulse: false,
       size: "medium",
       type: "external"
     });
     ```

2. **Add a Social Media Link**:
   - In `js/links.js`, append to `socials`:
     ```javascript
     socials.push({
       name: "linkedin",
       icon: "<svg viewBox='0 0 24 24'><path d='...'></path></svg>"
     });
     ```
   - In `js/languages.js`, add to `languageLinks`:
     ```javascript
     languageLinks.linkedin = {
       url: { en: "https://linkedin.com/in/yourusername", fr: "https://linkedin.com/in/yourusername_fr", es: "https://linkedin.com/in/yourusername_es" },
       label: { en: "Connect on LinkedIn", fr: "Connectez-vous sur LinkedIn", es: "Conecta en LinkedIn" }
     };
     ```

3. **Test Changes**:
   - Check new links appear in the Bento grid or social footer.
   - Verify language-specific URLs and translations.
   - Ensure accessibility (e.g., `aria-label` for social links).

## 🧪 Step 7: Test Your Customizations

1. **Local Testing**:
   - Use Live Server in VS Code to preview changes.
   - Test language and theme switching.
   - Verify responsiveness on mobile, tablet, and desktop (Chrome DevTools or real devices).

2. **Accessibility Testing**:
   - Use screen readers (e.g., NVDA, VoiceOver) to check ARIA labels.
   - Ensure keyboard navigation works (Tab key for focus).
   - Verify color contrast meets WCAG 2.1 (4.5:1).

3. **Performance Testing**:
   - Compress images to <100KB and use WebP format.
   - Minify CSS/JS files (e.g., using online tools like [Terser](https://terser.org)).
   - Check Core Web Vitals with Google PageSpeed Insights.

## 🌐 Step 8: Deploy Your Changes

1. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Customize LinkBio profile and links"
   git push
   ```

2. **GitHub Pages**:
   - Ensure GitHub Pages is enabled in **Settings** → **Pages** (use `main` or `gh-pages` branch).
   - Visit `https://yourusername.github.io/repository-name` after 1-2 minutes.

3. **Custom Domain (Optional)**:
   - Add a `CNAME` file with your domain (e.g., `yourdomain.com`).
   - Update DNS settings with your provider.
   - Enable HTTPS in GitHub Pages settings.

## 🔧 Advanced Customizations

1. **Analytics**:
   - Add Google Analytics in `index.html`:
     ```html
     <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_TRACKING_ID');
     </script>
     ```
   - Extend `js/utils.js` for click tracking:
     ```javascript
     export function trackClick(type, title) {
       gtag('event', 'click', { event_category: type, event_label: title });
     }
     ```

2. **SEO**:
   - Update meta tags in `index.html`:
     ```html
     <meta name="description" content="Your bio and what you do">
     <meta name="keywords" content="your, keywords, here">
     <meta property="og:title" content="Your Name - Links">
     <meta property="og:description" content="Your bio">
     <meta property="og:image" content="your-image-url">
     ```

3. **New Components**:
   - Create a component in `js/components.js`:
     ```javascript
     export function CustomComponent(data) {
       const element = document.createElement('div');
       element.className = 'custom-component';
       element.innerHTML = `<span>${data.text}</span>`;
       return element;
     }
     ```
   - Style in `css/components.css` and initialize in `js/main.js`.

## ❓ Troubleshooting

- **Links Not Updating?** Clear browser cache or check `js/links.js` for syntax errors.
- **Language Not Switching?** Verify `js/languages.js` has matching translations and URLs.
- **Theme Issues?** Ensure `css/themes.css` and `js/themes.js` use the same theme ID.
- **Need Help?** Check the `/docs` folder, open a GitHub issue, or watch the video tutorial (linked in the repository).

## 📄 License

MIT License - Free to use and modify for personal or commercial projects.
