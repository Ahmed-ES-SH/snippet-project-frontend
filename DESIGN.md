---
name: Technical Precision - Solar
description: A dark-first developer tool design system with Solar Orange accents and instrument-panel density
colors:
  solar-orange: "#ff5c00"
  primary: "#ffdbce"
  primary-container: "#ffb59a"
  primary-fixed: "#ffdbcf"
  primary-fixed-dim: "#ffb59a"
  secondary: "#c8c6c5"
  secondary-container: "#474746"
  tertiary: "#d2e4ff"
  tertiary-container: "#a0c9ff"
  background: "#181210"
  foreground: "#ece0dc"
  surface: "#181210"
  surface-dim: "#181210"
  surface-bright: "#3f3835"
  surface-lowest: "#0c0e14"
  surface-container-lowest: "#120d0b"
  surface-container-low: "#201a18"
  surface-container: "#1e1f26"
  surface-container-high: "#2f2926"
  surface-container-highest: "#3a3331"
  surface-low: "#1a1b22"
  surface-high: "#282a31"
  surface-highest: "#33343c"
  surface-variant: "#3a3331"
  surface-tint: "#ffb59a"
  outline: "#a08d86"
  outline-variant: "#52443e"
  outline-muted: "#5b4137"
  outline-warm: "#ab897d"
  error: "#ffb4ab"
  error-container: "#93000a"
  warning: "#ffc073"
  success: "#8fdba6"
  on-background: "#ece0dc"
  on-surface: "#ece0dc"
  on-surface-variant: "#d7c2bb"
  on-primary: "#512311"
  on-primary-container: "#7a442f"
  on-primary-fixed: "#360f02"
  on-primary-fixed-variant: "#6c3925"
  on-secondary: "#303030"
  on-secondary-container: "#b6b5b4"
  on-tertiary: "#00325a"
  on-tertiary-container: "#285483"
  on-error: "#690005"
  on-error-container: "#ffdad6"
  icon-input: "#8a7a73"
  inverse-surface: "#ece0dc"
  inverse-on-surface: "#362f2d"
  inverse-primary: "#88503a"
typography:
  display-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "56px"
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: "40px"
    letterSpacing: "-0.01em"
  headline-md:
    fontFamily: "Inter, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "32px"
  body-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "28px"
  body-md:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
  body-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
  label-md:
    fontFamily: "Inter, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "20px"
    letterSpacing: "0.05em"
  code-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
rounded:
  sm: "0.125rem"
  DEFAULT: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  base: "4px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  gutter: "16px"
  margin-mobile: "16px"
  margin-desktop: "32px"
components:
  button-primary:
    backgroundColor: "{colors.solar-orange}"
    textColor: "{colors.on-primary-fixed}"
    rounded: "{rounded.lg}"
    padding: "16px 40px"
    typography: "{typography.headline-md}"
  button-primary-hover:
    backgroundColor: "{colors.solar-orange}"
    textColor: "{colors.on-primary-fixed}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "12px 40px"
    typography: "{typography.headline-md}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-variant}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
    typography: "{typography.body-md}"
  input:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "12px 16px 12px 44px"
    typography: "{typography.body-md}"
  chip:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface-variant}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
    typography: "{typography.body-sm}"
  card:
    backgroundColor: "{colors.surface-low}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Technical Precision - Solar

## 1. Overview

**Creative North Star: "The Terminal Desk"**

The design system embodies a developer's ideal workspace — the well-configured terminal, the organized workbench, the instrument panel where every readout earns its space. Dark ambient lighting is not an aesthetic choice; it is the right environment for extended coding sessions. Solar Orange (`#FF5C00`) is the single warm accent that cuts through the obsidian canvas, marking actions and active states with the energy of a live indicator light — never decorative, always purposeful.

The system explicitly rejects: VS Code web's overwhelming chrome, typical coding tutorials' toy-like simplicity, generic SaaS dashboards' template-default aesthetic, and the AI slop family — cream backgrounds, gradient text, identical card grids, numbered section eyebrows, glassmorphism, side-stripe borders, and hero-metric templates. Every surface, border, and shadow is designed for extended use in low-light environments where information density is the visual language.

**Key Characteristics:**
- Dark-first single-accent palette with warm-tinted structural elements
- Inter for all UI, JetBrains Mono for code and technical strings
- 4px baseline grid with compact density for data-heavy views
- Tonal layering for depth, minimal shadows reserved for floating elements
- Bordered modules over whitespace for content grouping
- Consistent interactive vocabulary: brighten on hover, subtle scale on press, orange focus ring

