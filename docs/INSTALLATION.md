# Installation Guide

## Prerequisites

Before installing `create-backend-api`, ensure you have:

- **Node.js** >= 14.0.0
- **npm** >= 6.0.0 or **yarn** >= 1.0.0

## Installation Methods

### Global Installation (Recommended)

Install the CLI globally to use it from anywhere:

```bash
npm install -g create-backend-api
```

After installation, you can use the CLI from any directory:

```bash
create-backend-api create
```

### Using npx (No Installation Required)

You can use the CLI without installing it globally:

```bash
npx create-backend-api create
```

This will download and run the latest version each time.

### Local Installation

For development or if you prefer local installation:

```bash
npm install create-backend-api
```

Then use it with:

```bash
npx create-backend-api create
```

Or add it to your `package.json` scripts:

```json
{
  "scripts": {
    "create-api": "create-backend-api create"
  }
}
```

## Verify Installation

After installation, verify it's working:

```bash
create-backend-api --version
```

You should see the version number (e.g., `0.1.0`).

## Updating

To update to the latest version:

```bash
npm update -g create-backend-api
```

## Uninstallation

To uninstall the CLI:

```bash
npm uninstall -g create-backend-api
```

## Troubleshooting

### Command Not Found

If you get a "command not found" error:

1. **Check Node.js installation:**
   ```bash
   node --version
   npm --version
   ```

2. **Verify npm global bin path:**
   ```bash
   npm config get prefix
   ```

3. **Add npm global bin to PATH** (if needed):
   ```bash
   export PATH=$(npm config get prefix)/bin:$PATH
   ```

### Permission Errors

If you encounter permission errors on Linux/Mac:

```bash
sudo npm install -g create-backend-api
```

Or configure npm to use a different directory:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```
