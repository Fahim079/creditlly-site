import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1).max(155).optional(),
    metaDescription: z.string().min(1).max(155).optional(),
    date: z.string(),
    slug: z.string().min(1).optional(),
    draft: z.boolean().optional()
  }).refine((d) => !!(d.description || d.metaDescription), {
    message: 'Add description or metaDescription'
  })
});

export const collections = { news };
