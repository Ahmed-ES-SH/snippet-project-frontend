# Product Requirements Document (PRD)
# Snippet Manager

| | |
|---|---|
| **Document Version** | 2.0 (Expanded) |
| **Status** | Draft — ready for implementation planning |
| **Product Type** | Full-stack portfolio SaaS application |
| **Design Reference** | `DESIGN.md` — "Technical Precision - Solar" |
| **Last Updated** | July 2026 |

**Contents:** Overview · Problem · Goals · Users · Value Proposition · Scope · Assumptions · Tech Stack · Design System · Information Architecture · Dashboard · Data Model · Features · User Stories · Functional Requirements · Non-Functional Requirements · Architecture · Database · API · Backend Modules · Routes · Validation & Errors · Security · Testing · Success Metrics · Roadmap · Success Criteria · Risks · Glossary · Final Vision

---

## 1. Product Overview
Snippet Manager is a developer-focused platform for storing, organizing, searching, and sharing reusable code snippets. It solves a small, well-understood problem end-to-end — authentication, ownership, search, sharing — which makes it a deliberately scoped, portfolio-quality SaaS application rather than an open-ended tool. The product is built as a two-tier web application: a Next.js frontend consuming a REST API served by a NestJS backend, backed by a PostgreSQL database through Prisma ORM.

The emphasis throughout this document is depth over breadth: every feature already committed to in the original scope is specified precisely enough to build and test against, rather than left as a one-line bullet. No functionality beyond what was already planned has been added.

## 2. Problem Statement
Developers accumulate small, reusable pieces of logic over time — authentication boilerplate, middleware, database queries, utility functions, React hooks, regular expressions, configuration snippets — through the natural course of building things. In practice these end up scattered across old project repos, gists, notes apps, chat threads with themselves, and local scratch files, none of which are organized around *reuse*. The result is a recurring, low-grade tax: a developer knows they've solved this exact problem before but can't find where, and ends up re-solving it or hunting through old projects.

Snippet Manager addresses this directly: a single, searchable, taggable library that's fast to add to and fast to retrieve from, with the option to make individual snippets public when they're worth sharing.

## 3. Goals & Objectives
- **Build a professional full-stack portfolio project** that demonstrates production-grade patterns: layered backend architecture, typed contracts between frontend and backend, a real authentication model, and a cohesive, custom design system rather than default component styling.
- **Enable fast snippet creation and retrieval** — creating a snippet should take under a minute; finding one should take a handful of keystrokes.
- **Provide a modern developer experience** — a real code editor (Monaco) instead of a plain textarea, keyboard-friendly navigation, and a dark-first UI suited to long working sessions.
- **Demonstrate clean architecture and engineering practice** — modular backend boundaries, consistent validation and error handling, and a data model that holds up under normal use (uniqueness constraints, cascading deletes, indexing).
- **Ship something deployable and demoable**, not just runnable locally — a public URL a reviewer or interviewer can open cold and understand within a minute.

## 4. Target Users & Personas
| Persona | Who they are | What they need from Snippet Manager |
|---|---|---|
| **Frontend Developer** | Works across multiple component libraries and frameworks | A place to keep hooks, component patterns, and CSS/Tailwind tricks that don't belong in any single repo |
| **Backend Developer** | Builds and maintains APIs and services | Reusable middleware, auth boilerplate, query patterns, and config snippets that repeat across services |
| **Full-Stack Developer** | Context-switches between frontend and backend daily | One unified library instead of two separate half-organized ones, searchable by language and tag |
| **Student / Junior Developer** | Still building a personal toolkit | A low-friction way to save what they learn as they learn it, and a public share link to show working examples to peers or in a portfolio |

All four personas share the same underlying need — fast capture, fast retrieval — which is why the product deliberately does not branch into different experiences per persona; the same flows serve all of them.

## 5. Core Value Proposition
- **Personal code library** — one account, one searchable place for everything worth keeping.
- **Fast search** — search and filters return results as the user types, so the library stays useful even as it grows.
- **Tag organization** — lightweight, freeform tagging rather than a rigid folder hierarchy.
- **Public sharing** — any snippet can be turned into a read-only public page with one toggle, no separate publishing flow.
- **Productivity improvement** — the cumulative time saved by never re-writing something already solved once.

## 6. Project Scope

### 6.1 In Scope
Authentication · User profiles · CRUD for snippets · Tags · Search · Filters · Favorites · Public sharing · Dashboard · Responsive UI · Dark mode · Monaco Editor · Pagination.

