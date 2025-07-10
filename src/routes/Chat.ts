import { Create } from '../controllers/Chat'
import { ChatSchema } from '../schema/Chat'
import { FastifyTypedInstance } from '../types'

export async function chatRoutes(app: FastifyTypedInstance) {
	app.post(
		'/chat',
		{
			schema: {
				description: 'Create a new chat',
				operationId: 'createChat',
				tags: ['chat'],
				body: ChatSchema,
			},
		},
		Create,
	)
}
