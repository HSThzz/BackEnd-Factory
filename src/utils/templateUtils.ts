import path from 'path';
import fs from 'fs';
import { exists, readDir, isDirectory } from './fileSystem';

/**
 * Gets the package root directory
 * @returns {string} Package root directory path
 */
function getPackageRoot(): string {
  let currentDir = __dirname;

  for (let i = 0; i < 5; i++) {
    const packageJsonPath = path.join(currentDir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      return currentDir;
    }
    currentDir = path.resolve(currentDir, '..');
  }

  return path.resolve(__dirname, '..', '..');
}

/**
 * Gets the templates directory path
 * @returns {string} Templates directory path
 */
function getTemplatesDir(): string {
  const packageRoot = getPackageRoot();
  const possiblePaths = [
    path.resolve(packageRoot, 'src', 'templates'),
    path.resolve(__dirname, '..', '..', 'src', 'templates'),
    path.resolve(process.cwd(), 'src', 'templates'),
  ];

  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      return possiblePath;
    }
  }

  return path.resolve(packageRoot, 'src', 'templates');
}

/**
 * Lists all available template combinations
 * @returns {Promise<string[]>} Array of template names (e.g., ['express-typeorm-postgres'])
 */
export async function getAvailableTemplates(): Promise<string[]> {
  const templatesDir = getTemplatesDir();

  if (!(await exists(templatesDir))) {
    return [];
  }

  const items = await readDir(templatesDir);
  const templates: string[] = [];

  for (const item of items) {
    const itemPath = path.join(templatesDir, item);
    if (await isDirectory(itemPath)) {
      templates.push(item);
    }
  }

  return templates;
}

/**
 * Checks if a template combination exists
 * @param {string} framework - Framework name
 * @param {string} orm - ORM name
 * @param {string} database - Database name
 * @returns {Promise<boolean>} True if template exists
 */
export async function templateExists(
  framework: string,
  orm: string,
  database: string
): Promise<boolean> {
  const templateName = `${framework}-${orm}-${database}`;
  const templates = await getAvailableTemplates();
  return templates.includes(templateName);
}

/**
 * Gets available combinations for a given framework
 * @param {string} framework - Framework name
 * @returns {Promise<Array<{orm: string; database: string}>>} Available combinations
 */
export async function getAvailableCombinationsForFramework(
  framework: string
): Promise<Array<{ orm: string; database: string }>> {
  const templates = await getAvailableTemplates();
  const combinations: Array<{ orm: string; database: string }> = [];

  for (const template of templates) {
    const parts = template.split('-');
    if (parts[0] === framework && parts.length === 3) {
      combinations.push({
        orm: parts[1],
        database: parts[2],
      });
    }
  }

  return combinations;
}

/**
 * Formats available templates for display
 * @returns {Promise<string>} Formatted string with available templates
 */
export async function formatAvailableTemplates(): Promise<string> {
  const templates = await getAvailableTemplates();

  if (templates.length === 0) {
    return 'No templates available';
  }

  const formatted = templates.map((t) => `  ✓ ${t}`).join('\n');
  return `Available templates:\n${formatted}`;
}