### 6.2 Out of Scope (and why)
| Excluded | Rationale |
|---|---|
| Real-time collaboration | Adds websocket infrastructure and conflict resolution for a use case (concurrent multi-user editing of a single snippet) that doesn't match how snippets are actually used — they're personal reference material, not shared documents |
| Payments | No monetization model in this phase; the product is a portfolio piece, not a commercial launch |
| AI generation | Explicitly a curation and retrieval tool, not a generation tool — keeping this boundary firm is part of what keeps the product's identity clear |
| Teams / shared workspaces | Would require a second permissions model (org-level roles) on top of the personal-ownership model this PRD specifies; a meaningfully different product |
| Native mobile app | The responsive web UI already covers mobile usage; a native app would duplicate the same feature set on a second codebase for no functional gain at this stage |

These remain candidates for a later phase, but none are designed against in this document, and nothing in the architecture below should be read as scaffolding for them.

## 7. Assumptions & Constraints
Stated explicitly here because the original scope left them implicit, and a real implementation needs a single answer for each:

- **Tags are a shared global dictionary, not per-user rows.** Two different users tagging a snippet "auth" reference the same `Tag` row. Nothing about *who else* uses a tag is ever surfaced to a user — the sharing is purely at the data layer for efficiency and consistent naming, not a social feature.
- **Deleting a tag only ever affects the caller's own snippets.** `DELETE /tags/:id` detaches the tag from the requester's snippets; the shared `Tag` row itself is garbage-collected only once no snippet from any user references it. A user can never remove a tag out from under someone else.
- **`avatarUrl` is a plain URL field, not a file upload.** There is no file storage/upload feature in scope, so a profile picture is either an external image URL the user pastes in Settings, or left empty, in which case the UI generates an initials-based avatar client-side.
- **Session persistence means server-side sessions with an httpOnly cookie** (confirmed direction — see Section 16), not JWTs. This shapes the API's auth endpoints, the database schema, and several of the security requirements below.
- **The session store lives in PostgreSQL** via a `Session` table rather than a separate service like Redis, so the MVP doesn't introduce new infrastructure. This is called out again as a scalability consideration in Section 17 and Section 29.
- **A snippet's `code` field is stored and transmitted as plain text**, never executed server-side or client-side — Monaco is used purely as a syntax-highlighting display/editing surface, not a runtime.
- **English-only UI for this phase**; no localization/i18n framework is included in scope.
- Reasonable soft limits are assumed where the original scope didn't specify one (snippet title length, code size, etc.) — these are listed against each field in Section 13 and Section 19 rather than repeated here.

## 8. Recommended Tech Stack

### Frontend
| Choice | Why |
|---|---|
| Next.js (App Router) | File-based routing that maps cleanly onto the public/private route split in Section 22, plus built-in support for both server- and client-rendered pages |
| TypeScript | Shared, enforced types for API payloads across the whole frontend |
| Tailwind CSS | Utility-first styling that maps directly onto the token system in `DESIGN.md` (spacing scale, radii, color roles) |
| shadcn/ui | Accessible, unstyled-by-default primitives (dialogs, dropdowns, comboboxes) that get themed with the Solar token set rather than fought against |
| Framer Motion | Deliberate, restrained motion for state transitions (list filtering, modal open/close) — used sparingly per the design system's "avoid unnecessary decoration" principle |
| Monaco Editor | The same editor engine behind VS Code — real syntax highlighting and line numbers for the snippet code field, loaded on demand rather than in the main bundle |

### Backend
| Choice | Why |
|---|---|
| NestJS | Opinionated module/controller/service structure that maps directly onto the module boundaries in Section 21, plus first-class support for guards (used for session and ownership checks) and DTO-based validation |
| Prisma ORM | Type-safe database access and migrations against the schema in Section 19 |
| PostgreSQL | Relational integrity (foreign keys, uniqueness constraints) for a data model with real relationships — ownership, tagging, sessions |

### Deployment
| Layer | Target |
|---|---|
| Frontend | Vercel |
| Backend | Render (Railway or Fly.io as equivalent alternatives) |
| Database | Neon PostgreSQL |

## 9. Design System & UI Principles
The full token set, component rules, and rationale live in `DESIGN.md` ("Technical Precision - Solar") — this section summarizes the parts that shape product decisions elsewhere in this document, so the two files stay easy to cross-reference.

