# create-backend-api

> A CLI tool to generate lean Node.js backend scaffolds with TypeScript — entry point, database infra, and optional Docker. You own the architecture from there.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.12.0-brightgreen)](https://nodejs.org/)

## ✨ Features

- 🚀 **Quick Setup** - Generate a minimal backend project in seconds
- 🧹 **Lean Scaffold** - Entry point + DB config only; no unused boilerplate
- 🎯 **Multiple Stacks** - Support for Express/Fastify + TypeORM/Prisma + PostgreSQL
- 🐳 **Docker Ready** - Optional Docker and Docker Compose configuration
- 📦 **Tooling Ready** - Pre-configured with ESLint, Prettier, and TypeScript
- 🔧 **Type Safe** - Full TypeScript support with proper types

## 📋 Supported Stacks

| Framework | ORM     | Database   | Status |
| --------- | ------- | ---------- | ------ |
| Express   | TypeORM | PostgreSQL | ✅     |
| Express   | Prisma  | PostgreSQL | ✅     |
| Fastify   | TypeORM | PostgreSQL | ✅     |

## 🚀 Quick Start

### The Easiest Way (No Installation Required)

```bash
npx create-backend-api create
```

That's it! The CLI will:

- Download automatically (if needed)
- Guide you through project setup
- Generate your backend project
- Clean up after itself

### Alternative: Install Globally

```bash
# Install once
npm install -g create-backend-api

# Use from anywhere
create-backend-api create
```

### What Happens Next?

The CLI will interactively ask you:

1. **Project name** - e.g., `my-api`
2. **Description** - Brief project description
3. **Version** - Project version (default: `1.0.0`)
4. **Target directory** - Where to create the project
5. **Node.js version** - For Docker (default: `22`)
6. **Docker?** - Include Docker configuration (Yes/No)
7. **Framework** - Express or Fastify
8. **ORM** - TypeORM or Prisma
9. **Database** - PostgreSQL, MySQL, or SQLite

Then your project is ready! 🎉

### Example

```bash
$ create-backend-api create

ℹ Welcome to create-backend-api!
ℹ Let's create your new backend project.

✔ Project name: my-api
✔ Project description: A REST API for my application
✔ Project version: 1.0.0
✔ Target directory: ./my-api
✔ Node.js version (optional): 22
✔ Include Docker configuration? Yes
✔ Select a framework: Express
✔ Select an ORM: TypeORM
✔ Select a database: PostgreSQL

✓ Project generated successfully!
✓ Project created at: /path/to/my-api

ℹ Next steps:
  cd my-api
  npm install
  npm run dev
```

## 📁 Generated Project Structure

Projects get a **minimal scaffold** — bootstrap, DB infra, and optional Docker:

```
my-api/
├── src/
│   ├── index.ts             # App bootstrap + GET /health
│   └── infrastructure/
│       └── config/
│           ├── database.ts  # TypeORM DataSource or PrismaClient
│           └── data-source.ts  # TypeORM CLI (TypeORM stacks)
│
├── prisma/schema.prisma     # Prisma stacks only (no sample models)
├── docker-compose.yml       # Optional
├── Dockerfile               # Optional
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 What's Included

Every generated project comes with:

- ✅ **TypeScript** - Full type safety
- ✅ **ESLint + Prettier** - Code quality and formatting
- ✅ **Health Check** - `GET /health`
- ✅ **Database Setup** - Pre-configured TypeORM or Prisma connection
- ✅ **Docker Support** - Optional Docker configuration
- ✅ **No unused boilerplate** - Add your own architecture as you grow

## 📚 Documentation

- [Getting Started](./docs/GETTING_STARTED.md) - Quick start guide
- [Installation Guide](./docs/INSTALLATION.md) - Detailed installation instructions
- [Usage Guide](./docs/USAGE.md) - Complete usage documentation
- [Architecture](./docs/ARCHITECTURE.md) - What the scaffold includes and how to grow it
- [Examples](./docs/EXAMPLES.md) - Practical examples
- [Troubleshooting](./docs/TROUBLESHOOTING.md) - Common issues and solutions

## 🛠️ Development

### Prerequisites

- Node.js >= 22.12.0
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/HSThzz/create-backend-api.git
cd create-backend-api

# Install dependencies
npm install

# Build the project
npm run build
```

### Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Watch mode for development
- `npm run dev:cli` - Run CLI in development mode
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Commander.js](https://github.com/tj/commander.js)
- Templates powered by [Handlebars](https://handlebarsjs.com/)
- Interactive prompts with [Inquirer](https://github.com/SBoudrias/Inquirer.js)
