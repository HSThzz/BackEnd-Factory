# create-backend-api

A CLI tool to generate Node.js backend projects with TypeScript, Express/Fastify, and TypeORM/Prisma.

## Project Structure

This project is organized into the following directories:

### `/bin`
Contains the CLI entry point executable that users run from the command line.

### `/src`
Main source code directory containing all TypeScript modules.

#### `/src/cli`
CLI-related modules including argument parsing and execution flow.

#### `/src/commands`
Command implementations for different CLI operations (create project, generate resource, etc.).

#### `/src/prompts`
Interactive prompt modules for gathering user input and configuration.

#### `/src/generators`
Code generation modules that create project files and structures based on templates.

#### `/src/templates`
Template files used for generating different project configurations.

#### `/src/utils`
Utility functions for file operations, logging, path manipulation, etc.

#### `/src/constants`
Constants and metadata definitions for supported frameworks, ORMs, and databases.

### `/tests`
Test files and test utilities.

### `/docs`
Documentation files.

### `/.github/workflows`
GitHub Actions workflow definitions for CI/CD.

## Development

### Prerequisites
- Node.js >= 14.0.0
- npm or yarn

### Scripts
- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Watch mode for development
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## License

MIT