- **Dark-first, single accent.** The UI is designed dark-first around a tonal surface ramp (`background` → `surface-container-highest`) with one high-energy accent, Solar Orange (`primary-container`, `#FF5C00`), reserved for primary actions, active/selected states, and focus indicators — never used decoratively.
- **Warm-tinted structure, not flat gray.** Borders and dividers use warm outline tokens (`outline` `#AB897D`, `outline-variant` `#5B4137`) instead of a generic neutral gray, so bordered modules — the system's primary way of grouping content instead of relying on whitespace — stay visually part of the same family as the accent color.
- **Typography.** Inter across the UI, with tighter tracking and semi-bold weights on headlines for a compact "instrument-panel" feel; uppercase labels for metadata; JetBrains Mono specifically for code, IDs, and other technical strings — which in this product means the Monaco editor, share slugs, and any inline code references.
- **Density.** A 4px baseline grid and a "Compact" density target, chosen because this is a data-heavy, list-and-table-driven product (snippet lists, tag chips, dashboard stat cards) rather than a marketing site.
- **Shape.** 4px radius for buttons/inputs/small cards, 8px for large containers (dashboard panels, modals) — disciplined and consistent rather than decorative.
- **Feedback colors used sparingly.** Success, Warning, and Error tokens exist for exactly the situations that need them (save confirmations, destructive-action warnings, validation errors) and are never used as general UI color.

## 10. Information Architecture — Main Pages
Each page below is described by its job, its key elements, and its non-default states — a real page spec needs to say what happens when there's nothing to show or something goes wrong, not just what it looks like when full of data.

| Page | Purpose | Key Elements | Notable States |
|---|---|---|---|
| **Landing** | Explain the product and drive signup | Hero, feature highlights, CTA to Register | — (public, unauthenticated) |
| **Login** | Authenticate an existing user | Email/password form, link to Register | Inline validation errors; generic "invalid email or password" on failed auth |
| **Register** | Create an account | Name/email/password/confirm-password form | Inline validation; duplicate-email error surfaced on the email field |
| **Dashboard** | At-a-glance overview of the user's library | Stat cards, most-used languages/tags, recent activity feed (see Section 11) | Empty state for a brand-new account with zero snippets, prompting snippet creation |
| **Snippets List** | Browse, search, and filter the full library | Search bar, filter/sort controls, paginated snippet cards, favorite toggle | Empty state (no snippets yet vs. no results for current search/filters, worded differently); loading skeletons; pagination controls |
| **Create Snippet** | Add a new snippet | Title, description, language selector, Monaco editor, tag combobox, visibility toggle | Unsaved-changes warning on navigation away; validation errors inline |
| **Edit Snippet** | Modify an existing snippet | Same form as Create, pre-filled | Same as Create, plus a delete action gated behind a confirmation dialog |
| **Snippet Details** | Full view of one snippet (owner) | Rendered code (syntax highlighted), metadata, tags, copy-to-clipboard, edit/delete/favorite/share actions | 403/redirect if the viewer isn't the owner |
| **Public Snippet** (`/s/[slug]`) | Read-only public view | Rendered code, title, description, language, tags, copy-to-clipboard — no edit controls, no auth required | 404 state for an unknown or no-longer-public slug |
| **Profile** | View/update account info | Name, email (read-only), avatar URL | Save-confirmation toast |
| **Settings** | Account-level preferences | Password change, theme (dark/light, if light is offered), account deletion | Confirmation dialog on account deletion |

## 11. Dashboard
The dashboard is a read-only summary view, computed from the user's own data at request time (no separate analytics pipeline — that's explicitly a Future feature, see Section 15.2).

- **Total / Public / Private / Favorite snippet counts** — four stat cards in the top row, each a simple count query scoped to the current user.
- **Most-used languages** — top 5 languages by snippet count, shown as a compact horizontal bar list, so a user can see at a glance what their library skews toward.
- **Most-used tags** — top 5 tags by snippet count, same treatment as languages.
- **Recent activity** — the 5–10 most recently created or updated snippets, each shown with title, language, and a relative timestamp ("edited 2 days ago"), linking directly to the snippet.

All dashboard data is scoped strictly to the requesting user — there is no cross-user aggregation anywhere in the product.

## 12. Snippet Data Model
This is the product's central entity; the full field-level schema (types, constraints, relations) lives in Section 19.4. At the product level, a snippet consists of:

- **Title** — required, short, what shows in list views.
- **Description** — optional, a sentence or two of context.
- **Code** — required, the actual reusable content, edited and displayed via Monaco.
- **Language** — required, drives syntax highlighting and the "most-used languages" dashboard stat.
- **Tags** — optional, zero or more, drawn from the shared tag dictionary (Section 7).
- **Visibility** — Private by default; Public generates a share link.
- **Favorite** — a simple boolean the owner can toggle from the list or detail view.
- **Share URL** — only present once a snippet has been made Public at least once.
- **Created At / Updated At** — shown as relative timestamps in the UI, exact timestamps on hover/detail view.

## 13. Features

