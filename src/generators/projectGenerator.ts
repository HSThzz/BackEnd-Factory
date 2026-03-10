/**
 * Project Generator
 *
 * This module handles the generation of a complete backend project structure
 * based on the selected technology stack and project configuration.
 */

import ora from 'ora';
import path from 'path';
import { joinPath, resolvePath } from '../utils/pathUtils';
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
 * Gets the template directory path based on the selected stack
 */
function getTemplatePath(stack: {
  framework: string;
  orm: string;
  database: string;
}): string {
  const templateName = `${stack.framework}-${stack.orm}-${stack.database}`;
  
  // Try to resolve from source directory (development) or dist (production)
  const possiblePaths = [
    // Development: from src/generators to src/templates
    path.resolve(__dirname, '..', 'templates', templateName),
    // Production: from dist/generators to dist/templates (but templates are in src)
    path.resolve(__dirname, '..', '..', 'src', 'templates', templateName),
    // Alternative: from project root
    path.resolve(process.cwd(), 'src', 'templates', templateName),
  ];

  // Return the first path that exists (we'll check existence in the caller)
  return possiblePaths[0];
}

/**
 * Recursively processes template files and directories
 */
async function processTemplateDirectory(
  sourceDir: string,
  targetDir: string,
  data: Record<string, unknown>
): Promise<void> {
  const items = await readDir(sourceDir);

  for (const item of items) {
    const sourcePath = joinPath(sourceDir, item);
    const targetPath = joinPath(targetDir, item);

    // Skip .gitkeep files (they're just placeholders)
    if (item === '.gitkeep') {
      continue;
    }

    if (await isDirectory(sourcePath)) {
      await ensureDir(targetPath);
      await processTemplateDirectory(sourcePath, targetPath, data);
    } else if (await isFile(sourcePath)) {
      // Check if it's a template file (.hbs extension)
      if (item.endsWith('.hbs')) {
        const rendered = await renderTemplate(sourcePath, data);
        const targetFilePath = targetPath.replace(/\.hbs$/, '');
        await writeFile(targetFilePath, rendered);
        logger.info(`Generated: ${targetFilePath}`);
      } else if (item.includes('{{') || item.includes('.example')) {
        // Files with template variables in name or .example files should be processed
        // Check if file content has template variables
        const content = await readFile(sourcePath);
        if (content.includes('{{')) {
          const rendered = await renderTemplateString(content, data);
          await writeFile(targetPath, rendered);
          logger.info(`Generated: ${targetPath}`);
        } else {
          await copyFile(sourcePath, targetPath);
          logger.info(`Copied: ${targetPath}`);
        }
      } else {
        // Copy file as-is
        await copyFile(sourcePath, targetPath);
        logger.info(`Copied: ${targetPath}`);
      }
    }
  }
}

/**
 * Generates a complete backend project
 */
export async function projectGenerator(
  options: ProjectGenerationOptions
): Promise<void> {
  const spinner = ora('Generating project...').start();

  try {
    const { targetDir, stack, name, description, version } = options;

    // Check if template exists - try multiple possible paths
    let templatePath = getTemplatePath(stack);
    
    // Try alternative paths if first doesn't exist
    if (!(await exists(templatePath))) {
      const templateName = `${stack.framework}-${stack.orm}-${stack.database}`;
      const altPath = path.resolve(process.cwd(), 'src', 'templates', templateName);
      if (await exists(altPath)) {
        templatePath = altPath;
      } else {
        spinner.fail('Template not found');
        throw new Error(
          `Template not found for stack: ${stack.framework}-${stack.orm}-${stack.database}`
        );
      }
    }

    spinner.text = 'Creating project structure...';

    // Create target directory
    await ensureDir(targetDir);

    // Prepare template data
    const templateData = {
      projectName: name,
      projectDescription: description,
      version,
      framework: stack.framework,
      orm: stack.orm,
      database: stack.database,
      // Additional computed values
      projectNameCapitalized:
        name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' '),
    };

    spinner.text = 'Processing templates...';

    // Process template directory
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
