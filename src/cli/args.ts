import { Command } from 'commander';
import { createProject } from '../commands/createProject';
import { generateResource } from '../commands/generateResource';

/**
 * Sets up and configures all CLI commands
 * @returns {Command} Configured Commander.js program instance
 */
export function setupCommands(): Command {
  const program = new Command();

  program
    .name('create-backend-api')
    .description(
      'A CLI tool to generate Node.js backend projects with TypeScript'
    )
    .version('0.1.0');

  program
    .command('create')
    .alias('c')
    .description('Create a new backend project')
    .action(async () => {
      await createProject();
    });

  program
    .command('generate')
    .alias('g')
    .description(
      'Generate a resource (model, controller, route) in an existing project'
    )
    .action(async () => {
      await generateResource();
    });

  return program;
}
