import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/articulos"
  }),

  schema: z.object({
    title: z.string(),

    description: z.string(),

    publishedAt: z.coerce.date(),

    updatedAt: z.coerce.date().optional(),

    category: z.enum([
      "Fuerza",
      "Movimiento",
      "Movilidad",
      "Nutrición",
      "Descanso",
      "Hábitos",
      "Equipamiento"
    ]),

    tags: z.array(z.string()).default([]),

    readingTime: z
      .number()
      .int()
      .positive(),

    featured: z
      .boolean()
      .default(false),

    draft: z
      .boolean()
      .default(false),

    image: z
      .string()
      .optional(),

    imageAlt: z
      .string()
      .optional(),

    references: z
      .array(
        z.object({
          title: z.string(),
          organization: z.string().optional(),
          url: z.string().url()
        })
      )
      .default([])
  })
});

export const collections = {
  articles
};