import { z, defineCollection } from "astro:content";

const documentationCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const contentCollection = defineCollection({
  type: "data",
  schema: z.object({}).passthrough(),
});

export const collections = {
  documentation: documentationCollection,
  content: contentCollection,
};
