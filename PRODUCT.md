# Product

## Register

product

## Platform

web

## Users

Working developers — frontend, backend, and full-stack — who context-switch between multiple projects daily and accumulate reusable code patterns across repos, gists, chat threads, and scratch files. The primary job to be done is fast capture and fast retrieval: saving a snippet should take under a minute; finding one should take a handful of keystrokes. Student and junior developers are a secondary audience, using the platform to build a personal toolkit as they learn, with public share links as lightweight portfolio pieces.

## Product Purpose

SnippetVault eliminates the recurring tax of re-solving already-solved problems. It provides a single, searchable, taggable library with a real code editor (Monaco), fast search-as-you-type, combinable filters, and one-click public sharing — all wrapped in a dark-first, developer-native interface. Success looks like a developer who never rewrites something they've already solved once, and who can share working code with a link instead of a copy-paste.

## Positioning

Stop re-solving the same problems — search your own code history in seconds.

## Brand Personality

Fast, minimal, powerful. The interface feels like a tool that gets out of your way: compact density, keyboard-first navigation, no decorative chrome. The Solar Orange accent injects energy without slowing the user down — it marks actions and active states, never decorates. The voice is direct and technical, stating what happened and what to do next without hedging or apologizing.

## Anti-references

- VS Code web: cluttered, overwhelming chrome, too many panels for a focused snippet task
- Typical coding tutorials: toy-like, simplified, not serious enough for working developers
- Generic SaaS dashboards: template-default aesthetic, no personality, interchangeable with any other tool
- AI slop: cream/sand backgrounds, gradient text, identical card grids, numbered section eyebrows, glassmorphism, side-stripe borders, hero-metric templates — the saturated defaults that signal "AI made this"

## Design Principles

1. **Earned familiarity.** A developer fluent in Linear, Raycast, or Stripe should sit down and trust this interface without pausing at oddly-off components. The tool disappears into the task; every component looks like it belongs in the category's best tools.
2. **Density over decoration.** Information density is the product's visual language — compact spacing, bordered modules, data-rich views — not whitespace-as-design. Content earns its space; decoration doesn't.
3. **Consistent vocabulary.** The same button shape, form control, icon style, and interaction pattern across every screen. If two screens treat the same action differently, one is wrong. Consistency is a feature, not a lack of creativity.
4. **State over choreography.** Motion conveys state changes (loading, feedback, reveal), not decoration. No orchestrated page-load sequences, no bounce, no elastic — the product loads into a task, not a performance.
5. **Dark-first with purpose.** Dark mode is not an aesthetic choice — it's the right ambient light for long coding sessions. Every surface, border, and shadow is designed for extended use in low-light environments.

## Accessibility & Inclusion

WCAG 2.1 AA compliance across the product. This means: ≥4.5:1 contrast for body text, ≥3:1 for large text, full keyboard navigation with visible 2px focus outlines, screen reader basics (semantic HTML, ARIA labels where needed), and `prefers-reduced-motion` respected for all animations. The compact density target must not sacrifice touch target sizes (minimum 44x44px on interactive elements). The product serves developers who may be navigating entirely by keyboard, and the interface must support that workflow without friction.
