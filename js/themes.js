/**
 * themes.js
 * 
 * Purpose: Defines theme configurations for the Linktree-style website, providing theme IDs and labels for the ThemeSwitcher component to enable theme selection.
 * Dependencies: None; standalone module exported to data.js.
 * Usage: Imported by data.js to populate config.themes, used by ThemeSwitcher in components.js to render theme dropdowns and apply theme--${id] classes to the linktree element.
 * Performance Notes: Static configuration with minimal runtime overhead; theme lookup is O(1) using object keys.
 * Error Handling: Assumes valid IDs and labels; invalid IDs may cause ThemeSwitcher to fail silently or fall back to :root styles in themes.css.
 * Themes: default, sunset, midnight, dark, green, neon, pink, desert, forest, ocean, coral, galaxy, arctic, pastel, cyberpunk.
 * Notes: 
 *   - The 'default' and 'aurora' themes are not defined in themes.css, potentially causing styling issues.
 *   - The 'dark' and 'light' themes from themes.css` are missing, which may break functionality if referenced.
 *   - Recommend aligning themes with themes.css (e.g., include dark, light; remove default, aurora).
 * Last Modified: June 4, 2025 - Documentation created.
 */

/**
 * themes
 * Purpose: Array of theme objects, each containing an ID and label for use in the theme switcher.
 * Structure: Array of objects with id (String) and label (String).
 * Usage: Populates config.themes in data.js, used by ThemeSwitcher to generate dropdown options and apply theme--${id} classes.
 * Example Usage:
 *   ```javascript
 *   // In components.js
 *   select.innerHTML = themes.map(theme => `<option value="${theme.id}">${theme.label}</option>`).join('');
 *   document.document.querySelector('link-button').classList.add(`theme--${theme.id}`);
 *   ```
 * Validation: Each theme must have a unique id and label; id must match a class in themes.css (e.g., .theme--sunset).
 */

export const themes = [
  { id: 'default', label: 'Default', description: 'Classic gradient theme' },
  { id: 'aurora', label: 'Aurora Borealis', description: 'Ethereal northern lights with green, cyan, and purple' },
  { id: 'blazing', label: 'Blazing Sunset', description: 'Fiery sunset with warm oranges and golden yellow' },
  { id: 'cosmic', label: 'Cosmic Nebula', description: 'Deep space with mysterious purples and cosmic pinks' },
  { id: 'deep-ocean', label: 'Deep Ocean', description: 'Ocean depths from dark navy to bright azure' },
  { id: 'emerald', label: 'Emerald Forest', description: 'Lush forest greens from deep pine to spring leaves' },
  { id: 'frozen', label: 'Frozen Tundra', description: 'Icy blue tones of glacial landscapes and winter frost' },
  { id: 'golden', label: 'Golden Hour', description: 'Warm golden light transitioning to soft pink magic hour' },
  { id: 'heavenly', label: 'Heavenly Clouds', description: 'Soft, dreamy clouds with gentle cream and peach tones' },
  { id: 'icy', label: 'Icy Mountain', description: 'Cool mountain peaks with crystalline blues and whites' },
  { id: 'jungle', label: 'Jungle Canopy', description: 'Dense tropical foliage with rich teals and vibrant greens' },
  { id: 'kaleidoscope', label: 'Kaleidoscope Dream', description: 'Vibrant multicolor spectrum creating psychedelic rainbow' },
  { id: 'lavender', label: 'Lavender Fields', description: 'Soft purple hues of endless lavender meadows in bloom' },
  { id: 'midnight-sky', label: 'Midnight Sky', description: 'Deep night colors from pure black to dark navy' },
  { id: 'northern', label: 'Northern Lights', description: 'Electric blue aurora with cool, mystical atmospheric tones' },
  { id: 'ocean-waves', label: 'Ocean Waves', description: 'Dynamic blue waves from flowing aqua to deep sea blue' },
  { id: 'peacock', label: 'Peacock Feather', description: 'Iridescent teal and turquoise inspired by peacock plumage' },
  { id: 'quartz', label: 'Quartz Crystal', description: 'Pure, crystalline whites and soft grays like polished quartz' },
  { id: 'ruby', label: 'Ruby Flame', description: 'Intense reds transitioning to deep magenta like burning gems' },
  { id: 'summer', label: 'Summer Breeze', description: 'Light, airy blues with hints of lavender for fresh summer feel' },
  { id: 'tropical', label: 'Tropical Paradise', description: 'Warm coral and soft pink tones of tropical sunsets' },
  { id: 'urban', label: 'Urban Neon', description: 'Electric neon colors inspired by cyberpunk cityscapes' },
  { id: 'velvet', label: 'Velvet Rose', description: 'Rich burgundy and deep red tones like luxurious velvet petals' },
  { id: 'winter', label: 'Winter Morning', description: 'Crisp morning colors with soft mint green and cool blue' },
  { id: 'xray', label: 'X-Ray Vision', description: 'Mysterious grays and dark tones with futuristic, technical feel' },
  { id: 'yellow', label: 'Yellow Sunrise', description: 'Bright morning sunshine with golden yellows and warm amber' },
  { id: 'zen', label: 'Zen Garden', description: 'Peaceful stone grays creating serene, meditative atmosphere' }
];
