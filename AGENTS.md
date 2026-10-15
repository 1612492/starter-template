# AGENTS.md

Repo: TanStack Start (SSR) + React 19 + Vite + Nitro + Tailwind v4 + shadcn/ui.

## Commands

- `pnpm install` / `pnpm dev` (port 3000) / `pnpm build` / `pnpm start`
- `pnpm lint` / `pnpm lint:fix` (oxlint) / `pnpm format` / `pnpm format:check` (oxfmt)
- `pnpm typecheck` (`tsc --noEmit`)
- `pnpm test:e2e` / `pnpm test:e2e:ui` / `pnpm test:e2e:headed` / `pnpm test:e2e:report` (Playwright)
- First-time e2e setup: `pnpm dlx playwright@latest install --with-deps` (browsers only; package already added)

## Structure

- `src/routes/` — file-based routes (`__root.tsx` shell, `index.tsx` landing). Generated `src/routeTree.gen.ts` — never hand-edit.
- `src/router.tsx` — `getRouter()` wires `QueryClient` + `setupRouterSsrQueryIntegration`.
- `src/components/ui/` — shadcn primitives (base-nova style). `src/lib/utils.ts` — `cn()` helper. `src/hooks/` — client hooks.
- `src/styles.css` — Tailwind v4 tokens/theme. `vite.config.ts` — nitro + tailwind + tanstackStart + react plugins.
- `e2e/` — Playwright specs. `playwright.config.ts` — `baseURL http://localhost:3000`, auto-starts dev server (build+start on CI).

## Conventions

- Path alias: `@/*` → `src/*` (`tsconfig.json:9`). Keep imports sorted per `oxfmt.config.ts`.
- Routes: `createFileRoute`, colocate `loader` + query logic per route; share server state via root route context `queryClient`.
- Data: TanStack Query for server state; validate boundaries with `zod`. Follow skill guidance in `.agents/skills/` (router/query/start/integration best practices).
- UI: compose from `src/components/ui/*`, Lucide icons, `cn()` for classes. Dark-mode aware (`dark:` variants, CSS vars in `styles.css`).
- SSR-safe: no `window`/`document` at module scope; guard client-only code in effects or `ClientOnly`.
- Tests: web-first locators (`getByRole`, `getByText`), assert navigation/outcome not implementation. Keep specs in `e2e/*.spec.ts`; don't commit `test-results/`, `playwright-report/`, `blob-report/`.
- Docs: update `ARCHITECTURE.md` when adding routes, server functions, data flows, or build/deploy changes.
