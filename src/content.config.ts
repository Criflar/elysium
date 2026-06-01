// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    year: z.string(),
    subcategory: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean(),
    link: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};