## 2. Colors

A dark-first palette anchored by Solar Orange, a single high-energy accent that provides visual hierarchy against deep obsidian backgrounds. Every color follows Material Design 3's semantic-role pattern: base role, `on-*` role for text on filled surfaces, and `*-container` / `on-*-container` pairs for tonal surfaces.

### Primary

- **Solar Orange** (`#FF5C00`): The brand accent. Used for primary CTA buttons, active nav indicators, focus rings, icon accents, scrollbar hover, and any element that demands immediate attention. This is the only fully saturated color in the system — its rarity is the point.
- **Warm Peach** (`#FFB59A`): The softer primary tone. Used for text and icons on dark surfaces where Solar Orange would be too loud to read — secondary headlines, ghost button strokes, surface tint overlays.
- **Warm Cream** (`#FFDBCE`): Primary text color on dark backgrounds. The lightest warm tone, used for body text that needs to feel approachable without being pure white.

### Secondary

- **Cool Gray** (`#C8C8C5`): Secondary text and subdued UI elements. A neutral that steps back from the warm palette.
- **Dim Gray** (`#474746`): Secondary button fills, inactive chip backgrounds, low-emphasis container surfaces.

### Tertiary

- **Ice Blue** (`#D2E4FF`): Tertiary accent for informational elements, links, and complementary highlights that sit outside the warm family.
- **Steel Blue** (`#A0C9FF`): Tertiary container for filled badges and tags that need to feel technical without competing with Solar Orange.

### Neutral

- **Obsidian** (`#181210`): The base canvas. A near-black with a warm undertone, not a pure neutral — this is the "desk" in The Terminal Desk.
- **Deep Void** (`#0C0E14`): The lowest surface — code editor backgrounds, sunken search bars, recessed regions. Deliberately deeper than the canvas to create negative space.
- **Surface Container Scale**: A seven-step tonal ramp from `surface-container-lowest` (`#120D0B`) through `surface-container` (`#1E1F26`) to `surface-container-highest` (`#3A3331`). Each step creates depth through color temperature, not shadows. Cards sit one step above the canvas; modals float two steps above.
- **Warm Outline** (`#AB897D`): Default border color. A warm-tinted outline pulled from the same hue family as Solar Orange, so every edge in the UI is quietly related to the accent — borders feel *designed for this product*, not pulled from a default library.
- **Muted Outline** (`#52443E`): Low-emphasis dividers, input borders at rest. The same warm family, one step dimmer.
- **Deep Outline** (`#5B4137`): Scrollbar thumbs, the subtlest structural lines.

### Feedback

- **Success** (`#8FDBA6` / container `#0B5327`): Used sparingly for confirmations and positive states.
- **Warning** (`#FFC073` / container `#5C3E00`): Destructive-action warnings and caution states.
- **Error** (`#FFB4AB` / container `#93000A`): Validation errors and failure states.

### Named Rules

**The Solar Rule.** Solar Orange is used on ≤10% of any given screen. Its rarity is what makes it powerful — when it appears, the user knows something requires attention. Never use Solar Orange for decoration, background fills, or large surface areas.

**The Warm Border Rule.** All structural borders and dividers use warm-tinted outline tokens (`#AB897D`, `#52443E`, `#5B4137`), never a generic neutral gray. This keeps every edge in the UI quietly related to Solar Orange.

## 3. Typography

**Display/Body Font:** Inter (with system-ui fallback)
**Code/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** Inter carries the entire UI in multiple weights — a single family tuned for density and legibility. Headlines use tighter tracking and semi-bold weights for an "instrument-panel" compactness. Labels use uppercase with wide tracking to differentiate metadata from body text. JetBrains Mono appears specifically for code, IDs, and technical strings, reinforcing the developer-native identity.

### Hierarchy

