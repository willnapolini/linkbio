import { trackClick, logError } from './utils.js';

/**
 * SocialFooter Component
 * Purpose: Renders and updates social media links in the .social-footer navigation.
 * Usage: Called by main.js to initialize and by LanguageSwitcher to update URLs/labels.
 */
export const SocialFooter = {
  render: (socials, languageLinks, container, lang) => {
    try {
      if (!container) throw new Error('SocialFooter container (.social-footer) not found');
      if (!socials || !languageLinks || !lang) throw new Error('Invalid SocialFooter parameters');

      container.innerHTML = socials.map((social, index) => {
        const linkData = languageLinks[social.name] || {};
        const url = linkData.url?.[lang] || linkData.url?.en || '#';
        const ariaLabel = linkData.label?.[lang] || linkData.label?.en || social.name;
        return `
          <a href="${url}" class="social-footer__item" aria-label="${ariaLabel}" data-index="${index}">
            ${social.icon}
          </a>
        `;
      }).join('');
    } catch (error) {
      logError('SocialFooter render error:', error);
    }
  },

  updateLinks: (socials, languageLinks, container, lang) => {
    try {
      if (!container) throw new Error('SocialFooter container (.social-footer) not found');
      const socialItems = container.querySelectorAll('.social-footer__item');
      socialItems.forEach((item, index) => {
        const social = socials[index];
        if (!social) return;
        const linkData = languageLinks[social.name] || {};
        const url = linkData.url?.[lang] || linkData.url?.en || '#';
        const ariaLabel = linkData.label?.[lang] || linkData.label?.en || social.name;
        item.href = url;
        item.setAttribute('aria-label', ariaLabel);
      });
    } catch (error) {
      logError('SocialFooter updateLinks error:', error);
    }
  }
};

/**
 * LinkButton Component
 * Purpose: Renders and updates main link buttons in the .link-grid section.
 * Usage: Called by main.js to initialize and by LanguageSwitcher to update link text/URLs.
 */
export const LinkButton = {
  render: (links, container, lang) => {
    try {
      if (!container) throw new Error('LinkButton container (.link-grid) not found');
      container.innerHTML = links.map((link, index) => {
        const url = typeof link.url === 'string' ? link.url : link.url[lang] || link.url.en || '#';
        const title = link.title[lang] || link.title.en || 'Link';
        const subtitle = link.subtitle[lang] || link.subtitle.en || '';
        const size = link.size || 'small'; // Default to small if size is not specified
        return `
          <a href="${url}" class="link-button ${link.pulse ? 'link-button--pulse' : ''} link-button--${size}" data-index="${index}" role="link" aria-label="${title} - ${subtitle}">
            <div class="link-button__icon">${link.icon}</div>
            <div class="link-button__title">${title}</div>
            <div class="link-button__subtitle">${subtitle}</div>
          </a>
        `;
      }).join('');
    } catch (error) {
      logError('LinkButton render error:', error);
    }
  },

  updateLinks: (links, container, lang) => {
    try {
      if (!container) throw new Error('LinkButton container (.link-grid) not found');
      const linkButtons = container.querySelectorAll('.link-button');
      linkButtons.forEach((button, index) => {
        const link = links[index];
        if (!link) return;
        const url = typeof link.url === 'string' ? link.url : link.url[lang] || link.url.en || '#';
        const title = link.title[lang] || link.title.en || 'Link';
        const subtitle = link.subtitle[lang] || link.subtitle.en || '';
        button.href = url;
        button.setAttribute('aria-label', `${title} - ${subtitle}`);
        button.querySelector('.link-button__title').textContent = title;
        button.querySelector('.link-button__subtitle').textContent = subtitle;
      });
    } catch (error) {
      logError('LinkButton updateLinks error:', error);
    }
  }
};

/**
 * SiteFooter Component
 * Purpose: Renders and updates the GitHub footer link in .site-footer__github.
 * Usage: Called by main.js to initialize and by LanguageSwitcher to update labels.
 */
