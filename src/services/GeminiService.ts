import { env } from '../env'

interface GeminiResponse {
	response: string
	error?: string
}

export class GeminiService {
	private static readonly API_KEY = env.API_KEY
	private static readonly API_URL =
		'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'

	/**
	 * Processa a mensagem do usuário e retorna uma resposta do modelo Gemini
	 * @param message Mensagem do usuário
	 * @returns Objeto contendo a resposta ou erro
	 */
	public static async processMessage(message: string): Promise<GeminiResponse> {
		try {
			const url = `${this.API_URL}?key=${this.API_KEY}`

			const payload = {
				contents: [
					{
						parts: [
							{
								text: message,
							},
						],
					},
				],
				generationConfig: {
					temperature: 0.7,
					topK: 40,
					topP: 0.95,
					maxOutputTokens: 1024,
				},
			}

			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			})

			if (!response.ok) {
				const errorData = await response.json()
				return {
					response: '',
					error: `Erro na API do Gemini: ${errorData.error?.message || 'Erro desconhecido'}`,
				}
			}

			const data = await response.json()
			const textResponse = data.candidates[0]?.content?.parts[0]?.text || 'Sem resposta'

			return {
				response: textResponse,
			}
		} catch (error) {
			return {
				response: '',
				error: `Erro ao processar mensagem: ${error instanceof Error ? error.message : String(error)}`,
			}
		}
	}
}
