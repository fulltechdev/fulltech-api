import { app } from './app'
import { env } from './env'

const startServer = async () => {
	try {
		await app.listen({ port: env.PORT })
		console.log(`Server is running on http://localhost:${env.PORT}`)
	} catch (err) {
		app.log.error(err)
		process.exit(1)
	}
}

startServer()
