/**
 * @fileoverview ORM constants and metadata
 */

export const ORMS = {
  TYPEORM: 'typeorm',
  PRISMA: 'prisma',
} as const;

export type ORM = typeof ORMS[keyof typeof ORMS];

export const ORM_NAMES = {
  [ORMS.TYPEORM]: 'TypeORM',
  [ORMS.PRISMA]: 'Prisma',
} as const;

export const ORM_DESCRIPTIONS = {
  [ORMS.TYPEORM]: 'TypeORM is an ORM that can run in Node.js and supports many databases',
  [ORMS.PRISMA]: 'Next-generation Node.js and TypeScript ORM',
} as const;
