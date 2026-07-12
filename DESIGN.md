---
name: Technical Precision - Solar
colors:
  surface: '#12131a'
  surface-dim: '#12131a'
  surface-bright: '#383940'
  surface-container-lowest: '#0c0e14'
  surface-container-low: '#1a1b22'
  surface-container: '#1e1f26'
  surface-container-high: '#282a31'
  surface-container-highest: '#33343c'
  on-surface: '#e2e1eb'
  on-surface-variant: '#e4beb1'
  inverse-surface: '#e2e1eb'
  inverse-on-surface: '#2f3037'
  outline: '#ab897d'
  outline-variant: '#5b4137'
  surface-tint: '#ffb59a'
  primary: '#ffb59a'
  on-primary: '#5a1b00'
  primary-container: '#ff5c00'
  on-primary-container: '#521800'
  inverse-primary: '#a73a00'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#a0c9ff'
  on-tertiary: '#00325a'
  tertiary-container: '#0096fd'
  on-tertiary-container: '#002d51'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  success: '#8fdba6'
  on-success: '#00391a'
  success-container: '#0b5327'
  on-success-container: '#abf2c2'
  warning: '#ffc073'
  on-warning: '#452b00'
  warning-container: '#5c3e00'
  on-warning-container: '#ffddb3'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb59a'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#802a00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#a0c9ff'
  on-tertiary-fixed: '#001c37'
  on-tertiary-fixed-variant: '#00497f'
  background: '#12131a'
  on-background: '#e2e1eb'
  surface-variant: '#33343c'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The brand personality is high-octane technical efficiency. It targets developers and system architects who require high-performance tools that feel both rigorous and energetic. This design system utilizes a **Corporate / Modern** base infused with **High-Contrast** accents to evoke a sense of "active intelligence."

The aesthetic is characterized by a "dark-mode first" philosophy, utilizing sharp borders, precise alignment, and a vibrant primary accent that cuts through a monochromatic base. It avoids unnecessary decoration, focusing instead on structural integrity and information density.

## Colors
The palette is anchored by **Solar Orange (Primary-Container, #FF5C00)**, a high-energy, modern hue that provides immediate visual hierarchy against the deep obsidian backgrounds.

Every color in the token list follows Material Design 3's semantic-role pattern, and that pattern is what keeps a "warm, technical, dark" brief from collapsing into a generic near-black-plus-accent template: a base role for text/icons on dark surfaces, an `on-*` role for text placed on top of a filled instance of that color, and `*-container` / `on-*-container` pairs for lower-emphasis tonal surfaces. Every role below is named to match the token file, so implementation never has to guess which hex a description is pointing at.

- **Primary:** Primary-Container Solar Orange (`#FF5C00`) is used for critical actions, active states, and focus indicators. The lighter Primary tone (`#FFB59A`) is reserved for text, icons, and ghost-button strokes on dark surfaces, where a fully saturated orange would be too loud to read as text.
- **Surface:** A seven-step tonal system from `surface-container-lowest` (`#0C0E14`) up to `surface-bright` (`#383940`) provides depth without breaking the dark-room immersion or resorting to flat black/white steps.
- **Borders:** Structure is defined by a warm-tinted outline pulled from the same family as the primary hue, rather than a generic neutral gray — Outline (`#AB897D`) for default borders and Outline Variant (`#5B4137`) for low-emphasis dividers and input borders. Tinting the neutrals instead of flattening them to a stock gray keeps every edge in the UI quietly related to Solar Orange, so borders read as *designed for this product*, not pulled from a default component library.
- **Feedback:** Success (`#8FDBA6` / container `#0B5327`), Warning (`#FFC073` / container `#5C3E00`), and Error (`#FFB4AB` / container `#93000A`) follow the same role / on-role / role-container / on-role-container pattern as the rest of the palette, and are used sparingly so they never compete with the primary orange for attention.

## Typography
This design system utilizes **Inter** for all UI elements to ensure maximum legibility and a neutral, systematic feel.

- **Headlines:** Use tighter letter spacing and semi-bold weights to create a compact, "instrument-panel" look.
- **Labels:** Use uppercase for small labels and metadata to differentiate from body text.
- **Code:** While Inter is the primary face, JetBrains Mono is utilized for technical strings, IDs, and code snippets to reinforce the developer-centric nature of the tool.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 4px baseline rhythm.

- **Grid:** A 12-column system is used for desktop, 8-column for tablet, and 4-column for mobile.
- **Density:** The spacing is tight (Compact) to accommodate data-heavy views.
- **Containers:** Content should be grouped in bordered modules rather than relying on whitespace alone for separation. This reinforces the "Technical Precision" aesthetic.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than shadows — each step up in elevation moves to a lighter surface tone from the same tonal ramp defined in the token list.

- **Level 0 — Background / Surface-Container-Lowest** (`#12131A` / `#0C0E14`): the base canvas, and any deliberately recessed regions such as a sunken search bar or a code preview pane.
- **Level 1 — Surface-Container-Low / Surface-Container** (`#1A1B22` / `#1E1F26`): primary cards, the sidebar, and the snippet list.
- **Level 2 — Surface-Container-High / Surface-Container-Highest** (`#282A31` / `#33343C`): modals, dropdowns, tooltips, and anything that needs to visibly float above Level 1.
- **Shadows:** Shadows are rarely used. When necessary, they are sharp and black with 0% blur, creating a "stacked sheet" look rather than a floating effect.
- **Focus:** Active elements receive a 2px Primary-Container (`#FF5C00`) outline, offset by 2px so it never collides with the element's own border.

## Shapes
Following the **ROUND_FOUR** logic, the shape language is disciplined and professional.

- **Standard Elements:** 4px (0.25rem) corner radius for buttons, inputs, and small cards.
- **Large Containers:** 8px (0.5rem) for main dashboard panels or modal windows.
- **Iconography:** Use 2px stroke widths with slight rounding to match the typography's geometric curves.

## Components
- **Buttons:** Primary buttons use a solid Primary-Container fill (`#FF5C00`) with On-Primary-Container text (`#521800`) — a near-black brown rather than pure black, so high-contrast text stays inside the warm palette instead of introducing a cold neutral. Ghost buttons use Primary (`#FFB59A`) for border and text against the transparent/surface background.
- **Inputs:** Surface-Container-Low backgrounds (`#1A1B22`) with a 1px Outline-Variant border (`#5B4137`). On focus, the border transitions to a 2px Primary-Container Solar Orange (`#FF5C00`).
- **Chips:** Small, rectangular tags with 4px radius. Inactive chips use Surface-Container (`#1E1F26`) with On-Surface-Variant text (`#E4BEB1`); active/selected chips use Primary-Container at 10% opacity for background with solid Primary (`#FFB59A`) text.
- **Cards:** Defined by their borders, not shadows. Backgrounds sit one tonal step above the canvas (Surface-Container-Low, `#1A1B22`, against a `#12131A` background) to create a subtle hierarchy.
- **Lists:** Use Surface-Container (`#1E1F26`) as the hover state and a 2px Primary-Container (`#FF5C00`) vertical "intent" bar on the left edge for the selected item.
- **Scrollbars:** Custom-styled to be thin and dark, ensuring they don't distract from the content.
