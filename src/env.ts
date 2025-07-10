import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
	API_KEY: z.string(),
	PORT: z.coerce.number().default(3333)
})

export const env = envSchema.parse(process.env)
