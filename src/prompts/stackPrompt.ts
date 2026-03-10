/**
 * Technology Stack Prompts
 *
 * This module handles interactive prompts for selecting the technology stack:
 * framework (Express/Fastify), ORM (TypeORM/Prisma), and database type.
 */

import inquirer from 'inquirer';
import { FRAMEWORKS, FRAMEWORK_NAMES } from '../constants/frameworks';
import { ORMS, ORM_NAMES } from '../constants/orms';
import { DATABASES, DATABASE_NAMES } from '../constants/databases';
import { StackSelection } from '../types';

/**
 * Prompts the user to select a technology stack
 */
export async function stackPrompt(): Promise<StackSelection> {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: 'Select a framework:',
      choices: [
        {
          name: `${FRAMEWORK_NAMES[FRAMEWORKS.EXPRESS]} - Fast, unopinionated, minimalist web framework`,
          value: FRAMEWORKS.EXPRESS,
        },
        {
          name: `${FRAMEWORK_NAMES[FRAMEWORKS.FASTIFY]} - Fast and low overhead web framework`,
          value: FRAMEWORKS.FASTIFY,
        },
      ],
    },
    {
      type: 'list',
      name: 'orm',
      message: 'Select an ORM:',
      choices: [
        {
          name: `${ORM_NAMES[ORMS.TYPEORM]} - TypeORM is an ORM that can run in Node.js and supports many databases`,
          value: ORMS.TYPEORM,
        },
        {
          name: `${ORM_NAMES[ORMS.PRISMA]} - Next-generation Node.js and TypeScript ORM`,
          value: ORMS.PRISMA,
        },
      ],
    },
    {
      type: 'list',
      name: 'database',
      message: 'Select a database:',
      choices: [
        {
          name: `${DATABASE_NAMES[DATABASES.POSTGRES]} - Powerful, open source object-relational database`,
          value: DATABASES.POSTGRES,
        },
        {
          name: `${DATABASE_NAMES[DATABASES.MYSQL]} - World's most popular open source database`,
          value: DATABASES.MYSQL,
        },
        {
          name: `${DATABASE_NAMES[DATABASES.SQLITE]} - Self-contained, serverless, zero-configuration database`,
          value: DATABASES.SQLITE,
        },
      ],
    },
  ]);

  return {
    framework: answers.framework,
    orm: answers.orm,
    database: answers.database,
  };
}
