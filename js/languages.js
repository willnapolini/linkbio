/**
 * languages.js
 * Purpose: Defines language configurations, bio translations, language-specific social media URLs/labels, and language switcher labels for the Linktree-style website.
 * Dependencies: None; provides data for data.js and components.js.
 * Usage: Imported by data.js to populate config.languages, config.translations, and config.languageLinks.
 * Performance Notes: Static configuration with minimal runtime overhead.
 * Error Handling: Provides default language ('en') for fallbacks; missing data logged in utils.js.
 * Notes: Language codes match links.js (en, zh, hi, es, fr, ar, bn, pt, ru, ur, id, de, ja, sw, mr, te, tr, ko, ta, vi, it, fa, pl, uk, ms, th). RTL languages (ar, ur, fa) require dir="rtl" in CSS.
 * Last Modified: June 6, 2025 - Initial creation for multilingual support.
 */
export const languages = [
  { code: 'en', label: 'English', icon: '🇺🇸', dir: 'ltr' },
  { code: 'zh', label: '中文', icon: '🇨🇳', dir: 'ltr' },
  { code: 'hi', label: 'हिन्दी', icon: '🇮🇳', dir: 'ltr' },
  { code: 'es', label: 'Español', icon: '🇪🇸', dir: 'ltr' },
  { code: 'fr', label: 'Français', icon: '🇫🇷', dir: 'ltr' },
  { code: 'ar', label: 'العربية', icon: '🇸🇦', dir: 'rtl' },
  { code: 'bn', label: 'বাংলা', icon: '🇧🇩', dir: 'ltr' },
  { code: 'pt', label: 'Português', icon: '🇵🇹', dir: 'ltr' },
  { code: 'ru', label: 'Русский', icon: '🇷🇺', dir: 'ltr' },
  { code: 'ur', label: 'اردو', icon: '🇵🇰', dir: 'rtl' },
  { code: 'id', label: 'Bahasa Indonesia', icon: '🇮🇩', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', icon: '🇩🇪', dir: 'ltr' },
  { code: 'ja', label: '日本語', icon: '🇯🇵', dir: 'ltr' },
  { code: 'sw', label: 'Kiswahili', icon: '🇰🇪', dir: 'ltr' },
  { code: 'mr', label: 'मराठी', icon: '🇮🇳', dir: 'ltr' },
  { code: 'te', label: 'తెలుగు', icon: '🇮🇳', dir: 'ltr' },
  { code: 'tr', label: 'Türkçe', icon: '🇹🇷', dir: 'ltr' },
  { code: 'ko', label: '한국어', icon: '🇰🇷', dir: 'ltr' },
  { code: 'ta', label: 'தமிழ்', icon: '🇮🇳', dir: 'ltr' },
  { code: 'vi', label: 'Tiếng Việt', icon: '🇻🇳', dir: 'ltr' },
  { code: 'it', label: 'Italiano', icon: '🇮🇹', dir: 'ltr' },
  { code: 'fa', label: 'فارسی', icon: '🇮🇷', dir: 'rtl' },
  { code: 'pl', label: 'Polski', icon: '🇵🇱', dir: 'ltr' },
  { code: 'uk', label: 'Українська', icon: '🇺🇦', dir: 'ltr' },
  { code: 'ms', label: 'Bahasa Melayu', icon: '🇲🇾', dir: 'ltr' },
  { code: 'th', label: 'ไทย', icon: '🇹🇭', dir: 'ltr' }
];

export const translations = {
  bio: {
    en: 'Mindset • Skillset • Toolset',
    zh: '心态 • 技能 • 工具',
    hi: 'मानसिकता • कौशल • उपकरण',
    es: 'Mentalidad • Habilidades • Herramientas',
    fr: 'Mentalité • Compétences • Outils',
    ar: 'العقلية • المهارات • الأدوات',
    bn: 'মানসিকতা • দক্ষতা • সরঞ্জাম',
    pt: 'Mentalidade • Habilidades • Ferramentas',
    ru: 'Мышление • Навыки • Инструменты',
    ur: 'ذہنیت • ہنر • اوزار',
    id: 'Pola Pikir • Keterampilan • Alat',
    de: 'Mentalität • Fähigkeiten • Werkzeuge',
    ja: 'マインドセット • スキルセット • ツールセット',
    sw: 'Mawazo • Stadi • Zana',
    mr: 'मानसिकता • कौशल्य • साधने',
    te: 'మనస్తత్వం • నైపుణ్యాలు • సాధనాలు',
    tr: 'Zihniyet • Beceriler • Araçlar',
    ko: '마인드셋 • 스킬셋 • 툴셋',
    ta: 'மனநிலை • திறன்கள் • கருவிகள்',
    vi: 'Tư duy • Kỹ năng • Công cụ',
    it: 'Mentalità • Competenze • Strumenti',
    fa: 'ذهنیت • مهارت‌ها • ابزارها',
    pl: 'Mentalność • Umiejętności • Narzędzia',
    uk: 'Мислення • Навички • Інструменти',
    ms: 'Mentaliti • Kemahiran • Alatan',
    th: 'แนวคิด • ทักษะ • เครื่องมือ'
  },
  languageLabel: {
    en: 'Select language (current: English)',
    zh: '选择语言（当前：中文）',
    hi: 'भाषा चुनें (वर्तमान: हिन्दी)',
    es: 'Seleccionar idioma (actual: Español)',
    fr: 'Sélectionner la langue (actuel : Français)',
    ar: 'اختر اللغة (الحالي: العربية)',
    bn: 'ভাষা নির্বাচন করুন (বর্তমান: বাংলা)',
    pt: 'Selecionar idioma (atual: Português)',
    ru: 'Выберите язык (текущий: Русский)',
    ur: 'زبان منتخب کریں (موجودہ: اردو)',
    id: 'Pilih bahasa (saat ini: Bahasa Indonesia)',
    de: 'Sprache auswählen (aktuell: Deutsch)',
    ja: '言語を選択 (現在の言語: 日本語)',
    sw: 'Chagua lugha (ya sasa: Kiswahili)',
    mr: 'भाषा निवडा (सध्याची: मराठी)',
    te: 'భాషను ఎంచుకోండి (ప్రస్తుతం: తెలుగు)',
    tr: 'Dil seçin (mevcut: Türkçe)',
    ko: '언어 선택 (현재: 한국어)',
    ta: 'மொழியைத் தேர்ந்தெடு (தற்போது: தமிழ்)',
    vi: 'Chọn ngôn ngữ (hiện tại: Tiếng Việt)',
    it: 'Seleziona lingua (attuale: Italiano)',
    fa: 'انتخاب زبان (فعلی: فارسی)',
    pl: 'Wybierz język (obecny: Polski)',
    uk: 'Оберіть мову (поточна: Українська)',
    ms: 'Pilih bahasa (semasa: Bahasa Melayu)',
    th: 'เลือกภาษา (ปัจจุบัน: ไทย)'
  }
};

export const languageLinks = {
  telegram: {
    url: {
      en: 'https://t.me/willnapolini',
      zh: 'https://t.me/zh_willonsuccess',
      hi: 'https://t.me/hi_willonsuccess',
      es: 'https://t.me/es_willonsuccess',
      fr: 'https://t.me/fr_willonsuccess',
      ar: 'https://t.me/ar_willonsuccess',
      bn: 'https://t.me/bn_willonsuccess',
      pt: 'https://t.me/pt_willonsuccess',
      ru: 'https://t.me/will_reads',
      ur: 'https://t.me/ur_willonsuccess',
      id: 'https://t.me/id_willonsuccess',
      de: 'https://t.me/de_willonsuccess',
      ja: 'https://t.me/ja_willonsuccess',
      sw: 'https://t.me/sw_willonsuccess',
      mr: 'https://t.me/mr_willonsuccess',
      te: 'https://t.me/te_willonsuccess',
      tr: 'https://t.me/tr_willonsuccess',
      ko: 'https://t.me/ko_willonsuccess',
      ta: 'https://t.me/ta_willonsuccess',
      vi: 'https://t.me/vi_willonsuccess',
      it: 'https://t.me/it_willonsuccess',
      fa: 'https://t.me/fa_willonsuccess',
      pl: 'https://t.me/pl_willonsuccess',
      uk: 'https://t.me/uk_willonsuccess',
      ms: 'https://t.me/ms_willonsuccess',
      th: 'https://t.me/th_willonsuccess'
    },
    label: {
      en: 'Join Telegram', zh: '加入Telegram', hi: 'टेलीग्राम में शामिल हों', es: 'Unirse a Telegram',
      fr: 'Rejoindre Telegram', ar: 'انضم إلى تيليجرام', bn: 'টেলিগ্রামে যোগ দিন', pt: 'Junte-se ao Telegram',
      ru: 'Присоединяйтесь к Telegram', ur: 'ٹیلیگرام میں شامل ہوں', id: 'Bergabung dengan Telegram',
      de: 'Telegram beitreten', ja: 'Telegramに参加', sw: 'Jiunge na Telegram', mr: 'टेलिग्राममध्ये सामील व्हा',
      te: 'టెలిగ్రామ్‌లో చేరండి', tr: 'Telegram’a katıl', ko: '텔레그램 가입', ta: 'டெலிகிராமில் சேரவும்',
      vi: 'Tham gia Telegram', it: 'Unisciti a Telegram', fa: 'به تلگرام بپیوندید', pl: 'Dołącz do Telegrama',
      uk: 'Приєднуйтесь до Telegram', ms: 'Sertai Telegram', th: 'เข้าร่วม Telegram'
    }
  },
  twitter: {
    url: {
      en: 'https://twitter.com/willonsuccess',
      zh: 'https://twitter.com/willonsuccess',
      hi: 'https://twitter.com/willonsuccess',
      es: 'https://twitter.com/willonsuccess',
      fr: 'https://twitter.com/willonsuccess',
      ar: 'https://twitter.com/willonsuccess',
      bn: 'https://twitter.com/willonsuccess',
      pt: 'https://twitter.com/willonsuccess',
      ru: 'https://twitter.com/willonsuccess',
      ur: 'https://twitter.com/willonsuccess',
      id: 'https://twitter.com/willonsuccess',
      de: 'https://twitter.com/willonsuccess',
      ja: 'https://twitter.com/willonsuccess',
      sw: 'https://twitter.com/willonsuccess',
      mr: 'https://twitter.com/willonsuccess',
      te: 'https://twitter.com/willonsuccess',
      tr: 'https://twitter.com/willonsuccess',
      ko: 'https://twitter.com/willonsuccess',
      ta: 'https://twitter.com/willonsuccess',
      vi: 'https://twitter.com/willonsuccess',
      it: 'https://twitter.com/willonsuccess',
      fa: 'https://twitter.com/willonsuccess',
      pl: 'https://twitter.com/willonsuccess',
      uk: 'https://twitter.com/willonsuccess',
      ms: 'https://twitter.com/willonsuccess',
      th: 'https://twitter.com/willonsuccess'
    },
    label: {
      en: 'Follow on Twitter', zh: '在Twitter上关注', hi: 'ट्विटर पर फॉलो करें', es: 'Seguir en Twitter',
      fr: 'Suivre sur Twitter', ar: 'تابع على تويتر', bn: 'টুইটারে অনুসরণ করুন', pt: 'Seguir no Twitter',
      ru: 'Подписаться в Twitter', ur: 'ٹوئٹر پر فالو کریں', id: 'Ikuti di Twitter', de: 'Auf Twitter folgen',
      ja: 'Twitterでフォロー', sw: 'Fuata kwenye Twitter', mr: 'ट्विटरवर फॉलो करा', te: 'ట్విట్టర్‌లో అనుసరించండి',
      tr: 'Twitter’da takip et', ko: '트위터에서 팔로우', ta: 'ட்விட்டரில் பின்தொடரவும்', vi: 'Theo dõi trên Twitter',
      it: 'Segui su Twitter', fa: 'در توییتر دنبال کنید', pl: 'Śledź na Twitterze', uk: 'Слідкуйте в Twitter',
      ms: 'Ikuti di Twitter', th: 'ติดตามใน Twitter'
    }
  },
  instagram: {
    url: {
      en: 'https://instagram.com/willonsuccess',
      zh: 'https://instagram.com/willonsuccess',
      hi: 'https://instagram.com/willonsuccess',
      es: 'https://instagram.com/willonsuccess',
      fr: 'https://instagram.com/willonsuccess',
      ar: 'https://instagram.com/willonsuccess',
      bn: 'https://instagram.com/willonsuccess',
      pt: 'https://instagram.com/willonsuccess',
      ru: 'https://instagram.com/willonsuccess',
      ur: 'https://instagram.com/willonsuccess',
      id: 'https://instagram.com/willonsuccess',
      de: 'https://instagram.com/willonsuccess',
      ja: 'https://instagram.com/willonsuccess',
      sw: 'https://instagram.com/willonsuccess',
      mr: 'https://instagram.com/willonsuccess',
      te: 'https://instagram.com/willonsuccess',
      tr: 'https://instagram.com/willonsuccess',
      ko: 'https://instagram.com/willonsuccess',
      ta: 'https://instagram.com/willonsuccess',
      vi: 'https://instagram.com/willonsuccess',
      it: 'https://instagram.com/willonsuccess',
      fa: 'https://instagram.com/willonsuccess',
      pl: 'https://instagram.com/willonsuccess',
      uk: 'https://instagram.com/willonsuccess',
      ms: 'https://instagram.com/willonsuccess',
      th: 'https://instagram.com/willonsuccess'
    },
    label: {
      en: 'Follow on Instagram', zh: '在Instagram上关注', hi: 'इंस्टाग्राम पर फॉलो करें', es: 'Seguir en Instagram',
      fr: 'Suivre sur Instagram', ar: 'تابع على إنستغرام', bn: 'ইনস্টাগ্রামে অনুসরণ করুন', pt: 'Seguir no Instagram',
      ru: 'Подписаться в Instagram', ur: 'انسٹاگرام پر فالو کریں', id: 'Ikuti di Instagram', de: 'Auf Instagram folgen',
      ja: 'Instagramでフォロー', sw: 'Fuata kwenye Instagram', mr: 'इंस्टाग्रामवर फॉलो करा', te: 'ఇన్‌స్టాగ్రామ్‌లో అనుసరించండి',
      tr: 'Instagram’da takip et', ko: '인스타그램에서 팔로우', ta: 'இன்ஸ்டாகிராமில் பின்தொடரவும்', vi: 'Theo dõi trên Instagram',
      it: 'Segui su Instagram', fa: 'در اینستاگرام دنبال کنید', pl: 'Śledź na Instagramie', uk: 'Слідкуйте в Instagram',
      ms: 'Ikuti di Instagram', th: 'ติดตามใน Instagram'
    }
  },
  spotify: {
    url: {
      en: 'https://open.spotify.com/user/willonsuccess',
      zh: 'https://open.spotify.com/user/willonsuccess',
      hi: 'https://open.spotify.com/user/willonsuccess',
      es: 'https://open.spotify.com/user/willonsuccess',
      fr: 'https://open.spotify.com/user/willonsuccess',
      ar: 'https://open.spotify.com/user/willonsuccess',
      bn: 'https://open.spotify.com/user/willonsuccess',
      pt: 'https://open.spotify.com/user/willonsuccess',
      ru: 'https://open.spotify.com/user/willonsuccess',
      ur: 'https://open.spotify.com/user/willonsuccess',
      id: 'https://open.spotify.com/user/willonsuccess',
      de: 'https://open.spotify.com/user/willonsuccess',
      ja: 'https://open.spotify.com/user/willonsuccess',
      sw: 'https://open.spotify.com/user/willonsuccess',
      mr: 'https://open.spotify.com/user/willonsuccess',
      te: 'https://open.spotify.com/user/willonsuccess',
      tr: 'https://open.spotify.com/user/willonsuccess',
      ko: 'https://open.spotify.com/user/willonsuccess',
      ta: 'https://open.spotify.com/user/willonsuccess',
      vi: 'https://open.spotify.com/user/willonsuccess',
      it: 'https://open.spotify.com/user/willonsuccess',
      fa: 'https://open.spotify.com/user/willonsuccess',
      pl: 'https://open.spotify.com/user/willonsuccess',
      uk: 'https://open.spotify.com/user/willonsuccess',
      ms: 'https://open.spotify.com/user/willonsuccess',
      th: 'https://open.spotify.com/user/willonsuccess'
    },
    label: {
      en: 'Listen on Spotify', zh: '在Spotify上聆听', hi: 'स्पॉटिफाई पर सुनें', es: 'Escuchar en Spotify',
      fr: 'Écouter sur Spotify', ar: 'استمع على سبوتيفاي', bn: 'স্পটিফাইতে শুনুন', pt: 'Ouvir no Spotify',
      ru: 'Слушайте на Spotify', ur: 'اسپاٹيفائي پر سنیں', id: 'Dengarkan di Spotify', de: 'Auf Spotify hören',
      ja: 'Spotifyで聴く', sw: 'Sikiliza kwenye Spotify', mr: 'स्पॉटिफायवर ऐका', te: 'స్పాటిఫైలో వినండి',
      tr: 'Spotify’da dinle', ko: '스포티파이에서 듣기', ta: 'ஸ்பாட்டிஃபையில் கேளுங்கள்', vi: 'Nghe trên Spotify',
      it: 'Ascolta su Spotify', fa: 'در اسپاتیفای گوش کنید', pl: 'Słuchaj na Spotify', uk: 'Слухайте на Spotify',
      ms: 'Dengar di Spotify', th: 'ฟังใน Spotify'
    }
  }
};

export const defaultLanguage = 'en';