### 13.1 MVP Features
| Feature | What "done" looks like |
|---|---|
| **Register / Login / Logout** | Session-cookie auth (Section 16) with validation, rate-limited login, and persistent sessions across browser restarts until expiry |
| **CRUD** | Full create/read/update/delete for snippets, enforced to the owner only, with confirmation on delete |
| **Search** | Debounced search across title, description, language, and tag names, returning results without a full page reload |
| **Filter** | Combinable filters by language, tag, visibility, and favorite status |
| **Tags** | Creatable multi-select on the snippet form; case-insensitive de-duplication against the shared dictionary |
| **Favorites** | One-click toggle from list or detail view; a dedicated "favorites only" filter |
| **Public sharing** | One toggle turns a snippet's visibility to Public and generates a stable share slug; the public page requires no login |
| **Copy to clipboard** | One click copies the raw snippet code, on both the owner's view and the public view, with a toast confirmation |

### 13.2 Future Features (explicitly not built in this phase)
These remain listed for roadmap continuity only — none are specified further in this document, and nothing above is built to anticipate them:

- **Version history** — track prior revisions of a snippet's code.
- **Collections** — group snippets into named sets beyond tags.
- **Import / Export** — bulk move snippets in or out of the platform.
- **Markdown notes** — freeform notes attached to a snippet beyond its description.
- **Autosave** — save-as-you-type instead of explicit save.
- **Analytics** — usage/view tracking on snippets, distinct from the dashboard's own-data stats in Section 11.

## 14. User Stories & Acceptance Criteria
| Story | Acceptance Criteria |
|---|---|
| As a new user, I want to create an account so I have a private place to store snippets. | Registration succeeds with a unique email and a valid password; the user is immediately signed in afterward; a duplicate email is rejected with a clear, field-level error. |
| As a returning user, I want to log in securely so only I can access my snippets. | Correct credentials start a session and redirect to the dashboard; incorrect credentials show a generic error that doesn't reveal whether the email exists; repeated failures are rate-limited. |
| As a user, I want to create, edit, and delete snippets so my library stays accurate and current. | All three actions are restricted to the snippet's owner; delete requires an explicit confirmation step; edits update the "last updated" timestamp. |
| As a user, I want to search by title, tag, or language so I can find something in seconds. | Typing into search returns matching results without a full page reload; filters can be combined with an active search term. |
| As a user, I want to mark snippets as favorites so my most-used ones are easy to get back to. | Toggling favorite updates immediately in the UI; a "favorites only" filter shows exactly the favorited set. |
| As a user, I want to share a snippet using a public URL so I can send it to someone without giving them account access. | Turning visibility to Public produces a stable, copyable link; that link works for anyone, logged in or not; turning visibility back to Private invalidates access (the link 404s). |
| As a visitor with a shared link, I want to view and copy a snippet without creating an account. | The public page renders the snippet read-only, with a working copy-to-clipboard action, and no edit affordances. |

## 15. Functional Requirements

### 15.1 Authentication
Full detail in Section 16; summarized here as a functional requirement:
- Register, log in, log out, and stay logged in across sessions via a server-side session and an httpOnly cookie.
- `GET /auth/me` returns the current user based on the session cookie, or a 401 if there isn't a valid one.

### 15.2 Snippet Management
- **Create:** owner is taken from the session, not from client input; defaults to Private visibility and not-favorited.
- **Read:** list endpoint returns only the caller's own snippets; detail endpoint enforces the same ownership check; the public endpoint (Section 20) is the only read path that doesn't require ownership, and only for snippets already marked Public.
- **Update:** partial updates (PATCH) allowed on any subset of fields; changing visibility to Public generates a `shareSlug` if one doesn't already exist; the existing slug is preserved (not regenerated) if a snippet is toggled Private and back to Public.
- **Delete:** hard delete, gated behind a confirmation dialog in the UI; cascades to remove the snippet's `SnippetTag` rows.

### 15.3 Search
- Searches title, description, language, and tag name, case-insensitively, with partial matching.
- Debounced client-side (roughly 300ms) so search-as-you-type doesn't spam the API.
- Combinable with all filters in Section 15.4 and with sorting.

### 15.4 Filters & Sorting
- **Filters:** language (multi-select), tags (multi-select), visibility (all/public/private), favorites-only (toggle) — all combinable.
- **Sorting:** Newest first (default), Oldest first, Recently updated, Title A–Z.

### 15.5 Tags
- Tag input is a creatable multi-select: users can pick existing tags or type a new one.
- New tag names are matched case-insensitively against the existing dictionary before a new row is created, so `Auth` and `auth` never both exist.
- Removing a tag from a snippet only affects that snippet; the shared `Tag` row persists until nothing references it (Section 7).

