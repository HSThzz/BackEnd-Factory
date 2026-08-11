# Examples

## Basic Examples

### Example 1: Express + TypeORM + PostgreSQL

```bash
create-backend-api create

# Select:
# - Framework: Express
# - ORM: TypeORM
# - Database: PostgreSQL
# - Include Docker: Yes
```

**Result**: Minimal Express app with TypeORM connection, `GET /health`, and Docker support.

### Example 2: Fastify + TypeORM + PostgreSQL

```bash
create-backend-api create

# Select:
# - Framework: Fastify
# - ORM: TypeORM
# - Database: PostgreSQL
# - Include Docker: Yes
```

**Result**: Minimal Fastify app with TypeORM and built-in logging.

### Example 3: Express + Prisma + PostgreSQL

```bash
create-backend-api create

# Select:
# - Framework: Express
# - ORM: Prisma
# - Database: PostgreSQL
# - Include Docker: Yes
```

**Result**: Minimal Express app with Prisma client and an empty schema ready for your models.

## Generated Structure Example

```
my-api/
├── src/
│   ├── index.ts
│   └── infrastructure/
│       └── config/
│           ├── database.ts
│           └── data-source.ts   # TypeORM only
├── prisma/schema.prisma         # Prisma only
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## Common Use Cases

### Use Case 1: Quick Prototype

```bash
create-backend-api create
# Accept defaults
# Express + TypeORM + PostgreSQL
# Include Docker for easy DB setup
```

### Use Case 2: Production Starting Point

```bash
create-backend-api create
# Choose your stack
# Include Docker for deployment
# Add your own architecture and features on top of the scaffold
```

## Next Steps After Generation

### 1. Review Generated Code

```bash
cd <project-name>
# Read README.md
# Inspect src/index.ts and infrastructure/config
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
curl http://localhost:3000/health
```

## Docker Examples

### Development with Docker

```bash
docker-compose up

# In another terminal
curl http://localhost:3000/health
```

### Production Build

```bash
docker build -t my-api .
docker run -p 3000:3000 my-api
```

## Tips

1. **Start lean** — the scaffold is intentionally small; add folders as you need them
2. **Use Docker** — simplifies PostgreSQL setup
3. **Own the structure** — introduce DDD or feature modules when the project justifies it
4. **Use TypeScript** — leverage type safety as you grow
