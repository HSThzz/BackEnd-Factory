import ora from 'ora';
import path from 'path';
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
 * Gets the template directory path based on the selected stack
 * @param {Object} stack - Stack configuration
 * @param {string} stack.framework - Framework name
 * @param {string} stack.orm - ORM name
 * @param {string} stack.database - Database name
 * @returns {string} Template directory path
 */
function getTemplatePath(stack: {
  framework: string;
  orm: string;
  database: string;
}): string {
  const templateName = `${stack.framework}-${stack.orm}-${stack.database}`;

  const possiblePaths = [
    // Production: templates in src/templates (npm package)
    path.resolve(__dirname, '..', '..', 'src', 'templates', templateName),
    // Development: templates in src/templates (source)
    path.resolve(__dirname, '..', 'templates', templateName),
    // Alternative: from project root
    path.resolve(process.cwd(), 'src', 'templates', templateName),
  ];

  return possiblePaths[0];
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

    let templatePath = getTemplatePath(stack);

    if (!(await exists(templatePath))) {
      const templateName = `${stack.framework}-${stack.orm}-${stack.database}`;
      const altPath = path.resolve(
        process.cwd(),
        'src',
        'templates',
        templateName
      );
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