### 15.6 Favorites
- Single boolean toggle, optimistic in the UI (updates instantly, rolls back on request failure).
- Available from the list view (icon on the card) and the detail view.

### 15.7 Public Sharing
- Visibility toggle (Private/Public) on both the edit form and the detail view.
- Share slug is a short, random, URL-safe string, generated once per snippet on first publish.
- The public route resolves the slug to a snippet only when its current visibility is Public — a slug for a since-privated snippet returns 404, not a permissions error, to avoid confirming the slug ever existed.

### 15.8 Copy to Clipboard
- Copies the raw `code` field exactly as stored (no added comments, headers, or formatting).
- Available on the snippet card, the detail view, and the public view.
- Shows a short toast confirmation ("Copied") rather than changing the button's own label, per the design system's interface-voice guidance.

## 16. Non-Functional Requirements

### 16.1 Performance
- API responses for CRUD operations: p95 under 300ms under expected portfolio-scale load.
- Search/filter responses: p95 under 500ms.
- Monaco Editor is code-split and lazy-loaded on the Create/Edit/Detail routes only, so it never inflates the initial bundle for Login, Landing, or the Snippets List.
- Snippets List defaults to 12 items per page to keep list payloads small (Section 18 covers pagination mechanics).

### 16.2 Security
- Passwords hashed with Argon2id (bcrypt with a cost factor of 12+ as an acceptable alternative) — plaintext passwords are never logged or stored.
- Session cookies are httpOnly, `Secure` in production, and `SameSite=Lax`.
- CSRF mitigation on all state-changing requests via same-site cookie behavior plus a custom header check, since the auth model is cookie-based rather than bearer-token-based.
- All mutating endpoints validate input through DTOs before touching the database; invalid input never reaches business logic.
- Every snippet mutation re-checks ownership server-side, regardless of what the frontend already filtered.
- Login and registration are rate-limited per IP/account to blunt brute-force attempts.
- User-supplied text fields (title, description) are escaped wherever rendered, since they're plain strings, not the sandboxed Monaco surface — no field is ever rendered as raw HTML.
- HTTPS enforced in production (HSTS).

### 16.3 Reliability & Availability
- Target uptime for the hosted portfolio environment: best-effort ~99% (explicitly not an enterprise SLA).
- Every async frontend action (load, save, delete) has a defined loading, success, and error state — no action is allowed to fail silently.
- Transient network failures on read requests retry automatically with backoff before surfacing an error to the user.

### 16.4 Usability & Accessibility
- Color contrast for text against its surface meets WCAG 2.1 AA (verified against the `on-surface` / `on-surface-variant` tokens in `DESIGN.md`).
- Full keyboard navigation, with the 2px Primary-Container focus outline defined in `DESIGN.md` visible on every interactive element.
- `prefers-reduced-motion` is respected — Framer Motion transitions are disabled or minimized for users who request it.
- Responsive down to a 360px viewport, aligned to the 4/8/12-column grid in `DESIGN.md`.

### 16.5 Compatibility
- Latest two versions of Chrome, Firefox, Safari, and Edge.
- Mobile web via iOS Safari and Android Chrome — no native app, per Section 6.2.

### 16.6 Maintainability
- Backend organized into the module boundaries in Section 21, each independently testable.
- Environment-based configuration for all secrets (database URL, session secret) — nothing sensitive hardcoded.
- Consistent DTO validation and error-response shape (Section 23) across every endpoint.

### 16.7 Scalability (forward-looking constraint)
- The Postgres-backed session store (Section 7, Section 19.2) is sized for portfolio-level traffic. A move to a dedicated session store (e.g., Redis) is the identified next step if traffic or session-table write volume grows — noted as a risk in Section 29, not built now.

## 17. High-Level Architecture

```text
Browser (session cookie)
      │
Next.js Frontend (App Router)
      │  REST calls, credentials included
NestJS Backend API
      │  Guards validate the session on every protected request
Prisma ORM
      │
PostgreSQL  (Users · Snippets · Tags · SnippetTag · Sessions)
```

The frontend never holds a token in memory or storage to attach to requests — the browser sends the session cookie automatically, and the backend's session guard is the single point where "is this request authenticated" gets decided. This keeps the auth check in one place (the guard) rather than repeated per-controller.

## 18. Session-Based Authentication (Detail)
This section is the full specification behind the confirmed decision to use server-side sessions with an httpOnly cookie rather than JWTs.