export const SiteFooter = {
  render: (footer, container, lang) => {
    try {
      if (!container) throw new Error('SiteFooter container (.site-footer__github) not found');
      const url = footer.github.url || '#';
      const label = footer.github.label[lang] || footer.github.label.en || 'GitHub Profile';
      container.innerHTML = `
        <a href="${url}" class="site-footer__github" aria-label="${label}" role="link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      `;
    } catch (error) {
      logError('SiteFooter render error:', error);
    }
  },

  updateLink: (footer, container, lang) => {
    try {
      if (!container) throw new Error('SiteFooter container (.site-footer__github) not found');
      const link = container.querySelector('a');
      if (!link) return;
      const label = footer.github.label[lang] || footer.github.label.en || 'GitHub Profile';
      link.setAttribute('aria-label', label);
    } catch (error) {
      logError('SiteFooter updateLink error:', error);
    }
  }
};

/**
 * ThemeSwitcher Component
 * Purpose: Manages theme selection dropdown and applies themes.
 * Usage: Called by main.js to initialize theme switching.
 */
export const ThemeSwitcher = {
  init: (select, config) => {
    try {
      if (!select) throw new Error('ThemeSwitcher select (.theme-switcher) not found');
      select.innerHTML = config.themes.map(theme => `
        <option value="${theme.id}" ${theme.id === config.settings.defaultTheme ? 'selected' : ''}>
          ${theme.label}
        </option>
      `).join('');

      const applyTheme = (themeId) => {
        document.body.className = `theme--${themeId}`;
        select.setAttribute('aria-label', `Select theme (current: ${themeId})`);
        localStorage.setItem('theme', themeId);
        trackClick('theme-switch', themeId);
      };

      select.addEventListener('change', (e) => {
        applyTheme(e.target.value);
      });

      const savedTheme = localStorage.getItem('theme') || config.settings.defaultTheme;
      select.value = savedTheme;
      applyTheme(savedTheme);
    } catch (error) {
      logError('ThemeSwitcher init error:', error);
    }
  }
};

/**
 * LanguageSwitcher Component
 * Purpose: Manages language selection dropdown and updates UI (bio, links, socials, footer) based on language.
 * Usage: Called by main.js to initialize and update UI on language change.
 */
export const LanguageSwitcher = {
  init: (select, config, linkContainer, socialContainer, footerContainer) => {
    try {
      if (!select || !linkContainer || !socialContainer || !footerContainer) {
        throw new Error('LanguageSwitcher missing required DOM elements');
      }

      select.innerHTML = config.languages.map(lang => `
        <option value="${lang.code}" ${lang.code === config.settings.defaultLanguage ? 'selected' : ''}>
          ${lang.icon} ${lang.label}
        </option>
      `).join('');

      const updateUI = (lang) => {
        // Update bio
        const bio = document.querySelector('.profile-header__bio');
        if (bio) {
          bio.textContent = config.translations.bio[lang] || config.translations.bio.en || 'Mindset • Skillset • Toolset';
        }

        // Update language switcher ARIA label
        select.setAttribute('aria-label', config.translations.languageLabel[lang] || config.translations.languageLabel.en);

        // Update document language and direction
        document.documentElement.lang = lang;
        document.documentElement.dir = config.languages.find(l => l.code === lang)?.dir || 'ltr';

        // Update all links
        LinkButton.updateLinks(config.links, linkContainer, lang);
        SocialFooter.updateLinks(config.socials, config.languageLinks, socialContainer, lang);
        SiteFooter.updateLink(config.footer, footerContainer, lang);

        trackClick('language-switch', lang);
      };

      select.addEventListener('change', (e) => {
        const lang = e.target.value;
        localStorage.setItem('language', lang);
        updateUI(lang);
      });

      const savedLang = localStorage.getItem('language') || config.settings.defaultLanguage;
      select.value = savedLang;
      updateUI(savedLang);
    } catch (error) {
      logError('LanguageSwitcher init error:', error);
    }
  }
};

/**
 * Analytics Component
 * Purpose: Tracks user interactions for analytics.
 * Usage: Called by main.js to initialize click tracking.
 */
export const Analytics = {
  init: (container, links) => {
    try {
      if (!container) throw new Error('Analytics container (.container) not found');
      container.addEventListener('click', (e) => {
        const target = e.target.closest('.social-footer__item, .link-button, .site-footer__github');
        if (target) {
          const index = target.dataset.index || 'github';
          const type = target.classList.contains('social-footer__item') ? 'social' :
                       target.classList.contains('link-button') ? 'link' : 'github';
          const metadata = type === 'link' ? { size: links[index]?.size || 'small' } : {};
          trackClick(type, index, metadata);
        }
      });
    } catch (error) {
      logError('Analytics init error:', error);
    }
  }
};