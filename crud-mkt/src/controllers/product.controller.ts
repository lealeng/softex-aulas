import { FastifyInstance, FastifyReply } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

class ProductController {
    async listProducts(reply) {
        try {
            const products = await prisma.product.findMany({
                orderBy: {
                    id: 'asc',
                },
            })

            reply.status(200).send(products)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
            reply.status(500).send('Erro ao buscar produtos')
        }
    }
}

export default new ProductController()