- **On register or login:** the backend creates a row in the `Session` table (Section 19.2) and returns a `Set-Cookie` header containing the session id — httpOnly, `Secure` in production, `SameSite=Lax`. The cookie itself carries no user data, only an opaque session identifier.
- **On every protected request:** a NestJS guard reads the cookie, looks up the matching `Session` row, confirms it hasn't expired, and attaches the associated user to the request. A missing, unknown, or expired session id results in a 401.
- **Expiration:** sliding 7-day expiration, extended on each authenticated request, capped at a 30-day absolute lifetime — after which re-login is required regardless of recent activity.
- **Logout:** deletes the `Session` row server-side and clears the cookie — a stolen cookie stops working the moment the user logs out, unlike a stateless token that would remain valid until it naturally expired.
- **Route protection on the frontend:** Next.js middleware does a lightweight check for the cookie's presence before rendering private routes (fast redirect-to-login for the obviously-signed-out case); the NestJS guard is the actual source of truth for every API call.
- **Password reset** is not in scope for this phase — no feature bullet in Section 13 covers it, so it isn't specified here either.

## 19. Database Schema

### 19.1 User
| Field | Type | Constraints | Description |
|---|---|---|---|
| id | UUID | Primary key | Unique identifier |
| name | String | Required, 2–80 characters | Display name |
| email | String | Required, unique, stored lowercase, valid email format | Login identifier |
| passwordHash | String | Required, never returned in any API response | Argon2id hash |
| avatarUrl | String | Optional, nullable | See Section 7 — external URL, no upload |
| createdAt | DateTime | Auto-set on insert | |
| updatedAt | DateTime | Auto-updated on change | |

Relations: one-to-many with Snippet, one-to-many with Session.

### 19.2 Session
| Field | Type | Constraints | Description |
|---|---|---|---|
| id | String | Primary key, cryptographically random token | Value stored in the cookie |
| userId | UUID | Foreign key → User.id, cascade delete | Session owner |
| expiresAt | DateTime | Required | Sliding expiration, see Section 18 |
| createdAt | DateTime | Auto-set | |
| userAgent | String | Optional | Retained for security/audit visibility only — not a user-facing "manage devices" feature in this scope |
| ipAddress | String | Optional | Retained for security/audit visibility only |

### 19.3 Snippet
| Field | Type | Constraints | Description |
|---|---|---|---|
| id | UUID | Primary key | |
| userId | UUID | Foreign key → User.id, required, cascade delete | Owner |
| title | String | Required, 1–120 characters | |
| description | String | Optional, up to 500 characters | |
| code | Text | Required, up to ~20,000 characters | Rendered client-side via Monaco; never executed |
| language | String | Required, one of the supported Monaco language identifiers; default `plaintext` | Drives syntax highlighting |
| visibility | Enum (PRIVATE, PUBLIC) | Required, default PRIVATE | |
| shareSlug | String | Unique, nullable until first published | Generated once, preserved across visibility toggles |
| isFavorite | Boolean | Default false | |
| createdAt | DateTime | Auto-set | |
| updatedAt | DateTime | Auto-updated | |

Indexes: on `userId` (list queries), on `shareSlug` (public lookups), and a text-search index across `title`/`description` (search).

Relations: many-to-one with User; many-to-many with Tag via SnippetTag.

### 19.4 Tag
| Field | Type | Constraints | Description |
|---|---|---|---|
| id | UUID | Primary key | |
| name | String | Required, unique case-insensitively, 1–40 characters | |
| createdAt | DateTime | Auto-set | |

### 19.5 SnippetTag (join table)
| Field | Type | Constraints |
|---|---|---|
| snippetId | UUID | Foreign key → Snippet.id, part of composite primary key |
| tagId | UUID | Foreign key → Tag.id, part of composite primary key |

## 20. API Specification
All endpoints are under a versioned base path (e.g. `/api/v1`). "Session" in the Auth column means the request must carry a valid session cookie, enforced by the guard described in Section 18.

### 20.1 Auth
| Endpoint | Auth | Description | Key Request Fields | Success | Notable Errors |
|---|---|---|---|---|---|
| POST /auth/register | None | Creates an account and starts a session | name, email, password | 201 + user profile; sets session cookie | 409 email taken; 400 validation |
| POST /auth/login | None | Authenticates and starts a session | email, password | 200 + user profile; sets session cookie | 401 invalid credentials; 429 rate-limited |
| POST /auth/logout | Session | Revokes the current session | — | 204 | 401 no active session |
| GET /auth/me | Session | Returns the current user | — | 200 + user profile | 401 |

### 20.2 Users
| Endpoint | Auth | Description | Key Request Fields | Success | Notable Errors |
|---|---|---|---|---|---|
| GET /users/me | Session | Returns the full profile | — | 200 + profile | 401 |
| PATCH /users/me | Session | Updates name and/or avatarUrl | name?, avatarUrl? | 200 + updated profile | 400; 401 |

