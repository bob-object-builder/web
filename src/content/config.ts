import { defineCollection, z } from "astro:content";

const contentCollection = defineCollection({
  type: "data",
  schema: z.object({}).passthrough(),
});

export const collections = {
  content: contentCollection,
};
