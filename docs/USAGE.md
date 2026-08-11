# Usage Guide

## Basic Usage

### Create a New Project

The simplest way to create a new backend project:

```bash
create-backend-api create
```

Or use the short alias:

```bash
create-backend-api c
```

### Interactive Prompts

The CLI will guide you through the following prompts:

#### 1. Project Configuration

- **Project name**: Lowercase, alphanumeric with hyphens (e.g., `my-api`)
- **Project description**: Brief description of your project
- **Project version**: Semantic version (default: `1.0.0`)
- **Target directory**: Where to create the project (default: `./<project-name>`)
- **Node.js version**: Node.js version for Docker (default: `18`)
- **Include Docker**: Whether to include Docker configuration (default: `Yes`)

#### 2. Technology Stack Selection

- **Framework**: Choose between Express or Fastify
- **ORM**: Choose between TypeORM or Prisma
- **Database**: Choose between PostgreSQL, MySQL, or SQLite

### Example Session

```bash
$ create-backend-api create

ℹ Welcome to create-backend-api!
ℹ Let's create your new backend project.

? Project name: blog-api
? Project description: REST API for blog management
? Project version: 1.0.0
? Target directory: ./blog-api
? Node.js version (optional): 18
? Include Docker configuration? Yes
ℹ
? Select a framework: Express
? Select an ORM: TypeORM
? Select a database: PostgreSQL
ℹ

✓ Project generated successfully!
✓ Project created at: /path/to/blog-api

ℹ Next steps:
  cd blog-api
  npm install
  npm run dev
```

## Commands

### Create Command

```bash
create-backend-api create [options]
create-backend-api c [options]
```

Creates a new backend project with the selected technology stack.

**Options:**

- `--help` - Show help message

### Generate Command

```bash
create-backend-api generate [options]
create-backend-api g [options]
```

> **Note**: Resource generation is currently under development and will be available in a future version.

## After Project Creation

Once your project is created, follow these steps:

### 1. Navigate to Project Directory

```bash
cd <project-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your database credentials and other configuration.

### 4. Set Up Database

#### For TypeORM Projects:

The database will be automatically synchronized in development mode. For production, use migrations:

```bash
npm run typeorm migration:run
```

#### For Prisma Projects:

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate
```

### 5. Start Development Server

```bash
npm run dev
```

Your API will be available at `http://localhost:3000`

## Using Docker

If you included Docker configuration:

### Start with Docker Compose

```bash
docker-compose up
```

This will start both the application and database containers.

### Development Mode

```bash
docker-compose up -d
```

Runs in detached mode (background).

### Stop Services

```bash
docker-compose down
```

### Rebuild After Changes

```bash
docker-compose up --build
```

## Project Structure Overview

Generated projects are intentionally lean:

- **`src/index.ts`**: HTTP bootstrap, health route, DB init
- **`src/infrastructure/config/`**: TypeORM or Prisma connection
- **Docker files**: Only when selected
- **Tooling**: TypeScript, ESLint, Prettier

See [Architecture Guide](./ARCHITECTURE.md) for details on growing the project.

## Next Steps

1. **Review Generated Code**: Check `src/index.ts` and the DB config
2. **Add Models**: TypeORM entities or Prisma models in `prisma/schema.prisma`
3. **Add Routes**: Extend `index.ts` or extract routers as needed
4. **Choose Your Structure**: Flat modules, feature folders, or layered architecture — your call

## Tips

- Use the health check endpoint (`/health`) to verify your API is running
- All projects include ESLint and Prettier - format your code with `npm run format`
- VS Code/Cursor users get auto-formatting on save (if Prettier extension is installed)
- Check the generated `README.md` in your project for stack-specific instructions