### 20.3 Snippets
| Endpoint | Auth | Description | Key Request Fields | Success | Notable Errors |
|---|---|---|---|---|---|
| GET /snippets | Session | Paginated, filterable, sortable list of the caller's own snippets | query: page, pageSize, search, language, tags, visibility, favoritesOnly, sort | 200 + items and pagination meta | 401 |
| GET /snippets/:id | Session | Single snippet, owner only | — | 200 + snippet | 401; 403; 404 |
| POST /snippets | Session | Creates a snippet owned by the caller | title, description?, code, language, tags?, visibility? | 201 + snippet | 400; 401 |
| PATCH /snippets/:id | Session | Partial update, owner only | any subset of create fields | 200 + updated snippet | 400; 401; 403; 404 |
| DELETE /snippets/:id | Session | Deletes a snippet, owner only | — | 204 | 401; 403; 404 |

### 20.4 Tags
| Endpoint | Auth | Description | Key Request Fields | Success | Notable Errors |
|---|---|---|---|---|---|
| GET /tags | Session | Tag dictionary for autocomplete | query: search? | 200 + list | 401 |
| POST /tags | Session | Creates a tag, or returns the existing match (case-insensitive) | name | 201 or 200 + tag | 400 |
| DELETE /tags/:id | Session | Detaches from the caller's snippets; garbage-collects the shared row once unreferenced (Section 7) | — | 204 | 401; 404 |

### 20.5 Public
| Endpoint | Auth | Description | Success | Notable Errors |
|---|---|---|---|---|
| GET /public/snippets/:slug | None | Read-only snippet view; resolves only currently-PUBLIC snippets | 200 + snippet (owner name only, no private fields) | 404 unknown or private slug |

## 21. Backend Modules
| Module | Responsibilities |
|---|---|
| **Auth** | Registration/login/logout controllers, the session guard, the password-hashing service, the session repository, rate-limiting on auth endpoints |
| **Users** | Profile retrieval and update |
| **Snippets** | CRUD controllers/services, the ownership guard, DTO validation, share-slug generation |
| **Tags** | Tag creation/lookup, autocomplete queries, orphaned-tag garbage collection |
| **Search** | Query-building for combined text search, filters, sorting, and pagination against Snippets |
| **Sharing** | The public, unauthenticated controller that resolves a slug to a snippet |
| **Common** | Shared DTOs, exception filters, response-shaping interceptors, guards/decorators (e.g., a CurrentUser decorator), the Prisma service provider |

## 22. Routes
| Route | Access | Notes |
|---|---|---|
| / | Public | Landing |
| /login | Public | Redirects to /dashboard if already authenticated |
| /register | Public | Redirects to /dashboard if already authenticated |
| /s/[slug] | Public | Renders only if the snippet is currently PUBLIC |
| /dashboard | Private | Middleware redirects to /login, preserving the intended destination |
| /snippets | Private | |
| /snippets/new | Private | |
| /snippets/[id] | Private | Owner-only; 403/redirect otherwise |
| /snippets/[id]/edit | Private | Owner-only |
| /profile | Private | |
| /settings | Private | |

## 23. Validation & Error Handling Strategy
Every API error response follows one consistent shape: an HTTP status code, a short machine-readable error code, a human-readable message, and — for validation failures — a list of field-level issues. The frontend uses this consistently: field-level validation errors render inline next to the relevant input, while system-level errors (network failure, 500s, rate limiting) surface as a toast notification. Error copy follows the design system's interface voice: it states what happened and, where possible, what to do next, without hedging or apologizing (per `DESIGN.md`'s content principles).

Empty states are treated the same way — a brand-new Snippets List and a filtered-to-zero-results Snippets List use different copy, because they mean different things to the user (one is "start building your library," the other is "try different filters").

## 24. Security Considerations
Consolidated from Section 16.2 and Section 18 for reference:
- Argon2id password hashing; no plaintext password ever logged.
- httpOnly, Secure, SameSite=Lax session cookies; opaque session id only.
- Session invalidated server-side on logout — not just a client-side cookie clear.
- CSRF defense via SameSite cookie behavior plus a custom header check on mutating requests.
- Ownership re-verified server-side on every snippet mutation.
- Rate limiting on login/register.
- DTO validation on every mutating endpoint.
- No user-supplied field is ever rendered as raw HTML.
- HTTPS/HSTS enforced in production.

