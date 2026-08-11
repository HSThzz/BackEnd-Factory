import inquirer from 'inquirer';
import {
  FRAMEWORKS,
  FRAMEWORK_NAMES,
  Framework,
} from '../constants/frameworks.js';
import { ORMS, ORM_NAMES, ORM } from '../constants/orms.js';
import { DATABASES, DATABASE_NAMES, Database } from '../constants/databases.js';
import { StackSelection } from '../types/index.js';
import {
  getAvailableCombinationsForFramework,
  templateExists,
  formatAvailableTemplates,
} from '../utils/templateUtils.js';
import { logger } from '../utils/logger.js';

/**
 * Prompts user to select technology stack (framework, ORM, database)
 * @returns {Promise<StackSelection>} Selected technology stack
 */
export async function stackPrompt(): Promise<StackSelection> {
  // Show available templates info
  const availableTemplates = await formatAvailableTemplates();
  logger.info(availableTemplates);
  logger.info('');

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

  const { framework } = await inquirer.prompt<{ framework: string }>({
    type: 'select',
    name: 'framework',
    message: 'Select a framework:',
    choices: frameworkChoices,
  });

  // Get available combinations for selected framework
  const availableCombinations =
    await getAvailableCombinationsForFramework(framework);

  if (availableCombinations.length === 0) {
    throw new Error(
      `No templates available for framework: ${FRAMEWORK_NAMES[framework as Framework]}`
    );
  }

  // Build ORM choices based on available combinations
  const availableORMs = new Set(availableCombinations.map((c) => c.orm));
  const ormChoices = [
    {
      name: ORM_NAMES[ORMS.TYPEORM],
      value: ORMS.TYPEORM,
    },
    {
      name: ORM_NAMES[ORMS.PRISMA],
      value: ORMS.PRISMA,
    },
  ].filter((choice) => availableORMs.has(choice.value));

  const { orm } = await inquirer.prompt<{ orm: string }>({
    type: 'select',
    name: 'orm',
    message: 'Select an ORM:',
    choices: ormChoices,
  });

  // Build database choices based on available combinations for selected framework + ORM
  const availableDatabases = new Set(
    availableCombinations.filter((c) => c.orm === orm).map((c) => c.database)
  );

  if (availableDatabases.size === 0) {
    throw new Error(
      `No templates available for ${FRAMEWORK_NAMES[framework as Framework]} + ${ORM_NAMES[orm as ORM]}`
    );
  }

  const databaseChoices = [
    {
      name: DATABASE_NAMES[DATABASES.POSTGRES],
      value: DATABASES.POSTGRES,
    },
    {
      name: DATABASE_NAMES[DATABASES.MYSQL],
      value: DATABASES.MYSQL,
    },
    {
      name: DATABASE_NAMES[DATABASES.SQLITE],
      value: DATABASES.SQLITE,
    },
  ].filter((choice) => availableDatabases.has(choice.value));

  const { database } = await inquirer.prompt<{ database: string }>({
    type: 'select',
    name: 'database',
    message: 'Select a database:',
    choices: databaseChoices,
  });

  // Final validation
  const templateName = `${framework}-${orm}-${database}`;
  const exists = await templateExists(framework, orm, database);

  if (!exists) {
    throw new Error(
      `Template not found: ${templateName}. Available templates:\n${await formatAvailableTemplates()}`
    );
  }

  return {
    framework: framework as Framework,
    orm: orm as ORM,
    database: database as Database,
  };
}
