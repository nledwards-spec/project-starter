# project-starter

A reusable Next.js starter template. Clone this repo to bootstrap any new project with a complete, typed foundation: shadcn/ui components, a CSS custom property colour system, Railway-ready deployment, smoke tests, and CI.

## Stack

- **Next.js** (App Router, standalone output for Docker)
- **TypeScript** strict mode
- **Tailwind CSS v4** (CSS-based config via `@theme inline` in `app/globals.css`)
- **shadcn/ui** (Radix, Nova preset — component files in `components/ui/`)
- **Inter** (body font) + **JetBrains Mono** (code font) via `next/font/google`

> **Note:** This repo uses Tailwind CSS v4, which replaces `tailwind.config.ts` with CSS-based configuration in `app/globals.css`. All theme tokens are defined there.

---

## Cloning this template for a new project

```bash
git clone https://github.com/nledwards-spec/project-starter.git my-new-project
cd my-new-project
git remote set-url origin https://github.com/YOUR_ORG/my-new-project.git
npm install
```

Then update `app/layout.tsx` metadata, `package.json` name, and re-theme as needed.

---

## Colour system

Tokens are defined as CSS custom properties in `app/globals.css` under `:root`. They are also mapped to Tailwind utilities via the `@theme inline` block (e.g. `bg-bg`, `text-accent`, `bg-surface`).

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#f8f9fb` | Page background |
| `--surface` | `#ffffff` | Card / panel background |
| `--border` | `#e2e6ed` | Dividers, input borders |
| `--text-primary` | `#1a1d23` | Headings, primary text |
| `--text-secondary` | `#6b7280` | Body text, labels |
| `--text-tertiary` | `#9ca3af` | Muted / placeholder text |
| `--accent` | `#4f6ef7` | Primary action colour (blue) |
| `--accent-light` | `#eef1fe` | Accent hover backgrounds |
| `--success` | `#10b981` | Success states |
| `--warning` | `#f59e0b` | Warning states |
| `--danger` | `#ef4444` | Error / danger states |
| `--sidebar-bg` | `#1a1d23` | Sidebar background |
| `--sidebar-text` | `#9ca3af` | Sidebar nav text |
| `--sidebar-active` | `#ffffff` | Active sidebar item text |
| `--radius` | `8px` | Default border radius |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Card elevation |

### Re-theming

To change the colour scheme, edit only the `:root` block in `app/globals.css`. All components reference the tokens, so changes propagate automatically.

---

## Available shadcn/ui components

Pre-installed in `components/ui/`:

`avatar` · `badge` · `button` · `card` · `dropdown-menu` · `input` · `select` · `separator` · `sheet` · `table` · `tabs` · `textarea` · `toggle` · `toggle-group` · `tooltip`

Install additional components with:

```bash
npx shadcn@latest add <component-name>
```

---

## Running locally

```bash
npm install
npm run dev          # http://localhost:3000
```

---

## Running tests

The smoke tests require a running server:

```bash
npm run build && npm run start &   # start server in background
pip install requests pytest
pytest tests/smoke_test.py -v
```

Or override the base URL for a deployed instance:

```bash
BASE_URL=https://my-app.railway.app pytest tests/smoke_test.py -v
```

---

## Type checking and linting

```bash
npx tsc --noEmit     # type check
npm run lint         # ESLint
```

---

## Deploying to Railway

1. Create a new Railway project and connect this repo
2. Railway will detect the `railway.toml` and build via `Dockerfile`
3. The health check at `/api/health` is configured in `railway.toml`

The `next.config.ts` sets `output: "standalone"` so the Docker image only includes what's needed to run the server.

---

## Layout patterns

The landing page (`/`) lists six pattern routes (implemented in Sprint 1):

- `/patterns/dashboard` — Stats cards, charts, activity feed
- `/patterns/data-table` — Sortable, filterable table with pagination
- `/patterns/detail-view` — Record detail with sidebar metadata
- `/patterns/settings` — Tabbed settings with form sections
- `/patterns/card-grid` — Responsive grid of content cards
- `/patterns/split-pane` — List + detail split layout
