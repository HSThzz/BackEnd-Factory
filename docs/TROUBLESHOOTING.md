# Troubleshooting Guide

## Common Issues and Solutions

### Installation Issues

#### Command Not Found

**Problem**: `create-backend-api` command is not recognized.

**Solutions**:

1. **Check if installed globally:**
   ```bash
   npm list -g create-backend-api
   ```

2. **Verify npm global bin path:**
   ```bash
   npm config get prefix
   ```

3. **Add to PATH** (Linux/Mac):
   ```bash
   export PATH=$(npm config get prefix)/bin:$PATH
   ```

4. **Reinstall globally:**
   ```bash
   npm install -g create-backend-api
   ```

#### Permission Errors

**Problem**: Permission denied when installing globally.

**Solutions**:

1. **Use sudo** (not recommended):
   ```bash
   sudo npm install -g create-backend-api
   ```

2. **Configure npm to use a different directory** (recommended):
   ```bash
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   export PATH=~/.npm-global/bin:$PATH
   ```

### Project Generation Issues

#### Template Not Found

**Problem**: Error message "Template not found for stack: ..."

**Solutions**:

1. **Check available templates:**
   - Express + TypeORM + PostgreSQL ✅
   - Express + Prisma + PostgreSQL ✅
   - Fastify + TypeORM + PostgreSQL ✅

2. **Verify stack selection**: Make sure you selected a supported combination.

3. **Check template directory**: Ensure templates exist in `src/templates/`.

#### Directory Already Exists

**Problem**: "Directory already exists and is not empty"

**Solutions**:

1. **Choose a different directory name**
2. **Delete or rename the existing directory**
3. **Use an empty directory**

#### Invalid Project Name

**Problem**: "Project name can only contain lowercase letters, numbers, and hyphens"

**Solutions**:

- Use only lowercase letters, numbers, and hyphens
- Examples: `my-api`, `blog-backend`, `api-v1`
- Avoid: spaces, uppercase, special characters

### Generated Project Issues

#### Database Connection Errors

**Problem**: Cannot connect to database after project generation.

**Solutions**:

1. **Check `.env` file:**
   ```bash
   cp .env.example .env
   # Edit .env with correct credentials
   ```

2. **Verify database is running:**
   ```bash
   # PostgreSQL
   psql -U postgres -l

   # Or using Docker
   docker-compose up postgres
   ```

3. **Check connection string format:**
   - TypeORM: Individual variables (DB_HOST, DB_PORT, etc.)
   - Prisma: DATABASE_URL format

#### TypeScript Compilation Errors

**Problem**: TypeScript errors in generated project.

**Solutions**:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Check TypeScript version:**
   ```bash
   npx tsc --version
   ```

3. **Rebuild:**
   ```bash
   npm run build
   ```

#### Docker Issues

**Problem**: Docker containers not starting or errors.

**Solutions**:

1. **Check Docker is running:**
   ```bash
   docker --version
   docker ps
   ```

2. **Rebuild containers:**
   ```bash
   docker-compose down
   docker-compose up --build
   ```

3. **Check port conflicts:**
   - Default ports: 3000 (app), 5432 (PostgreSQL)
   - Change ports in `docker-compose.yml` if needed

### Development Issues

#### Module Not Found Errors

**Problem**: "Cannot find module" errors.

**Solutions**:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Clear node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check import paths**: Ensure imports match the project structure.

#### ESLint/Prettier Errors

**Problem**: Linting or formatting errors.

**Solutions**:

1. **Format code:**
   ```bash
   npm run format
   ```

2. **Fix linting issues:**
   ```bash
   npm run lint -- --fix
   ```

3. **Check configuration files**: `.eslintrc.json` and `.prettierrc`

## Getting Help

### Check Logs

Most errors provide helpful error messages. Read them carefully:

```bash
# Check CLI output
create-backend-api create

# Check generated project logs
cd <project-name>
npm run dev
```

### Verify Versions

Ensure you're using compatible versions:

```bash
node --version    # Should be >= 14.0.0
npm --version     # Should be >= 6.0.0
```

### Report Issues

If you encounter a bug or unexpected behavior:

1. Check existing issues in the repository
2. Create a new issue with:
   - Error message
   - Steps to reproduce
   - Node.js and npm versions
   - Operating system

## Tips

- **Always read error messages**: They usually contain helpful information
- **Check the generated README**: Each project includes stack-specific instructions
- **Use Docker**: If you have database connection issues, Docker Compose simplifies setup
- **Start simple**: Test with default options first, then customize
