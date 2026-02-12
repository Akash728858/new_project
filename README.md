# KodNestCareers Monorepo (Scaffold)

This repository is a local-first, modular monolith for KodNestCareers, built as a pnpm workspace with apps, worker processes, and shared packages.

## Getting started (local dev - skeleton)

1. Install pnpm (v9 or later).
2. Install dependencies:
   - `pnpm install`
3. Start local infra (Postgres, Redis, Mailpit):
   - `pnpm run docker:up`
4. Run all dev processes (once apps are implemented):
   - `pnpm dev`

## Structure (high level)

- `apps/web` - Next.js web application (auth, dashboard, feature areas).
- `apps/worker` - Background jobs, queues, schedulers, connectors.
- `packages/db` - Database client, repositories, and Prisma schema.
- `packages/modules` - Domain/application/infrastructure modules per bounded context.
- `packages/ai-gateway` - AI model routing and providers.
- `packages/events` - Outbox and event publishing.
- `packages/shared` - Shared types, errors, logger, utils, validators.
- `packages/config` - Configuration helpers (env, feature flags, security).
- `infra` - Docker and local infra scripts.
- `docs` - PRDs, architecture notes, runbooks, and testing docs.

This scaffold intentionally contains minimal placeholder implementations and no business logic yet.
