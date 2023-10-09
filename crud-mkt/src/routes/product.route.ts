import { FastifyInstance } from 'fastify'
import ProductController from '../controllers/product.controller'

export async function ProductRouter(app: FastifyInstance) {
    app.get('/products', ProductController.listProducts)
}

export default ProductRouter
