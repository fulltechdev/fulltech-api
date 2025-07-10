import { z } from 'zod'

export const ChatSchema = z.object({
	message: z.string({
		message: 'A mensagem é obrigatória.',
	}),
})
