import { setupCommands } from './args';

/**
 * Runs the CLI application and parses command line arguments
 */
export function run(): void {
  const program = setupCommands();

  if (process.argv.length === 2) {
    program.help();
  }

  program.parse(process.argv);
}
