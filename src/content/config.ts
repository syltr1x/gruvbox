import { defineCollection, z} from "astro:content";

const themes = defineCollection({
	schema: z.object({
		author: z.string(),
		tags: z.array(z.string()),
		icon: z.string().url(),
		url: z.string().url(),
	}),
})

export const collections = { themes }
