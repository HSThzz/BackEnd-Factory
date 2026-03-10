/**
 * Create Project Command
 *
 * This module implements the command for creating a new backend project.
 * It handles the project creation workflow including prompts and generation.
 */

import { projectPrompt } from '../prompts/projectPrompt';
import { stackPrompt } from '../prompts/stackPrompt';
import { projectGenerator } from '../generators/projectGenerator';
import { logger } from '../utils/logger';

/**
 * Executes the create project command
 */
export async function createProject(): Promise<void> {
  try {
    logger.info('Welcome to create-backend-api!');
    logger.info('Let\'s create your new backend project.\n');

    // Gather project configuration
    const projectConfig = await projectPrompt();
    logger.info('');

    // Gather stack selection
    const stackSelection = await stackPrompt();
    logger.info('');

    // Generate project
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
