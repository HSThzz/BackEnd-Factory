# Getting Started

This guide explains how to use `create-backend-api` to generate your backend projects.

## 📦 Installation

### Option 1: Using npx (Recommended - No Installation)

The easiest way to use the CLI without installing anything:

```bash
npx create-backend-api create
```

This downloads and runs the latest version automatically.

### Option 2: Global Installation

Install globally to use from anywhere:

```bash
npm install -g create-backend-api
```

Then use it:

```bash
create-backend-api create
```

### Option 3: Using from Source (Development)

If you want to use the latest development version:

```bash
# Clone the repository
git clone https://github.com/HSThzz/create-backend-api.git
cd create-backend-api

# Install dependencies
npm install

# Build the project
npm run build

# Link globally (optional)
npm link

# Now you can use it
create-backend-api create
```

Or use directly with npm scripts:

```bash
npm run dev:cli create
```

## 🚀 Creating Your First Project

### Step 1: Run the Command

```bash
# If installed globally
create-backend-api create

# Or with npx
npx create-backend-api create

# Or with alias
create-backend-api c
```

### Step 2: Follow the Prompts

The CLI will ask you:

1. **Project name** - e.g., `my-api`, `blog-backend`
2. **Project description** - Brief description
3. **Project version** - Default: `1.0.0`
4. **Target directory** - Where to create (default: `./<project-name>`)
5. **Node.js version** - For Docker (default: `18`)
6. **Include Docker?** - Yes/No (default: Yes)
7. **Framework** - Express or Fastify
8. **ORM** - TypeORM or Prisma
9. **Database** - PostgreSQL, MySQL, or SQLite

### Step 3: Project is Generated

After answering the prompts, your project will be generated with:

- ✅ Complete DDD architecture structure
- ✅ TypeScript configuration
- ✅ ESLint and Prettier setup
- ✅ Docker configuration (if selected)
- ✅ Base classes and utilities
- ✅ Health check endpoint
- ✅ Error handling

### Step 4: Start Development

```bash
# Navigate to your project
cd <project-name>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Start development server
npm run dev
```

## 📝 Example Session

```bash
$ npx create-backend-api create

ℹ Welcome to create-backend-api!
ℹ Let's create your new backend project.

? Project name: blog-api
? Project description: REST API for blog management system
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

## 🎯 Common Use Cases

### Quick Prototype

```bash
npx create-backend-api create
# Accept all defaults
# Express + TypeORM + PostgreSQL
```

### Production API

```bash
npx create-backend-api create
# Choose your preferred stack
# Include Docker for deployment
```

### Learning DDD

```bash
npx create-backend-api create
# Review the generated structure
# Study the architecture layers
```

## 🔧 Available Commands

### Create Command

```bash
create-backend-api create
create-backend-api c
```

Creates a new backend project.

### Generate Command (Coming Soon)

```bash
create-backend-api generate
create-backend-api g
```

Will generate resources (models, controllers, routes) in existing projects.

### Help

```bash
create-backend-api --help
create-backend-api -h
```

Shows available commands and options.

### Version

```bash
create-backend-api --version
create-backend-api -V
```

Shows the CLI version.

## 💡 Tips

1. **Use npx** - No need to install, always get the latest version
2. **Check the generated README** - Each project includes stack-specific instructions
3. **Use Docker** - Simplifies database setup and deployment
4. **Review the structure** - Understand the DDD architecture before coding
5. **Start simple** - Use defaults first, then customize

## ❓ Need Help?

- Check [Usage Guide](./USAGE.md) for detailed instructions
- See [Troubleshooting](./TROUBLESHOOTING.md) for common issues
- Review [Architecture Guide](./ARCHITECTURE.md) to understand the structure
