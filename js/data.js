/**
 * data.js
 * Purpose: Centralizes configuration data for the Linktree-style website, including profile, themes, languages, translations, links, socials, footer, and settings.
 * Dependencies: Imports themes from themes.js; languages, translations, defaultLanguage, languageLinks from languages.js; links, socials, footer from links.js.
 * Usage: Imported by main.js to provide configuration to components and utilities.
 * Performance Notes: Single export minimizes import overhead; static data avoids runtime computation.
 * Error Handling: Validates imported data; logs errors using logError from utils.js.
 * Last Modified: June 6, 2025 - Updated to include languageLinks, validate imports, and incorporate user profile data.
 */
import { themes } from './themes.js';
import { languages, translations, defaultLanguage, languageLinks } from './languages.js';
import { links, socials, footer } from './links.js';
import { logError } from './utils.js';

/**
 * config
 * Purpose: Combines all configuration data into a single export.
 * Structure: Object containing profile, themes, languages, translations, languageLinks, links, socials, footer, settings.
 * Validation: Throws errors if required data is missing or invalid; logs errors via logError.
 */
const config = (() => {
  try {
    if (!themes || !Array.isArray(themes)) {
      throw new Error('Invalid or missing themes configuration');
    }
    if (!languages || !Array.isArray(languages)) {
      throw new Error('Invalid or missing languages configuration');
    }
    if (!translations || typeof translations !== 'object') {
      throw new Error('Invalid or missing translations configuration');
    }
    if (!languageLinks || typeof languageLinks !== 'object') {
      throw new Error('Invalid or missing languageLinks configuration');
    }
    if (!links || !Array.isArray(links)) {
      throw new Error('Invalid or missing links configuration');
    }
    if (!socials || !Array.isArray(socials)) {
      throw new Error('Invalid or missing socials configuration');
    }
    if (!footer || !footer.github) {
      throw new Error('Invalid or missing footer configuration');
    }
    if (!defaultLanguage || typeof defaultLanguage !== 'string') {
      throw new Error('Invalid or missing defaultLanguage configuration');
    }

    return {
      profile: {
        name: 'Will Napolini',
        image: 'https://avatars.githubusercontent.com/u/192521042?s=400&u=61065e42741486686fae5490a1df64ef4c58f0f2&v=4',
        imageAlt: 'Profile photo of Will Napolini'
      },
      themes,
      languages,
      translations,
      languageLinks,
      links,
      socials,
      footer,
      settings: {
        defaultTheme: 'default',
        defaultLanguage
      }
    };
  } catch (error) {
    logError('Configuration error:', error);
    throw error;
  }
})();

export { config };