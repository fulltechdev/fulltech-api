import { FastifyRequest, FastifyReply } from 'fastify'
import { ChatSchema } from '../schema/Chat'
import { z } from 'zod'
import { GeminiService } from '../services/GeminiService'

export const Create = async (req: FastifyRequest, res: FastifyReply) => {
	try {
		const data = ChatSchema.parse(req.body)
		
		// Processa a mensagem usando o serviço Gemini
		const result = await GeminiService.processMessage(data.message)
		
		// Verifica se houve erro no processamento
		if (result.error) {
			return res.status(500).send({
				message: result.error
			})
		}
		
		// Retorna a resposta do Gemini
		res.status(201).send({
			message: data.message,
			response: result.response
		})
	} catch (error) {
		if (error instanceof z.ZodError) {
			res.status(400).send({
				message: error.errors[0].message,
			})
		} else {
			res.status(500).send({
				message: 'Erro: ' + error,
			})
		}
	}
}