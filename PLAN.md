# Home Page Scroll Animation Plan

## Goal

Add modern, smooth scrolling animations to the home page using framer-motion v12+ (`framer-motion`). At least 3 sections will receive scroll-triggered reveal animations. The hero section will get a scroll-linked parallax effect.

## Current State

- Home page: `app/[locale]/page.tsx` (Server Component)
- 7 sections: HeroSection, StatStrip, FeatureGrid, BuiltForSection, HowItWorks, CodeShowcaseSection, CtaBand
- All section components are currently **Server Components** with no client-side interactivity
- Animations are currently CSS-only (`animate-fade-in` class)
- framer-motion v12.42+ is already installed

## Architecture Decision

Each section that needs animation must be wrapped in a **Client Component** that uses `"use client"`. The `page.tsx` stays a Server Component — it imports the animated wrapper, which imports the original section content.

Pattern:
```
app/components/website/home/
├── ScrollReveal.tsx          # Reusable animated wrapper (NEW)
├── HeroParallax.tsx          # Hero scroll-linked wrapper (NEW)
├── StatStrip.tsx             # Existing, stays server
├── FeatureGrid.tsx           # Existing, stays server
├── BuiltForSection.tsx       # Existing, stays server
├── HowItWorks.tsx            # Existing, stays server
├── CodeShowcaseSection.tsx   # Existing, stays server
└── CtaBand.tsx               # Existing, stays server
```

## New Files

### 1. `app/components/website/home/ScrollReveal.tsx` (~40 lines)

Reusable client component wrapping any section with a whileInView reveal.

```tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}
```

- Uses `whileInView` with `viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}`
- Easing: `[0.16, 1, 0.3, 1]`
- Duration: `0.6s`
- `direction` prop controls translate origin (up=y:40, down=y:-40, left=x:40, right=x:-40)
- `delay` prop for staggered section entrances

### 2. `app/components/website/home/HeroParallax.tsx` (~50 lines)

Client component for the hero section with scroll-linked parallax.

```tsx
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
```

- Wraps `HeroSection` content
- Uses `useScroll({ target, offset: ["start start", "end start"] })`
- Transforms: hero title `y` moves up faster (parallax), `opacity` fades out near bottom
- CodeEditorMockup gets subtle `scale` transform (0.95→1) as it enters viewport

### 3. `app/components/website/home/AnimatedSection.tsx` (~35 lines)

A thin `"use client"` wrapper that makes a server-rendered section animatable. This keeps the original section components as server components — only the motion wrapper is client.

Actually, a simpler approach: create animated variants of sections that compose the original content. But since the original sections are server components and motion needs a client boundary, the cleanest pattern is:

- `ScrollReveal` wraps the `<section>` of each component from the outside
- `page.tsx` wraps each section import with `<ScrollReveal>`

Wait — `page.tsx` is a Server Component. It can render Client Components as children. So:

```tsx
// page.tsx (server)
<ScrollReveal>
  <StatStrip />
</ScrollReveal>
```

This works because `ScrollReveal` is a Client Component and `StatStrip` is a Server Component rendered inside it. No changes needed to `StatStrip` itself.

## Sections to Animate

| # | Section | Animation Type | Priority |
|---|---------|---------------|----------|
| 1 | **HeroSection** | Scroll-linked parallax (y transform + opacity fade) | High |
| 2 | **StatStrip** | Staggered card reveal (3 cards, 80ms offset each) | High |
| 3 | **FeatureGrid** | 2x2 grid stagger reveal (4 cards, 100ms offset) | High |
| 4 | **BuiltForSection** | Card stagger + horizontal strip slide-in | Medium |
| 5 | **HowItWorks** | Step-by-step stagger (3 steps, sequential reveal) | Medium |
| 6 | **CodeShowcaseSection** | Code cards stagger reveal | Low |
| 7 | **CtaBand** | Simple fade-up reveal | Low |

**Minimum 3 sections animated** as per requirement — targeting sections 1, 2, 3 as primary. Sections 4-7 as bonus.

## Implementation Steps

### Step 1: Create ScrollReveal component
- File: `app/components/website/home/ScrollReveal.tsx`
- Reusable whileInView wrapper with direction, delay, className props
- Import from `framer-motion`

### Step 2: Create HeroParallax component
- File: `app/components/website/home/HeroParallax.tsx`
- useScroll + useTransform for hero parallax effect
- Fade out hero text, subtle scale on code mockup

### Step 3: Update page.tsx
- Wrap each section with `<ScrollReveal>` or `<HeroParallax>`
- page.tsx stays a Server Component (it just renders Client Components as children)
- Add `className` pass-through for section styling

### Step 4: Test & Polish
- Run `pnpm dev` and verify animations in browser
- Check RTL layout (ar locale) — animations should work regardless of direction
- Verify `prefers-reduced-motion` — graceful degradation
- Check bundle size impact
- Run `pnpm build` to ensure no server/client boundary issues

## Files Modified

| File | Change |
|------|--------|
| `app/components/website/home/ScrollReveal.tsx` | **NEW** — reusable reveal wrapper |
| `app/components/website/home/HeroParallax.tsx` | **NEW** — hero parallax wrapper |
| `app/[locale]/page.tsx` | Wrap sections with animated wrappers |

## Performance Budget

- ScrollReveal: ~0.5KB gzipped (motion already in bundle)
- HeroParallax: ~0.3KB gzipped
- Total additional JS: < 1KB gzipped (framer-motion already installed)
- All animations use `transform` + `opacity` only — compositor thread safe
- `viewport.once: true` on all reveals — no re-triggering
- No scroll listeners — MotionValues handle it off-thread

## Verification

- [ ] Animations visible on scroll in Chrome, Safari, Firefox
- [ ] RTL layout works with animations
- [ ] Reduced motion preference respected
- [ ] `pnpm build` succeeds
- [ ] No layout shift from animations
- [ ] Hero parallax feels smooth (60fps)
- [ ] Card staggers feel choreographed, not robotic
