import { defineCollection, z } from 'astro:content';
import { CONTENT_TYPES, CONTENT_TOPICS } from '../consts';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		type: z.enum(CONTENT_TYPES as [string, ...string[]]),
		topic: z.enum(CONTENT_TOPICS as [string, ...string[]]),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
