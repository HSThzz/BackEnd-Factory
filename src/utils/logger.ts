/**
 * Logger Utility
 *
 * This module provides logging functionality for the CLI tool,
 * including different log levels (info, warn, error, success).
 */

import chalk from 'chalk';

export const logger = {
  info: (message: string): void => {
    console.log(chalk.blue('ℹ'), message);
  },

  success: (message: string): void => {
    console.log(chalk.green('✓'), message);
  },

  warn: (message: string): void => {
    console.log(chalk.yellow('⚠'), message);
  },

  error: (message: string): void => {
    console.log(chalk.red('✗'), message);
  },

  // For step-by-step progress
  step: (step: number, total: number, message: string): void => {
    console.log(chalk.cyan(`[${step}/${total}]`), message);
  },
};
