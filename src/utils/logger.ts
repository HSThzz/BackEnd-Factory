import chalk from 'chalk';

/**
 * Logger utility with colored output for different log levels
 */
export const logger = {
  /**
   * Logs an informational message
   * @param {string} message - Message to log
   */
  info: (message: string): void => {
    console.log(chalk.blue('ℹ'), message);
  },

  /**
   * Logs a success message
   * @param {string} message - Message to log
   */
  success: (message: string): void => {
    console.log(chalk.green('✓'), message);
  },

  /**
   * Logs a warning message
   * @param {string} message - Message to log
   */
  warn: (message: string): void => {
    console.log(chalk.yellow('⚠'), message);
  },

  /**
   * Logs an error message
   * @param {string} message - Message to log
   */
  error: (message: string): void => {
    console.log(chalk.red('✗'), message);
  },

  /**
   * Logs a step progress message
   * @param {number} step - Current step number
   * @param {number} total - Total number of steps
   * @param {string} message - Message to log
   */
  step: (step: number, total: number, message: string): void => {
    console.log(chalk.cyan(`[${step}/${total}]`), message);
  },
};
