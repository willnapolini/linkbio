/**
 * main.js
 * Purpose: Initializes the Linktree-style website by rendering components, setting up event listeners, and applying utility functions.
 * Dependencies: Imports config from data.js, component classes from components.js, and utility functions from utils.js.
 * Usage: Runs on DOMContentLoaded to ensure the DOM is fully loaded before initialization.
 * Performance Notes: Uses deferred script loading (loaded at the end of index.html) and try-catch for robust error handling.
 * Error Handling: Catches and logs initialization errors using logError from utils.js to prevent application crashes.
 * Last Modified: June 6, 2025 - Fixed Analytics.init call, adjusted footerContainer for consistency.
 */

/**
 * Imports
 * Purpose: Imports configuration data and component/utility functions for initialization.
 * Dependencies: data.js, components.js, utils.js.
 */
import { config } from './data.js';
import { SocialFooter, LinkButton, ThemeSwitcher, LanguageSwitcher, Analytics, SiteFooter } from './components.js';
import { initParallax, initIntersectionObserver, initRippleEffect, initVhUnit, logError } from './utils.js';

/**
 * Initialization
 * Purpose: Sets up the application when the DOM is fully loaded.
 * Event Listener: DOMContentLoaded ensures DOM is ready before execution.
 * Error Handling: Wraps initialization in try-catch to log errors without crashing.
 */
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Social Footer Rendering
    const socialContainer = document.querySelector('.social-footer');
    if (!socialContainer) throw new Error('Social footer container (.social-footer) not found');
    SocialFooter.render(config.socials, config.languageLinks, socialContainer, config.settings.defaultLanguage);

    // Link Buttons Rendering
    const linkContainer = document.querySelector('.link-grid');
    if (!linkContainer) throw new Error('Link grid container (.link-grid) not found');
    LinkButton.render(config.links, linkContainer, config.settings.defaultLanguage);

    // Site Footer Rendering
    const footerParent = document.querySelector('.site-footer');
    if (!footerParent) throw new Error('Site footer parent (.site-footer) not found');
    const footerContainer = footerParent.querySelector('.site-footer__github');
    if (!footerContainer) throw new Error('Site footer container (.site-footer__github) not found');
    SiteFooter.render(config.footer, footerContainer, config.settings.defaultLanguage);

    // Theme Switcher Initialization
    const themeSelect = document.querySelector('.theme-switcher');
    if (!themeSelect) throw new Error('Theme switcher select (.theme-switcher) not found');
    ThemeSwitcher.init(themeSelect, config);

    // Language Switcher Initialization
    const languageSelect = document.querySelector('.language-switcher');
    if (!languageSelect) throw new Error('Language switcher select (.language-switcher) not found');
    LanguageSwitcher.init(languageSelect, config, linkContainer, socialContainer, footerParent);

    // Analytics Initialization
    const container = document.querySelector('.container');
    if (!container) throw new Error('Analytics container (.container) not found');
    Analytics.init(container, config.links);

    // Utility Initializations
    initParallax();
    initIntersectionObserver();
    initRippleEffect();
    initVhUnit();
  } catch (error) {
    logError('Initialization error:', error);
  }
});