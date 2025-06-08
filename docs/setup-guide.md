# LinkBio Setup Guide

This guide helps you set up your LinkBio page, a modern Linktree alternative with glassmorphism design, multilingual support, and dynamic theming. It covers cloning the repository, configuring your profile in `index.html`, setting up links and other configurations in `js/links.js` and `js/languages.js`, testing locally, and deploying to GitHub Pages. You can have your site live in about 5 minutes.

## 🛠️ Prerequisites

- **GitHub Account**: Needed for forking or using the repository template.
- **Git**: Installed on your computer ([download here](https://git-scm.com/downloads)).
- **Text Editor**: Use VS Code or similar for editing files.
- **Node.js**: Optional, for local testing with `npx serve` ([download here](https://nodejs.org)).
- **Live Server**: Recommended VS Code extension for local previews ([install here](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).

## 🚀 Step 1: Get the Repository

Choose one of the following methods to obtain the LinkBio project.

### Method 1: Use GitHub Template (Easiest)
1. Visit the [LinkBio repository](https://github.com/willnapolini/linkbio).
2. Click **"Use this template"** at the top.
3. Name your repository (e.g., `my-linkbio` or `links`).
4. Set it to **public** (required for free GitHub Pages).
5. Click **Create repository from template**.
6. Clone your new repository:
   ```bash
   git clone https://github.com/yourusername/my-linkbio.git
   cd my-linkbio
   ```

### Method 2: Fork the Repository
1. Visit the [LinkBio repository](https://github.com/willnapolini/linkbio).
2. Click the **Fork** button to create a copy under your GitHub account.
3. Clone your forked repository:
   ```bash
   git clone https://github.com/yourusername/linkbio.git
   cd linkbio
   ```

## 📝 Step 2: Configure Your Site

Customize your LinkBio page by updating the profile details in `index.html` and configuring links in `js/links.js` and `js/languages.js`.

1. **Update Profile Details** (`index.html`):
   - Open `index.html` in your text editor.
   - Update the profile image, name, and bio in the `<header>` section:
     ```html
     <header class="profile-header" role="banner">
         <img class="profile-header__image" src="https://your-image-url.com/profile.jpg" alt="Profile photo of Your Name" loading="lazy">
         <h1 class="profile-header__name">Your Name Here</h1>
         <p class="profile-header__bio">Your tagline or bio</p>
     </header>
     ```
   - **Profile Image**:
     - **External URL**: Use a CDN like Imgur or your GitHub avatar (e.g., `https://github.com/yourusername.png`).
     - **Local Image**: Place your image in `assets/images/` (e.g., `./assets/images/profile.jpg`), compress to <100KB using WebP format via [Squoosh](https://squoosh.app), and update the `src` attribute.
     - Ensure the `alt` attribute describes the image for accessibility (e.g., "Profile photo of Your Name").
   - **SEO and Metadata**:
     - Update meta tags in the `<head>` section for better search engine visibility:
       ```html
       <meta name="description" content="Your bio and what you do">
       <meta name="keywords" content="your, keywords, here">
       <meta name="author" content="Your Name">
       <meta property="og:title" content="Your Name - Digital Creator">
       <meta property="og:description" content="Explore Your Name's links and social media profiles">
       <meta property="og:image" content="https://your-image-url.com/profile.jpg">
       <meta property="og:url" content="https://yourusername.github.io">
       <title>Your Name</title>
       ```
     - Update the favicon in the `<head>` section:
       ```html
       <link rel="icon" type="image/png" href="https://your-image-url.com/favicon.png">
       ```

2. **Configure Social Media Links** (`js/links.js` and `js/languages.js`):
   - In `js/links.js`, update the `socials` array:
     ```javascript
     export const socials = [
       { name: "twitter", icon: "<svg viewBox='0 0 24 24'><path d='...'></path></svg>" },
       { name: "instagram", icon: "<svg viewBox='0 0 24 24'><path d='...'></path></svg>" }
       // Add more, e.g., { name: "linkedin", icon: "<svg>...</svg>" }
     ];
     ```
     - Find SVG icons from [FontAwesome](https://fontawesome.com) or [Heroicons](https://heroicons.com).
   - In `js/languages.js`, add language-specific URLs and labels:
     ```javascript
     export const languageLinks = {
       twitter: {
         url: { en: "https://twitter.com/yourusername", fr: "https://twitter.com/yourusername_fr" },
         label: { en: "Follow me on Twitter", fr: "Suivez-moi sur Twitter" }
       },
       instagram: {
         url: { en: "https://instagram.com/yourusername", fr: "https://instagram.com/yourusername_fr" },
         label: { en: "Follow me on Instagram", fr: "Suivez-moi sur Instagram" }
       }
     };
     ```

3. **Configure Main Links** (`js/links.js`):
   - Update the `links` array:
     ```javascript
     export const links = [
       {
         url: { en: "https://your-website.com", fr: "https://your-website.fr" },
         title: { en: "My Website", fr: "Mon Site" },
         subtitle: { en: "Visit my site", fr: "Visitez mon site" },
         icon: "🌐",
         pulse: false,
         size: "medium",
         type: "external"
       },
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

4. **Update Footer** (`js/links.js`):
   - Configure the GitHub footer link:
     ```javascript
     export const footer = {
       github: {
         url: "https://github.com/yourusername",
         label: { en: "GitHub Profile", fr: "Profil GitHub" }
       }
     };
     ```

## 🧪 Step 3: Test Locally

Preview your site to ensure all configurations work correctly.

1. **Using Live Server (Recommended)**:
   - Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.
   - Open `index.html` in VS Code.
   - Right-click and select **Open with Live Server**.
   - Your site opens in your browser with live reload.

2. **Using Node.js**:
   - Ensure Node.js is installed.
   - Run in the project root:
     ```bash
     npx serve
     ```
   - Open `http://localhost:3000` (or the displayed port) in your browser.

3. **What to Test**:
   - Verify profile details (image, name, bio) in `index.html` display correctly.
   - Check that social and main links in `js/links.js` work and update with language changes.
   - Test theme switching (`.theme-switcher`) and language switching (`.language-switcher`).
   - Confirm responsiveness on mobile, tablet, and desktop using Chrome DevTools (F12 → mobile icon).
   - Test accessibility with keyboard navigation (Tab key) and screen readers (e.g., NVDA, VoiceOver).

## 🌐 Step 4: Deploy to GitHub Pages

Host your LinkBio page for free using GitHub Pages.

1. **Commit and Push Changes**:
   - Save and push your changes:
     ```bash
     git add .
     git commit -m "Initial LinkBio setup with profile details"
     git push origin main
     ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Navigate to **Settings** → **Pages**.
   - Under **Source**, select **Deploy from a branch**.
   - Choose the `main` branch (or `gh-pages` if used) and `/ (root)` folder.
   - Click **Save**.
   - Wait 1-2 minutes for deployment.
   - Your site is live at `https://yourusername.github.io/repository-name`.

3. **Verify Deployment**:
   - Visit your site URL.
   - Ensure profile details, links, themes, and languages function as expected.
   - Test on multiple devices (mobile, tablet, desktop).

## 🔧 Step 5: Optional Configurations

### Custom Domain
1. Purchase a domain (e.g., Namecheap, GoDaddy).
2. Create a `CNAME` file in the repository root:
   ```text
   yourdomain.com
   ```
3. Update DNS settings with your provider:
   - Add a `CNAME` record: `yourdomain.com` → `yourusername.github.io`.
   - Add A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
4. Enable HTTPS in **Settings** → **Pages** → **Enforce HTTPS**.

### Add Analytics
1. Add Google Analytics to `index.html` (before `</head>`):
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```
2. Replace `GA_TRACKING_ID` with your Google Analytics ID.
3. Extend `js/utils.js` for click tracking:
   ```javascript
   export function trackClick(type, title) {
     gtag('event', 'click', { event_category: type, event_label: title });
   }
   ```

### SEO Optimization
Update meta tags in `index.html`:
```html
<meta name="description" content="Your bio and what you do">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Name - Digital Creator">
<meta property="og:description" content="Explore Your Name's links and social media profiles">
<meta property="og:image" content="https://your-image-url.com/profile.jpg">
<meta property="og:url" content="https://yourusername.github.io">
```

## ❓ Troubleshooting

- **Site Not Loading?** Verify GitHub Pages settings and ensure the repository is public.
- **Profile Not Updating?** Check `index.html` for correct image `src`, `alt`, and bio text.
- **Links Not Working?** Validate URLs in `js/links.js` and `js/languages.js` for syntax errors.
- **Images Not Displaying?** Ensure image paths are correct (e.g., `./assets/images/profile.jpg`) and files are committed.
- **Language/Theme Issues?** Confirm `js/languages.js` and `js/themes.js` align with `css/themes.css`.
- **Need Help?** Check the `/docs` folder, watch the video tutorial (linked in the repository), or open a GitHub issue.

## 📂 File Structure Reference
```
project-root/
├── index.html            # Main HTML file with profile details
├── css/
│   ├── buttons.css       # Button and switcher styles
│   ├── components.css    # Profile, footer, and link grid styles
│   ├── main.css          # Global styles, resets, animations
│   ├── responsive.css    # Media queries for tablet/desktop
│   └── themes.css        # Theme-specific styles
├── js/
│   ├── components.js     # UI components (LinkButton, SocialFooter, etc.)
│   ├── data.js           # Centralized configuration (excluding profile details)
│   ├── languages.js      # Language settings and translations
│   ├── links.js          # Links and social media configurations
│   ├── main.js           # App initialization
│   ├── themes.js         # Theme configurations
│   └── utils.js          # Helper functions
├── assets/
│   └── images/           # Profile and background images
└── README.md             # Project documentation
```

## 📄 License

MIT License - Free to use and modify for personal or commercial projects.
