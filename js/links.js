/**
 * links.js
 * Purpose: Defines link, social media, and footer configurations for the Linktree-style website, supporting multilingual URLs, titles, subtitles, and labels.
 * Dependencies: Relies on languages.js for language-specific URLs and accessibility labels.
 * Usage: Imported by data.js to populate config.links, config.socials, and config.footer, used by components.js to render link buttons, social footer icons, and GitHub footer link.
 * Performance Notes: Static configuration with minimal runtime overhead; language-specific URLs and labels resolved via languages.js.
 * Error Handling: Missing URLs or translations fall back to 'en' (defaultLanguage from languages.js).
 * Notes: Language codes must match languages.js (en, zh, hi, es, fr, ar, bn, pt, ru, ur, id, de, ja, sw, mr, te, tr, ko, ta, vi, it, fa, pl, uk, ms, th).
 * Last Modified: June 6, 2025 - Updated to support language-specific URLs and footer labels.
 */
export const links = [
  {
    url: {
      en: 'https://en.willonsuccess.com/blog',
      zh: 'https://zh.willonsuccess.com/blog',
      hi: 'https://hi.willonsuccess.com/blog',
      es: 'https://es.willonsuccess.com/blog',
      fr: 'https://fr.willonsuccess.com/blog',
      ar: 'https://ar.willonsuccess.com/blog',
      bn: 'https://bn.willonsuccess.com/blog',
      pt: 'https://pt.willonsuccess.com/blog',
      ru: 'https://ru.willonsuccess.com/blog',
      ur: 'https://ur.willonsuccess.com/blog',
      id: 'https://id.willonsuccess.com/blog',
      de: 'https://de.willonsuccess.com/blog',
      ja: 'https://ja.willonsuccess.com/blog',
      sw: 'https://sw.willonsuccess.com/blog',
      mr: 'https://mr.willonsuccess.com/blog',
      te: 'https://te.willonsuccess.com/blog',
      tr: 'https://tr.willonsuccess.com/blog',
      ko: 'https://ko.willonsuccess.com/blog',
      ta: 'https://ta.willonsuccess.com/blog',
      vi: 'https://vi.willonsuccess.com/blog',
      it: 'https://it.willonsuccess.com/blog',
      fa: 'https://fa.willonsuccess.com/blog',
      pl: 'https://pl.willonsuccess.com/blog',
      uk: 'https://uk.willonsuccess.com/blog',
      ms: 'https://ms.willonsuccess.com/blog',
      th: 'https://th.willonsuccess.com/blog'
    },
    icon: '📝',
    title: {
      en: 'Blog', zh: '博客', hi: 'ब्लॉग', es: 'Blog', fr: 'Blogue',
      ar: 'مدونة', bn: 'ব্লগ', pt: 'Blog', ru: 'Блог', ur: 'بلاگ',
      id: 'Blog', de: 'Blog', ja: 'ブログ', sw: 'Blogi', mr: 'ब्लॉग',
      te: 'బ్లాగ్', tr: 'Blog', ko: '블로그', ta: 'வலைப்பதிவு', vi: 'Blog',
      it: 'Blog', fa: 'وبلاگ', pl: 'Blog', uk: 'Блог', ms: 'Blog',
      th: 'บล็อก'
    },
    subtitle: {
      en: 'Read my posts', zh: '阅读我的文章', hi: 'मेरे पोस्ट पढ़ें', es: 'Lee mis publicaciones',
      fr: 'Lire mes articles', ar: 'اقرأ منشوراتي', bn: 'আমার পোস্ট পড়ুন', pt: 'Leia meus posts',
      ru: 'Читайте мои посты', ur: 'میری پوسٹس پڑھیں', id: 'Baca postingan saya', de: 'Meine Beiträge lesen',
      ja: '私の投稿を読む', sw: 'Soma machapisho yangu', mr: 'माझ्या पोस्ट वाचा', te: 'నా పోస్ట్‌లు చదవండి',
      tr: 'Yazılarımı oku', ko: '내 게시물 읽기', ta: 'என் இடுகைகளைப் படியுங்கள்', vi: 'Đọc bài viết của tôi',
      it: 'Leggi i miei post', fa: 'پست‌های من را بخوانید', pl: 'Przeczytaj moje posty', uk: 'Читайте мої пости',
      ms: 'Baca catatan saya', th: 'อ่านโพสต์ของฉัน'
    },
    type: 'external',
    pulse: true,
    size: 'wide'
  },
  {
    url: {
      en: 'https://en.willonsuccess.com/shop',
      zh: 'https://zh.willonsuccess.com/shop',
      hi: 'https://hi.willonsuccess.com/shop',
      es: 'https://es.willonsuccess.com/shop',
      fr: 'https://fr.willonsuccess.com/shop',
      ar: 'https://ar.willonsuccess.com/shop',
      bn: 'https://bn.willonsuccess.com/shop',
      pt: 'https://pt.willonsuccess.com/shop',
      ru: 'https://ru.willonsuccess.com/shop',
      ur: 'https://ur.willonsuccess.com/shop',
      id: 'https://id.willonsuccess.com/shop',
      de: 'https://de.willonsuccess.com/shop',
      ja: 'https://ja.willonsuccess.com/shop',
      sw: 'https://sw.willonsuccess.com/shop',
      mr: 'https://mr.willonsuccess.com/shop',
      te: 'https://te.willonsuccess.com/shop',
      tr: 'https://tr.willonsuccess.com/shop',
      ko: 'https://ko.willonsuccess.com/shop',
      ta: 'https://ta.willonsuccess.com/shop',
      vi: 'https://vi.willonsuccess.com/shop',
      it: 'https://it.willonsuccess.com/shop',
      fa: 'https://fa.willonsuccess.com/shop',
      pl: 'https://pl.willonsuccess.com/shop',
      uk: 'https://uk.willonsuccess.com/shop',
      ms: 'https://ms.willonsuccess.com/shop',
      th: 'https://th.willonsuccess.com/shop'
    },
    icon: '🛒',
    title: {
      en: 'Shop', zh: '商店', hi: 'दुकान', es: 'Tienda', fr: 'Boutique',
      ar: 'متجر', bn: 'দোকান', pt: 'Loja', ru: 'Магазин', ur: 'دکان',
      id: 'Toko', de: 'Shop', ja: 'ショップ', sw: 'Duka', mr: 'दुकान',
      te: 'షాప్', tr: 'Mağaza', ko: '상점', ta: 'கடை', vi: 'Cửa hàng',
      it: 'Negozio', fa: 'فروشگاه', pl: 'Sklep', uk: 'Магазин', ms: 'Kedai',
      th: 'ร้านค้า'
    },
    subtitle: {
      en: 'Browse my products', zh: '浏览我的产品', hi: 'मेरे उत्पाद देखें', es: 'Explora mis productos',
      fr: 'Parcourez mes produits', ar: 'تصفح منتجاتي', bn: 'আমার পণ্য ব্রাউজ করুন', pt: 'Navegue pelos meus produtos',
      ru: 'Ознакомьтесь с моими товарами', ur: 'میری مصنوعات دیکھیں', id: 'Jelajahi produk saya', de: 'Durchstöbere meine Produkte',
      ja: '私の商品を見る', sw: 'Vinjari bidhaa zangu', mr: 'माझी उत्पादने पहा', te: 'నా ఉత్పత్తులను బ్రౌజ్ చేయండి',
      tr: 'Ürünlerime göz at', ko: '내 제품 둘러보기', ta: 'என் பொருட்களை உலாவுங்கள்', vi: 'Duyệt sản phẩm của tôi',
      it: 'Sfoglia i miei prodotti', fa: 'محصولات من را مرور کنید', pl: 'Przeglądaj moje produkty', uk: 'Перегляньте мої продукти',
      ms: 'Layar produk saya', th: 'เรียกดูผลิตภัณฑ์ของฉัน'
    },
    type: 'external',
    pulse: true,
    size: 'small'
  },
  {
    url: {
      en: 'mailto:contact@willonsuccess.com',
      zh: 'mailto:contact@willonsuccess.com',
      hi: 'mailto:contact@willonsuccess.com',
      es: 'mailto:contact@willonsuccess.com',
      fr: 'mailto:contact@willonsuccess.com',
      ar: 'mailto:contact@willonsuccess.com',
      bn: 'mailto:contact@willonsuccess.com',
      pt: 'mailto:contact@willonsuccess.com',
      ru: 'mailto:contact@willonsuccess.com',
      ur: 'mailto:contact@willonsuccess.com',
      id: 'mailto:contact@willonsuccess.com',
      de: 'mailto:contact@willonsuccess.com',
      ja: 'mailto:contact@willonsuccess.com',
      sw: 'mailto:contact@willonsuccess.com',
      mr: 'mailto:contact@willonsuccess.com',
      te: 'mailto:contact@willonsuccess.com',
      tr: 'mailto:contact@willonsuccess.com',
      ko: 'mailto:contact@willonsuccess.com',
      ta: 'mailto:contact@willonsuccess.com',
      vi: 'mailto:contact@willonsuccess.com',
      it: 'mailto:contact@willonsuccess.com',
      fa: 'mailto:contact@willonsuccess.com',
      pl: 'mailto:contact@willonsuccess.com',
      uk: 'mailto:contact@willonsuccess.com',
      ms: 'mailto:contact@willonsuccess.com',
      th: 'mailto:contact@willonsuccess.com'
    },
    icon: '✉️',
    title: {
      en: 'Contact', zh: '联系', hi: 'संपर्क', es: 'Contacto', fr: 'Contact',
      ar: 'اتصل', bn: 'যোগাযোগ', pt: 'Contato', ru: 'Контакт', ur: 'رابطہ',
      id: 'Kontak', de: 'Kontakt', ja: '連絡', sw: 'Mawasiliano', mr: 'संपर्क',
      te: 'సంప్రదించండి', tr: 'İletişim', ko: '연락처', ta: 'தொடர்பு', vi: 'Liên hệ',
      it: 'Contatto', fa: 'تماس', pl: 'Kontakt', uk: 'Контакт', ms: 'Hubungi',
      th: 'ติดต่อ'
    },
    subtitle: {
      en: 'Get in touch', zh: '联系我', hi: 'संपर्क करें', es: 'Ponte en contacto',
      fr: 'Prenez contact', ar: 'تواصل معي', bn: 'যোগাযোগ করুন', pt: 'Entre em contato',
      ru: 'Свяжитесь со мной', ur: 'رابطہ کریں', id: 'Hubungi saya', de: 'Kontaktiere mich',
      ja: '私に連絡する', sw: 'Wasiliana nami', mr: 'माझ्याशी संपर्क साधा', te: 'సంప్రదించండి',
      tr: 'Bana ulaş', ko: '연락하기', ta: 'தொடர்பு கொள்ளுங்கள்', vi: 'Liên lạc với tôi',
      it: 'Contattami', fa: 'با من تماس بگیرید', pl: 'Skontaktuj się ze mną', uk: 'Зв’яжіться зі мною',
      ms: 'Hubungi saya', th: 'ติดต่อฉัน'
    },
    type: 'email',
    pulse: false,
    size: 'tall'
  }
];
export const socials = [
  {
    name: 'telegram',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.265 2.737a.893.893 0 0 0-.908-.322l-19.013 7.33a.892.892 0 0 0-.093 1.585l4.839 2.934a.892.892 0 0 0 .966.033l9.07-5.94a.446.446 0 0 1 .604.094.446.446 0 0 1-.094.604l-9.07 5.94a.892.892 0 0 0-.322.717l-.517 4.104a.892.892 0 0 0 1.326.836l4.839-3.573 5.008 3.906a.892.892 0 0 0 1.403-.375l3.573-17.013a.892.892 0 0 0-.322-.908z"/></svg>`
  },
  {
    name: 'twitter',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`
  },
  {
    name: 'instagram',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
  },
  {
    name: 'spotify',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.18 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`
  }
];
export const footer = {
  github: {
    url: 'https://github.com/yourusername',
    label: {
      en: 'GitHub Profile', es: 'Perfil de GitHub', hi: 'गिटहब प्रोफाइल', ar: 'ملف GitHub',
      pt: 'Perfil do GitHub', fr: 'Profil GitHub', zh: 'GitHub 个人资料', ru: 'Профиль GitHub',
      id: 'Profil GitHub', de: 'GitHub-Profil', ja: 'GitHub プロフィール', bn: 'গিটহাব প্রোফাইল',
      ur: 'گیٹ ہب پروفائل', sw: 'Wasifu wa GitHub', mr: 'गिटहब प्रोफाइल', te: 'గిట్‌హబ్ ప్రొఫైల్',
      tr: 'GitHub Profili', ko: 'GitHub 프로필', ta: 'கிட்ஹப் சுயவிவரம்', vi: 'Hồ sơ GitHub',
      it: 'Profilo GitHub', fa: 'پروفایل گیت‌هاب', pl: 'Profil GitHub', uk: 'Профіль GitHub',
      ms: 'Profil GitHub', th: 'โปรไฟล์ GitHub'
    }
  }
};