- **Display** (700, 48px / 56px line-height, -0.02em tracking): Hero headlines only. The largest type on the page, used once per surface.
- **Headline LG** (600, 32px / 40px, -0.01em): Section headings. The primary structural marker for page regions.
- **Headline MD** (600, 24px / 32px): Subsection headings, card titles, modal headers.
- **Body LG** (400, 18px / 28px): Lead paragraphs, hero descriptions. Max line length 65–75ch for readability.
- **Body MD** (400, 16px / 24px): Default body text, form input values, button labels.
- **Body SM** (400, 14px / 20px): Secondary text, captions, helper copy.
- **Label MD** (500, 14px / 20px, 0.05em tracking, uppercase): Form labels, chip text, metadata, section kickers. Always uppercase to visually separate from body text.
- **Code MD** (400, 14px / 20px, JetBrains Mono): Code snippets, terminal output, IDs, share slugs, line numbers.

### Named Rules

**The One Family Rule.** Inter carries headings, body, labels, and buttons. No display fonts, no serif accents, no decorative typefaces. The only exception is JetBrains Mono for code surfaces.

**The Uppercase Label Rule.** All form labels, metadata, chip text, and section kickers are uppercase with 0.05em tracking. This creates a clear visual layer between structural text (headlines/body) and metadata text (labels/captions).

## 4. Elevation

Depth is conveyed through tonal layering — each step up in elevation moves to a lighter surface tone from the same warm ramp. Shadows are used minimally and structurally, not decoratively.

### Tonal Layers

- **Level 0 — Canvas** (`#0C0E14` / `#181210`): The base. Recessed regions like code editor backgrounds and sunken search bars sit here.
- **Level 1 — Cards & Panels** (`#1A1B22` / `#1E1F26`): Primary content containers, sidebar, snippet list. One step above the canvas, separated by warm outline borders.
- **Level 2 — Floaters** (`#282A31` / `#3A3331`): Modals, dropdowns, tooltips, popovers. Two steps above the canvas, visible as "floating" elements.
- **Focus Ring**: 2px Solar Orange outline, offset 2px, on every interactive element. The focus indicator is structural, not decorative.

### Shadow Vocabulary

- **Stacked Sheet** (`box-shadow: 0 4px 24px rgba(0,0,0,0.25)`): Rare. Used only on the code editor mockup card and auth form cards — elements that genuinely float above the main content surface. Sharp, not blurred; the "stacked paper" effect rather than ambient glow.
- **No Ambient Shadows**: Cards, list items, and buttons never cast shadows. Depth comes from tonal steps and borders.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only on elements that genuinely float above the canvas (modals, dropdowns, the code editor card). If an element sits within the normal content flow, it has no shadow — only a tonal step and a border.

## 5. Components

### Buttons

- **Shape:** Gently curved edges (4px radius on primary/secondary, matching `rounded-sm` in the token scale)
- **Primary:** Solar Orange fill (`#FF5C00`) with deep warm text (`#360F02`). Full-width, 56px height, uppercase label. Brightens on hover (`brightness(1.1)`), subtle scale-down on press (`scale(0.98)`).
- **Secondary / Outlined:** Transparent background with muted warm border (`#52443E`), neutral text. Fills to `surface-container-high` on hover. Same full-width, 48px height.
- **Ghost / Navigation:** No border, no fill. Text in `on-surface-variant` that transitions to Solar Orange on hover. Used for footer links, sign-in text buttons.
- **Focus:** 2px Solar Orange outline, 2px offset. Consistent across all button variants.

### Inputs

- **Style:** `surface-container-low` background (`#201A18`) with 1px `outline-variant` border (`#52443E`). 4px radius. Leading icon in `icon-input` color (`#8A7A73`).
- **Focus:** Border transitions to 2px Solar Orange. Ring and outline suppressed (`focus:ring-0 focus:outline-none`).
- **Label:** Uppercase, 14px, 500 weight, 0.05em tracking. `on-surface-variant` color.
- **Error:** Border transitions to Error color (`#FFB4AB`). Error message in same color below the input.

### Chips / Tags

- **Style:** `surface-container` background (`#1E1F26`) with `on-surface-variant` text. 4px radius, compact padding (4px 8px). 1px `outline-variant` border.
- **Selected/Active:** Solar Orange text on Solar Orange at 10% opacity background. Border transitions to Solar Orange.
- **Size:** 10px–14px text, uppercase for filter chips, sentence-case for content tags.

### Cards / Containers

- **Corner Style:** 8px radius (`rounded-lg`)
- **Background:** `surface-low` (`#1A1B22`) — one tonal step above the canvas
- **Border:** 1px `outline-variant` (`#52443E`). On hover, transitions to `solar-orange/50` for interactive cards.
- **Shadow Strategy:** None at rest. The code editor card and auth form cards use `box-shadow: 0 4px 24px rgba(0,0,0,0.25)` as the only exception.
- **Internal Padding:** 24px (`p-lg`) standard, 40px (`p-xl`) for feature sections.

