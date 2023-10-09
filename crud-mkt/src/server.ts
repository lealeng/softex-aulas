import fastify, { FastifyInstance } from 'fastify'
import ProductRouter from './routes/product.route'

const app = fastify()

app.register(ProductRouter)

app.get('/', async () => {
  return 'Hello World'
})

const start = async () => {
  try {
    await app.listen({ port: 3333 })
    console.log('👀 HTTP server running on http://localhost:3333 ✔')
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

start()
