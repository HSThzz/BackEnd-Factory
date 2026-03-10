/**
 * @fileoverview Database constants and metadata
 */

export const DATABASES = {
  POSTGRES: 'postgres',
  MYSQL: 'mysql',
  SQLITE: 'sqlite',
} as const;

export type Database = (typeof DATABASES)[keyof typeof DATABASES];

export const DATABASE_NAMES = {
  [DATABASES.POSTGRES]: 'PostgreSQL',
  [DATABASES.MYSQL]: 'MySQL',
  [DATABASES.SQLITE]: 'SQLite',
} as const;

export const DATABASE_DESCRIPTIONS = {
  [DATABASES.POSTGRES]: 'Powerful, open source object-relational database',
  [DATABASES.MYSQL]: "World's most popular open source database",
  [DATABASES.SQLITE]: 'Self-contained, serverless, zero-configuration database',
} as const;
