# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
