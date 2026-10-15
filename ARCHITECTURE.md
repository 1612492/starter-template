# ARCHITECTURE.md

## Overview

Minimal SSR React starter: TanStack Start app served by Nitro, built with Vite, routed with TanStack Router, fetching with TanStack Query, styled with Tailwind CSS v4 + shadcn/ui (base-nova).

## Runtime layers

| Layer     | Tool / file                                                                      | Role                                                                  |
| --------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Dev/build | Vite (`vite.config.ts`) + Nitro plugin                                           | Dev server `:3000`; `vite build` emits to `.output/`                  |
| Server    | Nitro 3 beta (`pnpm start` → `.output/server/index.mjs`)                         | SSR + static serving                                                  |
| App shell | `src/routes/__root.tsx`                                                          | `<html>` document, head links, `TooltipProvider`, `Toaster`, devtools |
| Router    | TanStack Router file-based (`src/routes/`, `routeTree.gen.ts`, `src/router.tsx`) | Type-safe routes, preload `intent`, scroll restoration                |
| Data      | TanStack Query + `setupRouterSsrQueryIntegration`                                | `QueryClient` in router context; SSR-dehydrated to client             |
| UI        | shadcn/ui (`src/components/ui/*`), Base UI, Lucide                               | Accessible primitives; `next-themes` + `sonner` for toasts            |
| Styling   | Tailwind v4 (`src/styles.css`, `@tailwindcss/vite`)                              | CSS-first tokens, `dark` variant, Inter Variable font                 |
| Quality   | oxlint, oxfmt, `tsc --noEmit`                                                    | Lint/format/typecheck                                                 |
| E2E       | Playwright (`playwright.config.ts`, `e2e/`)                                      | Chromium/Firefox/WebKit vs `http://localhost:3000`                    |

## Request lifecycle

1. Nitro receives request → TanStack Start SSR renders matching route (`__root.tsx` → route component, e.g. `index.tsx`).
2. Route `loader`s / query prefetches run server-side; Query cache dehydrates into HTML.
3. Client hydrates via `getRouter()` (`src/router.tsx:6`); `setupRouterSsrQueryIntegration` reuses SSR cache, then Router takes over navigation with `intent` preloading.
4. Static assets from `public/` (favicon) and bundled CSS served alongside.

## Directory map

- `src/routes/` — routes only; add `about.tsx` → `/about` automatically.
- `src/router.tsx`, `src/routeTree.gen.ts` — router wiring (generated tree, do not edit).
- `src/components/ui/` — generated shadcn components (`components.json` aliases: `@/components`, `@/lib/utils`, `@/hooks`).
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge).
- `src/hooks/use-mobile.ts` — client breakpoint hook.
- `e2e/example.spec.ts` — smoke spec for `/` hero + `#stack` anchor flow.

## Key decisions

- SSR by default (Start), not SPA: keep components SSR-safe; isolate browser APIs.
- Single `QueryClient` per router instance in context — enables request-scoped caching on server, shared cache on client.
- Tailwind v4 CSS-first config (no `tailwind.config.js`); theme tokens live in `styles.css`.
- Playwright `webServer` reuses local dev server, builds+starts in CI — no hardcoded ports beyond `vite.config.ts:10` and `playwright.config.ts` `baseURL`.
