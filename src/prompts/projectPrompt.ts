/**
 * Project Configuration Prompts
 *
 * This module handles interactive prompts for gathering project configuration
 * such as project name, description, and other project-level settings.
 */

import inquirer from 'inquirer';
import { resolvePath } from '../utils/pathUtils';
import { existsSync, readDir } from '../utils/fileSystem';
import { ProjectConfig } from '../types';

/**
 * Prompts the user for project configuration
 */
export async function projectPrompt(): Promise<ProjectConfig> {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Project name:',
      validate: (input: string) => {
        if (!input.trim()) {
          return 'Project name cannot be empty';
        }
        // Check for valid package name
        if (!/^[a-z0-9-]+$/.test(input.toLowerCase())) {
          return 'Project name can only contain lowercase letters, numbers, and hyphens';
        }
        return true;
      },
      filter: (input: string) => input.trim().toLowerCase(),
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description:',
      default: 'A Node.js backend API',
      filter: (input: string) => input.trim(),
    },
    {
      type: 'input',
      name: 'version',
      message: 'Project version:',
      default: '1.0.0',
      validate: (input: string) => {
        // Basic semver validation
        if (!/^\d+\.\d+\.\d+/.test(input)) {
          return 'Version must follow semantic versioning (e.g., 1.0.0)';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'targetDir',
      message: 'Target directory:',
      default: (answers: Record<string, string>) => {
        return `./${answers.name}`;
      },
      validate: async (input: string) => {
        const fullPath = resolvePath(input);
        if (existsSync(fullPath)) {
          const files = await readDir(fullPath);
          if (files.length > 0) {
            return 'Directory already exists and is not empty';
          }
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'nodeVersion',
      message: 'Node.js version (optional):',
      default: '18',
      validate: (input: string) => {
        if (input && !/^\d+$/.test(input)) {
          return 'Node.js version must be a number';
        }
        return true;
      },
    },
    {
      type: 'confirm',
      name: 'includeDocker',
      message: 'Include Docker configuration?',
      default: true,
    },
  ]);

  const targetDir = resolvePath(answers.targetDir);

  return {
    name: answers.name,
    description: answers.description,
    version: answers.version,
    targetDir,
    nodeVersion: answers.nodeVersion || undefined,
    includeDocker: answers.includeDocker || false,
  };
}
