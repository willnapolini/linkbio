/**
 * utils.js
 * Purpose: Provides helper functions for animations, visibility detection, and utilities to enhance the Linktree-style website's interactivity and compatibility.
 * Dependencies: None; interacts with DOM elements defined in index.html.
 * Usage: Imported by main.js to initialize animations and utilities on page load.
 * Performance Notes: Optimized with requestAnimationFrame, event delegation, and debouncing for efficient DOM updates.
 * Error Handling: Handles missing elements and user preferences (e.g., prefers-reduced-motion) gracefully; logs errors via logError.
 * Last Modified: June 6, 2025 - Added logError, updated initRippleEffect for .site-footer__github, enhanced error handling.
 */

/**
 * logError
 * Purpose: Logs errors with context to the console for debugging; placeholder for integration with error tracking services.
 * Parameters:
 *   - message (String): Descriptive error message.
 *   - error (Error): Error object with stack trace.
 * Returns: None; logs to console or sends to error tracking service.
 * Usage Example:
 *   ```javascript
 *   logError('Component initialization failed:', new Error('Missing element'));
 *   ```
 * Error Handling: None; assumes valid inputs.
 * Performance Notes: Lightweight console log; extend for error tracking integration.
 */
export const logError = (message, error) => {
  console.error(`${message}`, error);
  // Extend this function to integrate with error tracking services (e.g., Sentry)
};

/**
 * initParallax
 * Purpose: Applies a parallax effect to .floating-orb elements based on mouse movement, disabled for non-hover devices or reduced-motion preferences.
 * Parameters: None
 * Returns: None; modifies DOM element styles.
 * Dependencies: DOM elements (.floating-orb) from index.html.
 * Error Handling: Skips initialization if orbs are missing or preferences are unsupported; logs errors.
 * Performance Notes: Uses requestAnimationFrame and ticking to prevent excessive updates.
 */
export const initParallax = () => {
  try {
    const orbs = document.querySelectorAll('.floating-orb');
    if (!orbs.length) {
      logError('initParallax: No .floating-orb elements found', new Error('Missing elements'));
      return;
    }

    let ticking = false;
    const updateParallax = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth - 0.5) * 2;
          const y = (e.clientY / window.innerHeight - 0.5) * 2;

          orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.3;
            const xPos = x * speed * 30;
            const yPos = y * speed * 30;
            orb.style.transform = `translate(${xPos}px, ${yPos}px)`;
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    if (window.matchMedia('(hover: hover)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.addEventListener('mousemove', updateParallax);
    }
  } catch (error) {
    logError('initParallax error:', error);
  }
};

/**
 * initIntersectionObserver
 * Purpose: Activates animations for .link-button and .social-footer__item elements when they enter the viewport.
 * Parameters: None
 * Returns: None; observes DOM elements.
 * Dependencies: IntersectionObserver API, DOM elements (.link-button, .social-footer__item).
 * Error Handling: Skips initialization if elements are missing; logs errors.
 * Performance Notes: Uses native IntersectionObserver for efficient visibility detection.
 */
export const initIntersectionObserver = () => {
  try {
    const elements = document.querySelectorAll('.link-button, .social-footer__item');
    if (!elements.length) {
      logError('initIntersectionObserver: No .link-button or .social-footer__item elements found', new Error('Missing elements'));
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    elements.forEach(el => observer.observe(el));
  } catch (error) {
    logError('initIntersectionObserver error:', error);
  }
};

/**
 * initRippleEffect
 * Purpose: Adds a ripple animation on click for interactive elements (.link-button, .social-footer__item, .site-footer__github, .theme-toggle).
 * Parameters: None
 * Returns: None; adds styles and DOM elements.
 * Dependencies: DOM elements from index.html.
 * Error Handling: Checks for existing #ripple-styles; skips invalid targets; logs errors.
 * Performance Notes: Uses CSS animations and setTimeout for cleanup.
 */
export const initRippleEffect = () => {
  try {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
      @keyframes ripple {
        to { transform: scale(2); opacity: 0; }
      }
    `;
    if (!document.querySelector('#ripple-styles')) {
      document.head.appendChild(style);
    }

    document.addEventListener('click', (e) => {
      const target = e.target.closest('.link-button, .social-footer__item, .site-footer__github, .theme-toggle');
      if (target) {
        const rect = target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('div');
        ripple.style.cssText = `
          position: absolute;
          left: ${x}px;
          top: ${y}px;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
          z-index: 1000;
        `;

        target.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      }
    });
  } catch (error) {
    logError('initRippleEffect error:', error);
  }
};

/**
 * initVhUnit
 * Purpose: Sets a custom --vh CSS variable for consistent viewport height across devices, especially mobile.
 * Parameters: None
 * Returns: None; updates CSS custom property.
 * Dependencies: None.
 * Error Handling: Logs errors if window.innerHeight is unavailable.
 * Performance Notes: Debounces resize events to prevent excessive updates.
 */
export const initVhUnit = () => {
  try {
    const setVh = () => {
      if (typeof window.innerHeight !== 'number') {
        throw new Error('window.innerHeight is unavailable');
      }
      document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
    };

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setVh, 100);
    });

    setVh();
  } catch (error) {
    logError('initVhUnit error:', error);
  }
};

/**
 * trackClick
 * Purpose: Logs click events for analytics; placeholder for integration with analytics services.
 * Parameters:
 *   - type (String): Type of element clicked (e.g., 'social', 'link', 'github').
 *   - value (String): Identifier for the clicked element (e.g., index or 'github').
 * Returns: None; logs to console or sends to analytics service.
 * Error Handling: Logs errors if inputs are invalid.
 * Performance Notes: Lightweight console log; extend for analytics service integration.
 */
export const trackClick = (type, value) => {
  try {
    if (!type || !value) {
      throw new Error('Invalid trackClick parameters');
    }
    console.log(`Analytics: Clicked ${type} - ${value}`);
    // Extend this function to integrate with analytics services (e.g., Google Analytics)
  } catch (error) {
    logError('trackClick error:', error);
  }
};