/**
 * Shared Type Definitions
 *
 * This module defines TypeScript types and interfaces used throughout the application.
 */

import { Framework } from '../constants/frameworks';
import { ORM } from '../constants/orms';
import { Database } from '../constants/databases';

/**
 * Technology stack selection
 */
export interface StackSelection {
  framework: Framework;
  orm: ORM;
  database: Database;
}

/**
 * Project configuration
 */
export interface ProjectConfig {
  name: string;
  description: string;
  version: string;
  targetDir: string;
  nodeVersion?: string;
  includeDocker?: boolean;
}

/**
 * Complete project generation options
 */
export interface ProjectGenerationOptions extends ProjectConfig {
  stack: StackSelection;
}

/**
 * Resource generation options
 */
export interface ResourceConfig {
  name: string;
  type: 'model' | 'controller' | 'route' | 'all';
  projectPath: string;
}
