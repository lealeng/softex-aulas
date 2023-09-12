import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function productsRoutes(app: FastifyInstance) {
  app.get('/products', async (request, reply) => {
    try {
      const products = await prisma.product.findMany({
        orderBy: {
          id: 'asc',
        },
      })

      return products
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
      // Responda com um status de erro e uma mensagem de erro
      reply.status(500).send('Erro ao buscar produtos')
    }
  })

  app.get('/products/:id', async (request) => {
    try {
      const paramsSchema = z.object({
        id: z.string(),
      })

      const { id } = paramsSchema.parse(request.params)

      const productId = parseInt(id, 10)

      const product = await prisma.product.findUniqueOrThrow({
        where: {
          id: productId,
        },
      })

      if (!product) {
        // Se o produto não for encontrado, retorne um status 404 (Não encontrado)
        return {
          statusCode: 404,
          message: 'Produto não encontrado',
        }
      }

      // Se o produto for encontrado, retorne o produto
      return product
    } catch (error) {
      console.error('Erro ao buscar o produto por ID:', error)
      // Responda com um status de erro e uma mensagem de erro
      return {
        statusCode: 500,
        message: 'Erro ao buscar o produto por ID',
      }
    }
  })

  app.post('/products', async (request, reply) => {
    try {
      // Valide o corpo da solicitação usando Zod
      const bodySchema = z.object({
        codBars: z.string(),
        name: z.string(),
        idCategory: z.number(),
        idSubcategory: z.number(),
        supplier: z.string(),
        price: z.number(),
        activated: z.boolean().default(true),
      })

      const {
        codBars,
        name,
        idCategory,
        idSubcategory,
        supplier,
        price,
        activated,
      } = bodySchema.parse(request.body)

      // Verifique se a categoria e a subcategoria existem antes de criar o produto
      const categoryExists = await prisma.category.findUniqueOrThrow({
        where: { id: idCategory },
      })

      const subcategoryExists = await prisma.subCategory.findUniqueOrThrow({
        where: { id: idSubcategory },
      })

      if (!categoryExists) {
        return reply.status(400).send('A categoria especificada não existe.')
      }

      if (!subcategoryExists) {
        return reply.status(400).send('A subcategoria especificada não existe.')
      }

      // Crie o novo produto
      const product = await prisma.product.create({
        data: {
          codBars,
          name,
          idCategory,
          idSubcategory,
          supplier,
          price,
          activated,
        },
      })

      return product
    } catch (error) {
      console.error('Erro ao criar o produto:', error)
      // Responda com um status de erro e uma mensagem de erro
      reply.status(500).send('Erro ao criar o produto')
    }
  })

  app.put('/products/:id', async (request) => {
    try {
      const paramsSchema = z.object({
        id: z.string(),
      })

      const { id } = paramsSchema.parse(request.params)

      const productUpdate = parseInt(id, 10)

      const bodySchema = z.object({
        codBars: z.string(),
        name: z.string(),
        idCategory: z.number(),
        idSubcategory: z.number(),
        supplier: z.string(),
        price: z.number(),
        activated: z.boolean().default(true),
      })

      const {
        codBars,
        name,
        idCategory,
        idSubcategory,
        supplier,
        price,
        activated,
      } = bodySchema.parse(request.body)

      const product = await prisma.product.update({
        where: {
          id: productUpdate,
        },
        data: {
          codBars,
          name,
          idCategory,
          idSubcategory,
          supplier,
          price,
          activated,
        },
      })

      if (!product) {
        // Se o produto não for encontrado, retorne um status 404 (Não encontrado)
        return {
          statusCode: 404,
          message: 'Produto não encontrado',
        }
      }

      // Se o produto for encontrado, retorne o produto
      return product
    } catch (error) {
      console.error('Erro ao buscar o produto por ID:', error)
      // Responda com um status de erro e uma mensagem de erro
      return {
        statusCode: 500,
        message: 'Erro ao buscar o produto por ID',
      }
    }
  })

  app.delete('/products/:id', async (request) => {
    try {
      const paramsSchema = z.object({
        id: z.string(),
      })

      const { id } = paramsSchema.parse(request.params)

      const productIdDel = parseInt(id, 10)

      await prisma.product.delete({
        where: {
          id: productIdDel,
        },
      })

      if (!productIdDel) {
        // Se o produto não for encontrado, retorne um status 404 (Não encontrado)
        return {
          statusCode: 404,
          message: 'Produto não encontrado',
        }
      }

      // Se o produto for encontrado, retorne o produto
      return productIdDel
    } catch (error) {
      console.error('Erro ao buscar o produto por ID:', error)
      // Responda com um status de erro e uma mensagem de erro
      return {
        statusCode: 500,
        message: 'Erro ao buscar o produto por ID',
      }
    }
  })
}
