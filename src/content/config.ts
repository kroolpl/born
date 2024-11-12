import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.string(),
    image: z.string(),
    author: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
}; 