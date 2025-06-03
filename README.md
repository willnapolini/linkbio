# 🔗 LinkBio - Modern Links in Bio

> A beautiful, modern alternative to Linktree with glassmorphism design, smooth animations, and mobile-first approach.

![LinkBio Preview](https://github.com/willnapolini/linkbio/blob/main/assets/LinkBio%20Preview.png?raw=true)

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism UI with vibrant gradients
- 📱 **Mobile First** - Perfect on all devices
- ⚡ **Fast Loading** - Optimized for speed
- 🔄 **Smooth Animations** - Engaging hover effects and transitions
- 🎯 **Easy Setup** - Get online in 5 minutes
- 🆓 **Completely Free** - No monthly fees like Linktree
- 🔧 **Fully Customizable** - Make it yours

## 🚀 Quick Start (5 Minutes Setup)

### Method 1: Use GitHub Template (Easiest)

1. **Click "Use this template"** button at the top of this repository
2. **Name your repository** (e.g., `my-linkbio` or `links`)
3. **Make it public** (required for free GitHub Pages)
4. **Go to Settings** → **Pages** → Select **Github Actions** → Define **GitHub Pages Jekyll** → Press **Configure**
5. **Your site is live!** Visit `https://yourusername.github.io/repository-name`

### Method 2: Fork and Customize

1. **Fork this repository** by clicking the Fork button
2. **Clone to your computer**:
   ```bash
   git clone https://github.com/yourusername/linkbio.git
   cd linkbio
   ```
3. **Edit `index.html`** with your information
4. **Push changes**:
   ```bash
   git add .
   git commit -m "Customize my LinkBio"
   git push
   ```

## 📝 Customization Guide

### Step 1: Update Your Profile

Open `index.html` and find these sections:

```html
<!-- Update your name -->
<h1 class="profile-name">Your Name Here</h1>

<!-- Update your bio -->
<p class="profile-bio">Your tagline or bio<br>Second line if needed</p>

<!-- Update profile image -->
<img class="profile-image" src="your-image-url" alt="Your Name">
```

### Step 2: Add Your Social Media Links

Find the social section and update the links:

```html
<nav class="social-section">
    <!-- Telegram -->
    <a href="https://t.me/yourusername" class="social-item">
    
    <!-- Twitter -->
    <a href="https://twitter.com/yourusername" class="social-item">
    
    <!-- Instagram -->
    <a href="https://instagram.com/yourusername" class="social-item">
    
    <!-- Spotify -->
    <a href="https://open.spotify.com/user/yourusername" class="social-item">
</nav>
```

### Step 3: Customize Your Main Links

Update the main links section:

```html
<main class="bento-grid">
    <!-- Example link -->
    <a href="https://your-website.com" class="bento-item pulse-element">
        <div class="bento-icon">🌐</div>
        <div class="bento-title">My Website</div>
    </a>
    
    <!-- YouTube Channel -->
    <a href="https://youtube.com/c/yourchannel" class="bento-item pulse-element">
        <div class="bento-icon">📺</div>
        <div class="bento-title">YouTube</div>
    </a>
    
    <!-- Add more links as needed -->
</main>
```

## 🎨 Customization Options

### Change Colors

Find the `:root` section in the CSS and modify these variables:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #00FFED 0%, #00B8BA 50%, #007acc 100%);
    --secondary-gradient: linear-gradient(135deg, #00E6D9 0%, #00A5A7 50%, #006B99 100%);
    /* Change these to your preferred colors */
}
```

### Popular Color Schemes

**Purple Theme:**
```css
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Sunset Theme:**
```css
--primary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

**Ocean Theme:**
```css
--primary-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

### Add More Links

To add a new link, copy this template:

```html
<a href="YOUR_LINK_HERE" class="bento-item pulse-element">
    <div class="bento-icon">YOUR_EMOJI_OR_ICON</div>
    <div class="bento-title">Your Title</div>
</a>
```

### Common Link Types

```html
<!-- YouTube -->
<a href="https://youtube.com/c/yourchannel" class="bento-item pulse-element">
    <div class="bento-icon">📺</div>
    <div class="bento-title">YouTube</div>
</a>

<!-- TikTok -->
<a href="https://tiktok.com/@yourusername" class="bento-item pulse-element">
    <div class="bento-icon">🎵</div>
    <div class="bento-title">TikTok</div>
</a>

<!-- Blog -->
<a href="https://yourblog.com" class="bento-item pulse-element">
    <div class="bento-icon">✍️</div>
    <div class="bento-title">Blog</div>
</a>

<!-- Shop -->
<a href="https://yourshop.com" class="bento-item pulse-element">
    <div class="bento-icon">🛍️</div>
    <div class="bento-title">Shop</div>
</a>

<!-- Contact -->
<a href="mailto:your@email.com" class="bento-item pulse-element">
    <div class="bento-icon">📧</div>
    <div class="bento-title">Contact</div>
</a>
```

## 📱 Testing Your Site

### Local Testing

1. **Download Live Server extension** for VS Code
2. **Open `index.html`** in VS Code
3. **Right-click** → **Open with Live Server**
4. **Your site opens** in the browser with live reload

### Mobile Testing

- **Chrome DevTools**: Press F12 → Click mobile icon
- **Real Device**: Use your phone to visit the live URL
- **Responsive**: Test different screen sizes

## 🌐 Going Live

### GitHub Pages Setup

1. **Go to your repository** on GitHub
2. **Click Settings** tab
3. **Scroll to Pages** section
4. **Source**: Deploy from a branch
5. **Branch**: Select `main` or `master`
6. **Folder**: `/ (root)`
7. **Save** and wait 2-3 minutes
8. **Your site is live!** at `https://yourusername.github.io/repository-name`

### Custom Domain (Optional)

1. **Buy a domain** (e.g., from Namecheap, GoDaddy)
2. **Add CNAME file** to your repository with your domain
3. **Update DNS settings** to point to GitHub Pages
4. **Enable HTTPS** in GitHub Pages settings

## 🔧 Advanced Tips

### Analytics

Add Google Analytics to track visitors:

```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### SEO Optimization

Update meta tags in the `<head>` section:

```html
<meta name="description" content="Your bio and what you do">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Name - Links">
<meta property="og:description" content="Your bio">
<meta property="og:image" content="link-to-your-image">
```

### Performance Tips

- **Optimize images**: Use WebP format, compress images
- **Use CDN**: For profile images, use Imgur or similar
- **Minimize code**: Remove unused CSS/JS
- **Test speed**: Use Google PageSpeed Insights

## ❓ FAQ

**Q: Is this really free?**
A: Yes! GitHub Pages is free for public repositories.

**Q: Can I use my own domain?**
A: Yes! GitHub Pages supports custom domains.

**Q: How do I update my links?**
A: Edit `index.html`, commit, and push. Changes appear in 1-2 minutes.

**Q: Can I add more than 12 links?**
A: Yes! Just copy the link template and add as many as you need.

**Q: Does it work on mobile?**
A: Yes! It's designed mobile-first and works perfectly on all devices.

**Q: How do I change the background?**
A: Modify the `background` property in the `body` CSS selector.

**Q: Can I remove the "Made by Will" footer?**
A: Yes! Just delete the footer section in the HTML.

## 🆘 Need Help?

1. **Check the examples** in this repository
2. **Read the documentation** in the `/docs` folder
3. **Open an issue** if you're stuck
4. **Watch the video tutorial** (link in repository)

## 🎯 Examples & Inspiration

Check out these live examples:
- [Creative Designer](https://example1.github.io/linkbio)
- [Tech YouTuber](https://example2.github.io/linkbio)
- [Small Business](https://example3.github.io/linkbio)

## 📄 License

MIT License - Use freely for personal or commercial projects!

---

**⭐ Star this repository if it helped you!**

**🤝 Share with friends who need a links page**

**💬 Questions? Open an issue!**
