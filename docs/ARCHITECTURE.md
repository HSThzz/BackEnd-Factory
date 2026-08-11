# Architecture Guide

## Overview

`create-backend-api` generates a **minimal scaffold**: an HTTP entry point, database infrastructure, tooling (TypeScript, ESLint, Prettier), and optional Docker. It does **not** ship a full domain layer or base classes — you choose how to organize the rest of the app.

## What the CLI Generates

```
src/
├── index.ts                 # Bootstrap, health route, DB init, shutdown
└── infrastructure/
    └── config/
        ├── database.ts      # TypeORM DataSource or PrismaClient
        └── data-source.ts   # TypeORM CLI entry (TypeORM stacks only)

prisma/schema.prisma         # Prisma stacks only (no sample models)
```

Plus project root files: `package.json`, `tsconfig.json`, `.env.example`, lint/format configs, `README.md`, and Docker files when selected.

## Bootstrap Responsibilities

The generated `src/index.ts` typically:

1. Creates the Express or Fastify app
2. Registers a simple `GET /health` endpoint
3. Initializes the database connection
4. Listens on `PORT` and handles graceful shutdown

Database wiring lives under `src/infrastructure/config/`.

## Growing the Project

You own the architecture after generation. Common options:

- **Flat modules** — add routes/services next to `index.ts`
- **Feature folders** — group by domain (`users/`, `orders/`)
- **Layered / DDD** — introduce `domain/`, `application/`, `presentation/` yourself when the project needs it

### TypeORM

1. Add entities and register them in `AppDataSource` (`entities` / `migrations` arrays start empty)
2. Wire routes in `index.ts` or extract routers as you grow
3. Use the existing migration scripts in `package.json` when ready

### Prisma

1. Add models to `prisma/schema.prisma`
2. Run `npm run prisma:migrate` and `npm run prisma:generate`
3. Use the exported `prisma` client from `src/infrastructure/config/database.ts`

## Docker

When Docker is included:

- `Dockerfile` — app image
- `docker-compose.yml` — app + PostgreSQL
- `.dockerignore`

When Docker is declined, those files are not generated.

## Resources

- [TypeORM Documentation](https://typeorm.io/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Express Documentation](https://expressjs.com/)
- [Fastify Documentation](https://fastify.dev/)
- [Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html) (optional reading if you adopt DDD later)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
