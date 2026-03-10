# create-backend-api

> A powerful CLI tool to generate production-ready Node.js backend projects with TypeScript, following DDD (Domain-Driven Design) and Clean Architecture principles.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)

## ✨ Features

- 🚀 **Quick Setup** - Generate a complete backend project in seconds
- 🏗️ **DDD Architecture** - Projects follow Domain-Driven Design and Clean Architecture
- 🎯 **Multiple Stacks** - Support for Express/Fastify + TypeORM/Prisma + PostgreSQL/MySQL/SQLite
- 🐳 **Docker Ready** - Optional Docker and Docker Compose configuration
- 📦 **Production Ready** - Pre-configured with ESLint, Prettier, and TypeScript
- 🔧 **Type Safe** - Full TypeScript support with proper types

## 📋 Supported Stacks

| Framework | ORM | Database | Status |
|-----------|-----|----------|--------|
| Express | TypeORM | PostgreSQL | ✅ |
| Express | Prisma | PostgreSQL | ✅ |
| Fastify | TypeORM | PostgreSQL | ✅ |

## 🚀 Quick Start

### Installation

```bash
npm install -g create-backend-api
```

Or use with `npx`:

```bash
npx create-backend-api create
```

### Create a New Project

```bash
create-backend-api create
```

The CLI will guide you through:
1. Project configuration (name, description, version)
2. Technology stack selection (framework, ORM, database)
3. Docker configuration (optional)

### Example

```bash
$ create-backend-api create

ℹ Welcome to create-backend-api!
ℹ Let's create your new backend project.

✔ Project name: my-api
✔ Project description: A REST API for my application
✔ Project version: 1.0.0
✔ Target directory: ./my-api
✔ Node.js version (optional): 18
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

Projects are generated following **DDD (Domain-Driven Design)** architecture:

```
my-api/
├── src/
│   ├── domain/              # Domain Layer (Business Logic)
│   │   ├── entities/         # Domain entities
│   │   └── repositories/     # Repository interfaces
│   │
│   ├── application/         # Application Layer (Use Cases)
│   │   ├── use-cases/       # Business use cases
│   │   ├── services/         # Application services
│   │   └── dtos/            # Data Transfer Objects
│   │
│   ├── infrastructure/      # Infrastructure Layer
│   │   ├── database/
│   │   │   ├── repositories/  # Repository implementations
│   │   │   └── migrations/    # Database migrations
│   │   └── config/          # Configuration files
│   │
│   └── presentation/        # Presentation Layer (API)
│       ├── controllers/     # Route controllers
│       ├── routes/          # Route definitions
│       └── middleware/      # Express/Fastify middleware
│
├── docker-compose.yml       # Docker Compose configuration
├── Dockerfile               # Docker image definition
├── .env.example             # Environment variables template
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## 🎯 What's Included

Every generated project comes with:

- ✅ **TypeScript** - Full type safety
- ✅ **ESLint + Prettier** - Code quality and formatting
- ✅ **Auto-formatting** - VS Code/Cursor configuration
- ✅ **Health Check** - Built-in health endpoint
- ✅ **Error Handling** - Centralized error handling
- ✅ **Base Classes** - BaseEntity, BaseController, BaseRepository
- ✅ **Docker Support** - Optional Docker configuration
- ✅ **Database Setup** - Pre-configured database connection

## 📚 Documentation

- [Installation Guide](./docs/INSTALLATION.md) - Detailed installation instructions
- [Usage Guide](./docs/USAGE.md) - Complete usage documentation
- [Architecture](./docs/ARCHITECTURE.md) - DDD architecture explanation
- [Troubleshooting](./docs/TROUBLESHOOTING.md) - Common issues and solutions

## 🛠️ Development

### Prerequisites

- Node.js >= 14.0.0
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <repository-url>
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
