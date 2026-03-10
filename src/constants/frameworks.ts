/**
 * @fileoverview Framework constants and metadata
 */

export const FRAMEWORKS = {
  EXPRESS: 'express',
  FASTIFY: 'fastify',
} as const;

export type Framework = (typeof FRAMEWORKS)[keyof typeof FRAMEWORKS];

export const FRAMEWORK_NAMES = {
  [FRAMEWORKS.EXPRESS]: 'Express',
  [FRAMEWORKS.FASTIFY]: 'Fastify',
} as const;

export const FRAMEWORK_DESCRIPTIONS = {
  [FRAMEWORKS.EXPRESS]: 'Fast, unopinionated, minimalist web framework',
  [FRAMEWORKS.FASTIFY]: 'Fast and low overhead web framework',
} as const;
