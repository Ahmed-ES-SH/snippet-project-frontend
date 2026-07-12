# SnippetVault Frontend

A Next.js application for managing code snippets, built with App Router, TypeScript, and Tailwind CSS.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.2.10 (App Router) |
| Language | TypeScript 5 |
| React | 19.2.4 |
| Styling | Tailwind CSS 4 |
| Forms | react-hook-form + zod |
| Server Actions | next-safe-action |
| File Upload | react-dropzone |
| Notifications | sonner |
| Package Manager | pnpm |
| Linting | ESLint 9 |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (required — do not use npm or yarn)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
pnpm build
```

### Production

```bash
pnpm start
```

### Lint

```bash
pnpm lint
```

## Project Structure

```
frontend/
├── app/
│   ├── [locale]/                    # i18n routes (en, ar)
│   │   ├── layout.tsx              # Root locale layout
│   │   ├── page.tsx                # Home page
│   │   └── (auth)/                 # Auth route group
│   │       └── verify-email/
│   ├── api/                         # API routes
│   ├── components/
│   │   ├── UI/                      # Reusable UI primitives
│   │   ├── dashboard/               # Dashboard components
│   │   └── website/                 # Website components
│   ├── constants/
│   │   ├── dashboard/
│   │   └── website/
│   ├── helpers/
│   │   ├── global/                  # Shared helpers
│   │   ├── dashboard/
│   │   └── website/
│   ├── hooks/
│   │   ├── global/                  # Shared hooks
│   │   ├── dashboard/
│   │   └── website/
│   ├── translations/
│   │   ├── en.json
│   │   └── ar.json
│   ├── types/
│   │   ├── global/
│   │   ├── dashboard/
│   │   └── website/
│   ├── globals.css
│   └── layout.tsx                   # Root layout
├── screens/                         # Design mockups (HTML + PNG)
├── proxy.ts                         # Middleware logic
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── package.json
```

## Architecture Rules

### Route Folders Stay Thin

Route folders (`app/[locale]/.../<pageName>/`) contain only Next.js reserved files:
- `page.tsx`
- `layout.tsx` (if needed)
- `loading.tsx` / `error.tsx` (if needed)

No local `_components`, `_hooks`, or `_helpers` inside route folders.

### Centralized Feature Groups

All components, hooks, helpers, types, and constants live in top-level folders organized by domain:

```
app/components/<domain>/<feature>/
app/hooks/<domain>/<feature>/
app/helpers/<domain>/<feature>/
app/types/<domain>/<feature>/
app/constants/<domain>/<feature>/
```

Domains: `website`, `dashboard`, `auth`, or other named groups.

### Shared Code

- Components/hooks shared by 2+ pages in the same domain → `<domain>/shared/`
- Fully generic primitives → `app/components/UI/`
- Cross-domain shared code → `global/` folders

### Server vs Client Components

- `page.tsx` is always a Server Component
- Interactive UI (toggles, forms, dropdowns) → Client Components in `app/components/<domain>/<feature>/`
- Client Components use `"use client"` directive

### i18n

- Locales: `en`, `ar`
- Server-side: `getTranslations(locale, namespace)` from `app/helpers/global/getTranslations`
- Client-side: `useTranslation(path)` from `app/hooks/global/useTranslation`
- All user-facing text goes through translation files

### Forms

- react-hook-form for form state
- zod for validation
- next-safe-action for server mutations

## Screens

Design mockups are in `screens/` folder. Each screen contains:
- `code.html` — HTML/Tailwind markup
- `screen.png` — Reference screenshot

Available screens:
- `snippetvault_comprehensive_snippet_manager_home`
- `snippetvault_create_fragment_workbench`
- `snippetvault_developer_profile`
- `snippetvault_edit_fragment_workbench`
- `snippetvault_login_terminal`
- `snippetvault_my_snippets_pro_registry`
- `snippetvault_public_fragment_view`
- `snippetvault_security_account_settings`
- `snippetvault_system_initialization`
- `snippetvault_system_interruption_404`
- `snippetvault_user_dashboard_workbench`
- `technical_precision_solar`

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=your_site_url
API_BASE_URL=your_api_base_url
```
