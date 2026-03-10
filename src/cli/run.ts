/**
 * CLI Runner
 *
 * This module handles the execution flow of the CLI application.
 * It coordinates command parsing, prompts, and generator execution.
 */

import { setupCommands } from './args';

/**
 * Runs the CLI application
 */
export function run(): void {
  const program = setupCommands();

  // If no command is provided, show help
  if (process.argv.length === 2) {
    program.help();
  }

  program.parse(process.argv);
}
