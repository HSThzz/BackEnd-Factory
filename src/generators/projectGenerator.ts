import ora from 'ora';
import path from 'path';
import fs from 'fs';
import { joinPath } from '../utils/pathUtils';
import {
  ensureDir,
  copyFile,
  exists,
  readDir,
  isFile,
  isDirectory,
  writeFile,
  readFile,
} from '../utils/fileSystem';
import { renderTemplate, renderTemplateString } from './templateEngine';
import { logger } from '../utils/logger';
import { ProjectGenerationOptions } from '../types';

/**
 * Gets the package root directory
 * @returns {string} Package root directory path
 */
function getPackageRoot(): string {
  // Try to find package.json by walking up from __dirname
  let currentDir = __dirname;

  // When installed via npm: __dirname is dist/generators/
  // Package root is at: dist/../ (create-backend-api/)
  // When running from source: same structure

  // Walk up to find package.json
  for (let i = 0; i < 5; i++) {
    const packageJsonPath = path.join(currentDir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      return currentDir;
    }
    currentDir = path.resolve(currentDir, '..');
  }

  // Fallback: assume package root is 2 levels up from dist/generators/
  return path.resolve(__dirname, '..', '..');
}

/**
 * Gets all possible template directory paths based on the selected stack
 * @param {Object} stack - Stack configuration
 * @param {string} stack.framework - Framework name
 * @param {string} stack.orm - ORM name
 * @param {string} stack.database - Database name
 * @returns {string[]} Array of possible template directory paths
 */
function getTemplatePaths(stack: {
  framework: string;
  orm: string;
  database: string;
}): string[] {
  const templateName = `${stack.framework}-${stack.orm}-${stack.database}`;
  const packageRoot = getPackageRoot();

  return [
    // Primary: from package root -> src/templates/
    path.resolve(packageRoot, 'src', 'templates', templateName),
    // Fallback 1: relative from __dirname (dist/generators/)
    path.resolve(__dirname, '..', '..', 'src', 'templates', templateName),
    // Fallback 2: from process.cwd() (when running from source)
    path.resolve(process.cwd(), 'src', 'templates', templateName),
    // Fallback 3: try one more level up
    path.resolve(__dirname, '..', '..', '..', 'src', 'templates', templateName),
  ];
}

/**
 * Recursively processes template files and directories
 * @param {string} sourceDir - Source template directory
 * @param {string} targetDir - Target directory for generated files
 * @param {Record<string, unknown>} data - Template data
 * @returns {Promise<void>}
 */
async function processTemplateDirectory(
  sourceDir: string,
  targetDir: string,
  data: Record<string, unknown>
): Promise<void> {
  const items = await readDir(sourceDir);
  const includeDocker = data.includeDocker === true;

  for (const item of items) {
    const sourcePath = joinPath(sourceDir, item);
    const targetPath = joinPath(targetDir, item);

    if (item === '.gitkeep') {
      continue;
    }

    if (
      !includeDocker &&
      (item.startsWith('docker') || item === '.dockerignore')
    ) {
      continue;
    }

    if (await isDirectory(sourcePath)) {
      await ensureDir(targetPath);
      await processTemplateDirectory(sourcePath, targetPath, data);
    } else if (await isFile(sourcePath)) {
      if (item.endsWith('.hbs')) {
        const rendered = await renderTemplate(sourcePath, data);
        const targetFilePath = targetPath.replace(/\.hbs$/, '');
        await writeFile(targetFilePath, rendered);
        logger.info(`Generated: ${targetFilePath}`);
      } else {
        const content = await readFile(sourcePath);
        if (content.includes('{{')) {
          const rendered = await renderTemplateString(content, data);
          await writeFile(targetPath, rendered);
          logger.info(`Generated: ${targetPath}`);
        } else {
          await copyFile(sourcePath, targetPath);
          logger.info(`Copied: ${targetPath}`);
        }
      }
    }
  }
}

/**
 * Generates a complete backend project structure
 * @param {ProjectGenerationOptions} options - Project generation options
 * @returns {Promise<void>}
 * @throws {Error} If template not found or generation fails
 */
export async function projectGenerator(
  options: ProjectGenerationOptions
): Promise<void> {
  const spinner = ora('Generating project...').start();

  try {
    const { targetDir, stack, name, description, version, includeDocker } =
      options;

    const possiblePaths = getTemplatePaths(stack);

    // Try each possible path until we find one that exists
    let templatePath: string | null = null;
    for (const possiblePath of possiblePaths) {
      if (await exists(possiblePath)) {
        templatePath = possiblePath;
        break;
      }
    }

    if (!templatePath) {
      spinner.fail('Template not found');
      logger.error(`Tried the following paths:`);
      possiblePaths.forEach((p) => logger.error(`  - ${p}`));
      throw new Error(
        `Template not found for stack: ${stack.framework}-${stack.orm}-${stack.database}`
      );
    }

    spinner.text = 'Creating project structure...';

    await ensureDir(targetDir);

    const templateData = {
      projectName: name,
      projectDescription: description,
      version,
      framework: stack.framework,
      orm: stack.orm,
      database: stack.database,
      nodeVersion: options.nodeVersion || '18',
      includeDocker: includeDocker || false,
      projectNameCapitalized:
        name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' '),
    };

    spinner.text = 'Processing templates...';

    await processTemplateDirectory(templatePath, targetDir, templateData);

    spinner.succeed('Project generated successfully!');
    logger.success(`Project created at: ${targetDir}`);
    logger.info('Next steps:');
    logger.info(`  cd ${targetDir}`);
    logger.info('  npm install');
    logger.info('  npm run dev');
  } catch (error) {
    spinner.fail('Failed to generate project');
    throw error;
  }
}
