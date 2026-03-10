# Contributing to create-backend-api

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Environment details** (Node.js version, OS, etc.)
- **Screenshots or error messages** if applicable

### Suggesting Features

We welcome feature suggestions! Please open an issue with:

- **Clear description** of the feature
- **Use case** explaining why it would be useful
- **Possible implementation** approach (if you have ideas)

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Follow code style**:
   - Run `npm run format` before committing
   - Run `npm run lint` to check for issues
   - Ensure tests pass: `npm test`
5. **Commit your changes**:
   ```bash
   git commit -m "feat: add your feature description"
   ```
6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request**

## Development Setup

### Prerequisites

- Node.js >= 14.0.0
- npm >= 6.0.0

### Setup

```bash
# Clone your fork
git clone https://github.com/your-username/create-backend-api.git
cd create-backend-api

# Install dependencies
npm install

# Build the project
npm run build
```

### Development Workflow

```bash
# Watch mode for development
npm run dev

# Run CLI in development
npm run dev:cli create

# Run linter
npm run lint

# Format code
npm run format

# Run tests
npm test
```

## Code Style

- Follow existing code style
- Use TypeScript for all new code
- Add JSDoc comments for public functions
- Keep functions small and focused
- Write descriptive variable and function names

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:

```
feat: add support for MySQL database
fix: correct template path resolution
docs: update installation guide
```

## Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Add tests for bug fixes

## Adding New Templates

To add a new template:

1. Create directory: `src/templates/<framework>-<orm>-<database>/`
2. Follow existing template structure
3. Use Handlebars (`.hbs`) for files with variables
4. Update documentation
5. Test the template generation

## Questions?

If you have questions, feel free to:

- Open an issue for discussion
- Check existing issues and discussions

Thank you for contributing! 🎉
