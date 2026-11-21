import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const toolEnum = z.enum(['Claude', 'Grok Bot', 'ChatGPT', 'Multi-Tool']);
const departmentEnum = z.enum([
  'Operations',
  'Sales & Client Comms',
  'Finance & Admin',
  'Leadership & Strategy',
  'HR & People',
  'Marketing',
]);
const difficultyEnum = z.enum(['Beginner', 'Intermediate']);

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tool: toolEnum,
    department: departmentEnum,
    difficulty: difficultyEnum,
    timeToComplete: z.string(),
    publishedDate: z.coerce.date(),
    featured: z.boolean().default(false),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { guides };
