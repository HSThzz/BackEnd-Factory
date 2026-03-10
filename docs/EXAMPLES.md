# Examples

## Basic Examples

### Example 1: Express + TypeORM + PostgreSQL

Create a REST API with Express, TypeORM, and PostgreSQL:

```bash
create-backend-api create

# Select:
# - Framework: Express
# - ORM: TypeORM
# - Database: PostgreSQL
# - Include Docker: Yes
```

**Result**: A complete Express API with TypeORM, PostgreSQL, and Docker support.

### Example 2: Fastify + TypeORM + PostgreSQL

Create a high-performance API with Fastify:

```bash
create-backend-api create

# Select:
# - Framework: Fastify
# - ORM: TypeORM
# - Database: PostgreSQL
# - Include Docker: Yes
```

**Result**: A Fastify API optimized for performance with built-in logging.

### Example 3: Express + Prisma + PostgreSQL

Create an API with Prisma ORM:

```bash
create-backend-api create

# Select:
# - Framework: Express
# - ORM: Prisma
# - Database: PostgreSQL
# - Include Docker: Yes
```

**Result**: An Express API with Prisma, including Prisma Studio and migrations.

## Project Structure Examples

### Generated Entity Example

After creating a project, you'll find a base entity structure:

```typescript
// src/domain/entities/BaseEntity.ts
export abstract class BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Generated Controller Example

Controllers extend BaseController:

```typescript
// src/presentation/controllers/HealthController.ts
export class HealthController extends BaseController {
  async check(req: Request, res: Response): Promise<Response> {
    // Health check logic
  }
}
```

### Generated Routes Example

Routes are organized in the presentation layer:

```typescript
// src/presentation/routes/index.ts
router.get('/health', (req, res) => healthController.check(req, res));
```

## Common Use Cases

### Use Case 1: Quick Prototype

For rapid prototyping:

```bash
create-backend-api create
# Accept all defaults
# Use Express + TypeORM + PostgreSQL
# Include Docker for easy setup
```

### Use Case 2: Production API

For production-ready APIs:

```bash
create-backend-api create
# Choose appropriate stack
# Include Docker for deployment
# Configure environment variables properly
```

### Use Case 3: Learning DDD

For learning Domain-Driven Design:

```bash
create-backend-api create
# Review the generated structure
# Study the layer separation
# Follow the architecture patterns
```

## Next Steps After Generation

### 1. Review Generated Code

```bash
cd <project-name>
# Explore the structure
# Read the README.md
# Check the architecture
```

### 2. Set Up Environment

```bash
cp .env.example .env
# Edit .env with your settings
```

### 3. Start Development

```bash
npm install
npm run dev
```

### 4. Test the API

```bash
# Health check
curl http://localhost:3000/api/health

# Root endpoint
curl http://localhost:3000/api
```

## Docker Examples

### Development with Docker

```bash
# Start everything
docker-compose up

# In another terminal, test
curl http://localhost:3000/api/health
```

### Production Build

```bash
# Build image
docker build -t my-api .

# Run container
docker run -p 3000:3000 my-api
```

## Tips and Best Practices

1. **Start Simple**: Begin with default options, then customize
2. **Use Docker**: Simplifies database setup and deployment
3. **Follow DDD**: Keep business logic in the domain layer
4. **Test Early**: Write tests as you add features
5. **Use TypeScript**: Leverage type safety for better code quality
