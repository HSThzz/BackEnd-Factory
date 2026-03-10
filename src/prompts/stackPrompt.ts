import inquirer from 'inquirer';
import {
  FRAMEWORKS,
  FRAMEWORK_NAMES,
  Framework,
} from '../constants/frameworks';
import { ORMS, ORM_NAMES, ORM } from '../constants/orms';
import { DATABASES, DATABASE_NAMES, Database } from '../constants/databases';
import { StackSelection } from '../types';

/**
 * Prompts user to select technology stack (framework, ORM, database)
 * @returns {Promise<StackSelection>} Selected technology stack
 */
export async function stackPrompt(): Promise<StackSelection> {
  const frameworkChoices = [
    {
      name: `${FRAMEWORK_NAMES[FRAMEWORKS.EXPRESS]}`,
      value: FRAMEWORKS.EXPRESS,
    },
    {
      name: `${FRAMEWORK_NAMES[FRAMEWORKS.FASTIFY]}`,
      value: FRAMEWORKS.FASTIFY,
    },
  ];

  const ormChoices = [
    {
      name: `${ORM_NAMES[ORMS.TYPEORM]}`,
      value: ORMS.TYPEORM,
    },
    {
      name: `${ORM_NAMES[ORMS.PRISMA]}`,
      value: ORMS.PRISMA,
    },
  ];

  const databaseChoices = [
    {
      name: `${DATABASE_NAMES[DATABASES.POSTGRES]}`,
      value: DATABASES.POSTGRES,
    },
    {
      name: `${DATABASE_NAMES[DATABASES.MYSQL]}`,
      value: DATABASES.MYSQL,
    },
    {
      name: `${DATABASE_NAMES[DATABASES.SQLITE]}`,
      value: DATABASES.SQLITE,
    },
  ];

  const { framework } = await inquirer.prompt<{ framework: string }>({
    type: 'select',
    name: 'framework',
    message: 'Select a framework:',
    choices: frameworkChoices,
  });

  const { orm } = await inquirer.prompt<{ orm: string }>({
    type: 'select',
    name: 'orm',
    message: 'Select an ORM:',
    choices: ormChoices,
  });

  const { database } = await inquirer.prompt<{ database: string }>({
    type: 'select',
    name: 'database',
    message: 'Select a database:',
    choices: databaseChoices,
  });

  return {
    framework: framework as Framework,
    orm: orm as ORM,
    database: database as Database,
  };
}
