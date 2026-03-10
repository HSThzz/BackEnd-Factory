import { projectPrompt } from '../prompts/projectPrompt';
import { stackPrompt } from '../prompts/stackPrompt';
import { projectGenerator } from '../generators/projectGenerator';
import { logger } from '../utils/logger';

/**
 * Executes the create project command
 * Prompts user for configuration and generates a new backend project
 * @throws {Error} If project generation fails
 */
export async function createProject(): Promise<void> {
  try {
    logger.info('Welcome to create-backend-api!');
    logger.info('Let\'s create your new backend project.\n');

    const projectConfig = await projectPrompt();
    logger.info('');

    const stackSelection = await stackPrompt();
    logger.info('');

    await projectGenerator({
      ...projectConfig,
      stack: stackSelection,
    });
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`Failed to create project: ${error.message}`);
    } else {
      logger.error('An unknown error occurred');
    }
    process.exit(1);
  }
}