### Navigation

- **Top Bar:** Fixed, `surface-container-low` background (`#201A18`), 64px height, full-width, `z-50`. Bottom border in `outline-variant`.
- **Nav Links:** Body MD, `on-surface-variant` at rest, transitions to Solar Orange on hover. Active link has `border-b-2` in Solar Orange.
- **CTA Button (Register):** `primary-container` fill (`#FFB59A`) with `on-primary-container` text (`#7A442F`). Rounded, bold, brightens on hover.
- **Search Bar:** `surface-lowest` background, `outline-variant` border, icon-leading, hidden below `lg` breakpoint.

### Code Editor Mockup

- **Structure:** `surface-low` card with `outline-muted` border, 12px radius. Header with traffic-light dots (`error/40`, `warning/40`, `success/40`). Code area in `#0C0E14`. Footer with status dot (Solar Orange) and dimension tags.
- **Syntax Colors:** `success` for keywords, `warning` for strings, `on-surface` for identifiers, `outline` for comments.
- **Interactive:** Parent `group` hover triggers a subtle Solar Orange glow (`bg-gradient-to-r from-solar-orange/50 blur-xl opacity-20`).

### Scrollbars

- **Firefox:** `scrollbar-width: thin`, `scrollbar-color: #5B4137 #120D0B`
- **Chromium/Safari:** 8px width, `outline-muted` thumb on `surface-container-lowest` track. Thumb transitions to Solar Orange on hover.

## 6. Do's and Don'ts

### Do:

- **Do** use Solar Orange (`#FF5C00`) exclusively for primary actions, active states, and focus indicators — never for decoration or large surface fills.
- **Do** use warm-tinted outline tokens (`#AB897D`, `#52443E`, `#5B4137`) for all borders and dividers — never generic neutral grays.
- **Do** use tonal layering (surface-container scale) to convey depth — each elevation step is a lighter warm tone, not a shadow.
- **Do** use uppercase with 0.05em tracking for all labels, metadata, and chip text — this creates a clear structural layer separate from body text.
- **Do** use JetBrains Mono specifically for code, terminal output, IDs, and share slugs — it reinforces the developer-native identity.
- **Do** use `brightness(1.1)` on hover and `scale(0.98)` on press for buttons — subtle, mechanical feedback that feels precise.
- **Do** use bordered modules for content grouping instead of relying on whitespace alone — this reinforces the "instrument-panel" density.
- **Do** use `focus:outline-2 focus:outline-solar-orange focus:outline-offset-2` on every interactive element — the 2px offset ring is the system's focus signature.

### Don't:

- **Don't** use VS Code web's overwhelming chrome — SnippetVault is a focused snippet tool, not a full IDE. Keep navigation minimal and content-dense.
- **Don't** use generic SaaS dashboard patterns — template-default aesthetic, identical card grids, hero-metric templates. Every screen should feel purpose-built.
- **Don't** use AI slop patterns — cream/sand backgrounds, gradient text (`background-clip: text`), glassmorphism, side-stripe borders (`border-left` > 1px), numbered section eyebrows (01/02/03), identical card grids with icon + heading + text.
- **Don't** use shadows on cards, list items, or buttons — depth comes from tonal steps and warm borders, not ambient glow.
- **Don't** use decorative motion — no bounce, no elastic, no orchestrated page-load sequences. Motion conveys state (loading, feedback, reveal), not choreography.
- **Don't** use display fonts in UI labels, buttons, or data — Inter carries everything. The only exception is JetBrains Mono for code surfaces.
- **Don't** use `modal` as the first interaction pattern — exhaust inline and progressive alternatives before reaching for a modal.
- **Don't** use inconsistent component vocabulary — if two screens treat the same action differently (e.g., the "save" button looks different), one is wrong. Same shape, same colors, same states everywhere.
- **Don't** use pure white (`#FFFFFF`) for text — use `on-surface` (`#ECE0DC`) or `primary` (`#FFDBCE`) instead. Pure white on dark backgrounds is harsh and breaks the warm palette.
- **Don't** use gradient backgrounds on surfaces — the palette is flat tonal layers. Gradients belong only in the code editor mockup's decorative glow effect.
