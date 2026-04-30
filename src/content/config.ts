import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    h1Html: z.string(),
    client: z.string(),
    scope: z.string(),
    year: z.number(),
    tags: z.array(z.string()),
    order: z.number(),
    next: z.string().optional(),
    nextLabel: z.string().optional(),
  }),
});

export const collections = { work };
