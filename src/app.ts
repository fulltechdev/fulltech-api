import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import {
	validatorCompiler,
	serializerCompiler,
	type ZodTypeProvider,
	jsonSchemaTransform,
} from 'fastify-type-provider-zod'
import { chatRoutes } from './routes/Chat'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

const app = fastify().withTypeProvider<ZodTypeProvider>()

// Configuração dos validadores
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

// Middlewares
app.register(fastifyCors, { origin: '*' })

app.register(fastifySwagger, {
	openapi: {
		info: {
			title: 'API de Chat',
			version: '1.0.0',
		},
	},
	transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
	routePrefix: '/chat/docs',
})

// Rotas
app.register(chatRoutes)

export { app }
