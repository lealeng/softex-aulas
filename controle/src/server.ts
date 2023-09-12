import fastify from 'fastify'
import { productsRoutes } from './routes/products'
import { categoryRoutes } from './routes/category'

const app = fastify()

app.register(productsRoutes)
app.register(categoryRoutes)

app.get('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🎉 HTPP server running on http://localhost:3333')
  })