## 25. Testing & QA Strategy
- **Unit tests** on backend services with real business logic — password hashing, ownership checks, slug generation, tag de-duplication.
- **Integration tests** per backend module against a test database, covering the success and error paths listed in Section 20.
- **End-to-end tests** for the critical user flows in Section 14: register → create snippet → search/filter → favorite → share → log out → public link still works.
- **Manual QA pass** before each milestone against a fixed checklist: responsive breakpoints, dark-mode contrast, keyboard-only navigation, and empty/loading/error states on every page in Section 10.

## 26. Product Success Metrics
Distinct from the in-app Dashboard (Section 11), these are metrics for evaluating the product itself:
- **Activation:** percentage of new accounts that create at least one snippet within 24 hours of signup.
- **Engagement:** average snippets created per active user; search/filter usage rate.
- **Sharing adoption:** percentage of snippets ever toggled to Public.
- **Retention:** return usage at 7 and 30 days.
- **Performance:** Lighthouse performance score on the Snippets List and Dashboard pages, tracked against the targets in Section 16.1.

## 27. Development Roadmap

### Phase 1 — Foundation
- Project setup (monorepo/workspace structure, environment config, CI baseline).
- Database schema and Prisma migrations (Section 19).
- Session-based authentication end-to-end (Section 18): register, login, logout, `/auth/me`, guards.
- Snippet CRUD, owner-scoped.
- Tags: creation, de-duplication, assignment.
- Search and filters.

### Phase 2 — Product Completeness
- Dashboard (Section 11).
- Public sharing route and share-slug generation.
- Favorites.
- Pagination on the Snippets List.
- UI polish pass against `DESIGN.md`: dark-mode contrast check, responsive breakpoints, focus states, empty/loading/error states across every page.

### Phase 3 — Beyond MVP (not specified in this document)
- Autosave, Collections, Version history, Analytics — see Section 13.2. Scoping and specification for these happens in a future revision of this PRD, not here.

## 28. Success Criteria
- Session-based authentication working end-to-end, including expiry and logout invalidation.
- Complete CRUD, correctly owner-scoped in every case.
- Search and filters returning correct, fast results at the performance targets in Section 16.1.
- Public sharing working for anonymous visitors, with private-again snippets correctly inaccessible.
- Responsive UI verified down to 360px, matching the `DESIGN.md` grid.
- Deployed and reachable at a public URL (Section 8, Deployment).
- Architecture that reads cleanly to another engineer — module boundaries, consistent validation, no dead ends — suitable for a portfolio review.

## 29. Risks & Mitigations
| Risk | Mitigation |
|---|---|
| Scope creep — Future features (Section 13.2) pulled forward into the MVP | This PRD explicitly scopes them out; any addition requires a deliberate revision of this document, not an in-flight decision |
| Deployment complexity across three separate services (Vercel/Render/Neon) | Environment configuration documented per Section 16.6; deploy each service independently and verify with a smoke test before wiring them together |
| UI inconsistency against `DESIGN.md` | The token-based approach in Section 9 makes deviations easy to spot in review — no hardcoded colors/spacing outside the token set |
| Monaco Editor's bundle size affecting load performance | Lazy-loaded/code-split per Section 16.1, only on the routes that need it |
| Session-table write volume at scale | Identified now as a Postgres-backed store (Section 16.7); a move to Redis is the planned next step if traffic grows, not an emergency rewrite |
| Tag data quality (near-duplicate names) | Case-insensitive matching on creation (Section 15.5) prevents most duplication at the source |
| Solo-developer time constraints | The phased roadmap (Section 27) is ordered so that each phase alone leaves a demoable product |

## 30. Glossary
| Term | Meaning |
|---|---|
| **Snippet** | A single stored piece of code with title, description, language, tags, and visibility |
| **Visibility** | Private (owner-only) or Public (accessible via share link) |
| **Share Slug** | The short random identifier in a snippet's public URL (`/s/[slug]`) |
| **Session** | A server-side record proving a user is logged in, referenced by an opaque id in an httpOnly cookie |
| **DTO** | Data Transfer Object — the validated shape of a request body, checked before it reaches business logic |
| **Guard** | NestJS mechanism that runs before a request reaches its handler, used here for session and ownership checks |
| **MVP** | Minimum Viable Product — the feature set in Section 13.1 |
| **NFR** | Non-Functional Requirement — the quality bar in Section 16, as opposed to a specific feature |

## 31. Final Vision
Snippet Manager should feel like a premium developer tool rather than a tutorial project. Every decision in this document — server-side sessions over a simpler-but-shallower JWT, ownership checks re-verified on every mutation, a design system with its own resolved token architecture rather than default component colors — is in service of that: excellent UX, clean architecture, maintainable code, and a polished interface suitable for showcasing full-stack engineering skills.
