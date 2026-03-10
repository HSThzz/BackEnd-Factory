/**
 * Template Engine
 *
 * This module provides functionality for processing and rendering template files
 * with variable substitution and conditional logic.
 */

import Handlebars from 'handlebars';
import { readFile } from '../utils/fileSystem';

// Register Handlebars helpers
Handlebars.registerHelper('eq', (a: unknown, b: unknown) => a === b);
Handlebars.registerHelper('ne', (a: unknown, b: unknown) => a !== b);
Handlebars.registerHelper('and', (a: unknown, b: unknown) => a && b);
Handlebars.registerHelper('or', (a: unknown, b: unknown) => a || b);
Handlebars.registerHelper('upper', (str: string) => {
  if (typeof str !== 'string') return str;
  return str.toUpperCase();
});
Handlebars.registerHelper('lower', (str: string) => {
  if (typeof str !== 'string') return str;
  return str.toLowerCase();
});
Handlebars.registerHelper('capitalize', (str: string) => {
  if (typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
});

/**
 * Renders a template file with the provided data
 */
export async function renderTemplate(
  templatePath: string,
  data: Record<string, unknown>
): Promise<string> {
  const templateContent = await readFile(templatePath);
  const template = Handlebars.compile(templateContent);
  return template(data);
}

/**
 * Renders a template string with the provided data
 */
export function renderTemplateString(
  templateString: string,
  data: Record<string, unknown>
): string {
  const template = Handlebars.compile(templateString);
  return template(data);
}
