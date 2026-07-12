# Agent Instructions

This document defines rules for AI agents working on this codebase.

## Package Manager

**pnpm only.** Never use `npm` or `yarn`.

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

## Screen Builder Workflow

When converting a screen folder (HTML + PNG) into a Next.js route:

### Step 0 — Inputs

1. Confirm screen folder path
2. Ask user for destination route (never infer from folder name)
3. Verify folder contains exactly one HTML file and one PNG

### Step 1 — Read Before Write

- Read HTML file in full (source of truth for markup and Tailwind classes)
- View PNG for ambiguous states (hover, responsive, imagery)
- Inspect project for existing helpers, hooks, and patterns

### Step 2 — Write Plan

Create `PLAN.md` in the screen folder before any implementation. Plan includes:

1. Inputs confirmed
2. Project findings (i18n, helpers, domain classification)
3. Clarifications resolved
4. Reusable primitives (check `app/components/UI/` first)
5. Route structure
6. Component breakdown (one file per visual section)
7. Hooks/helpers plan
8. Types/constants plan
9. Translations plan
10. Assets plan
11. Anticipated file sizes

### Step 3 — Checklist

Every plan must pass this checklist before implementation:

- [ ] Inputs confirmed (one HTML, one PNG, explicit route)
- [ ] Golden rule: all ambiguities asked and answered
- [ ] Reusable primitives checked in `app/components/UI/`
- [ ] Fidelity: no additions/removals beyond mockup
- [ ] Scope: files only in allowed paths
- [ ] Domain/feature placement correct
- [ ] `page.tsx` is thin wrapper only
- [ ] Server/Client boundaries correct
- [ ] Metadata placement correct
- [ ] Translations routed through JSON files
- [ ] Semantic HTML used
- [ ] File/folder naming conventions followed
- [ ] One section per file
- [ ] No dead code or over-engineering
- [ ] File sizes under 200 lines
- [ ] Completeness: all visual sections covered

### Step 4 — Implement

Follow the approved plan exactly.

### Step 5 — Report

Report files created, primitives used, and any deviations from plan.

## File Conventions

### Naming

- Route folders: lowercase (`login/`, `forgot-password/`)
- Next.js files: lowercase (`page.tsx`, `layout.tsx`, `loading.tsx`)
- Components: PascalCase (`ProductCard.tsx`)
- Hooks: camelCase file (`useCart.ts`), camelCase export (`useCart`)
- Helpers: camelCase (`formatDate.ts`)
- Types: PascalCase (`UserType.ts`)
- Constants: UPPER_SNAKE_CASE file (`API_ENDPOINTS.ts`)

### Structure

```
app/[locale]/.../<pageName>/
├── page.tsx          # Thin wrapper, imports only
├── layout.tsx        # If needed, metadata lives here
└── loading.tsx       # Optional

app/components/<domain>/<feature>/
├── SectionName.tsx   # One per visual section
└── ...

app/hooks/<domain>/<feature>/
├── UseHookName.ts
└── ...

app/helpers/<domain>/<feature>/
├── helperName.ts
└── ...
```

### Server vs Client

- `page.tsx`: Server Component (no `"use client"`)
- Interactive UI: Client Components with `"use client"`
- Forms: react-hook-form + zod + next-safe-action

### i18n

- Server: `getTranslations(locale, "namespace")`
- Client: `useTranslation("Namespace.key")`
- Never hardcode user-facing text

### Translations

- Files: `app/translations/en.json`, `app/translations/ar.json`
- Structure: `{ "Namespace": { "key": "value" } }`
- Check for existing keys before adding

## Code Quality

- No unused variables, imports, or exports
- No orphan files (every file must be imported somewhere)
- No speculative abstractions
- Components under 200 lines (split if larger)
- Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<button>`)
- Real `<form>`, `<label>`, `<input>` for forms
- `<ul>`/`<li>` for repeated items
- Headings in hierarchical order

## Existing Infrastructure

### Helpers (`app/helpers/global/`)

- `getTranslations(locale, namespace?)` — Server-side translations
- `getSharedMetadata(locale, title, description)` — OpenGraph/Twitter meta
- `globalRequest({ endpoint, method, body, ... })` — API client with auth
- `formatTitle(title)` — Slugify title
- `getIconComponent(iconName)` — Get react-icons/fa component

### Hooks (`app/hooks/global/`)

- `useTranslation(path)` — Client-side translations
- `useLocale()` — Get current locale
- `useClickOutside(ref, callback)` — Click outside detection
- `useDebounce(value, delay)` — Debounce value

### Types

- `ParamsLocaleType` — `Promise<{ locale: LocaleType }>`
- `LocaleType` — `"en" | "ar"`

## Screens Directory

Design mockups in `screens/` follow naming pattern:
`snippetvault_<feature_name>/`

Each contains:
- `code.html` — Source markup
- `screen.png` — Reference image

Convert screens to Next.js routes following the Screen Builder Workflow above.
