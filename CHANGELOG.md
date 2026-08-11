# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-03-23

### Changed

- Generated projects are now a **lean scaffold**: `src/index.ts`, DB config, tooling, and optional Docker
- Removed DDD boilerplate from templates (`BaseEntity`, `BaseRepository`, `BaseController`, empty layer folders)
- Health check moved to `GET /health` (inline in the entry point)
- Prisma schema no longer includes a sample `User` model
- `Dockerfile` is correctly skipped when Docker is declined
- CLI requires Node.js `>=22.12.0` and ships as **ESM** (`"type": "module"`)
- Default Docker Node image bumped from `18` to `22`

### Dependencies

- CLI: `chalk` 6, `commander` 15, `inquirer` 14, `ora` 9.4, `handlebars` 4.7.9 (security), `fs-extra` 11.4
- Templates: Express 5 / Fastify 5, TypeORM 1.x, Prisma 6.x, `tsx` instead of `ts-node-dev`
- Dev tooling and GitHub Actions (`checkout`/`setup-node` v4) updated

### Docs

- Updated README and docs to describe the minimal scaffold instead of a full DDD tree

## [0.1.2] - 2024-12-19

### Added

- Template validation and filtering in stack selection prompts
- Shows available templates before selection
- Only displays valid combinations (framework + ORM + database)
- Added `templateUtils` module for template management

### Fixed

- Fixed build script compatibility on Windows (replaced `rm -rf` with `rimraf`)
- Cross-platform support for `clean` and `prebuild` scripts in generated projects

## [0.1.1] - 2024-12-19

### Fixed

- Fixed template path resolution when package is installed via npm
- Improved error messages when templates are not found
- Added robust package root detection for better compatibility

## [0.1.0] - 2024-03-10

### Added

- Initial release
- CLI command `create` to generate backend projects
- Support for Express and Fastify frameworks
- Support for TypeORM and Prisma ORMs
- Support for PostgreSQL database
- DDD (Domain-Driven Design) architecture in generated projects
- Docker and Docker Compose support
- Pre-configured ESLint and Prettier
- Auto-formatting configuration for VS Code/Cursor
- Interactive prompts for project configuration
- Template system with Handlebars
- Comprehensive documentation

### Features

- Generate projects with Express + TypeORM + PostgreSQL
- Generate projects with Express + Prisma + PostgreSQL
- Generate projects with Fastify + TypeORM + PostgreSQL
- Optional Docker configuration
- Health check endpoints
- Base classes (BaseEntity, BaseController, BaseRepository)
- Error handling middleware
- TypeScript support

[0.1.0]: https://github.com/HSThzz/create-backend-api/releases/tag/v0.1.0
