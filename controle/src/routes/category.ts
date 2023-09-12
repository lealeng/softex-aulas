import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import { request } from 'http'

export async function categoryRoutes(app: FastifyInstance) {
  app.get('/categories', async (request, reply) => {
    try {
      const categories = await prisma.category.findMany({
        orderBy: {
          id: 'asc',
        },
      })

      return categories
    } catch (error) {
      console.error('Erro ao buscar categorias:', error)

      reply.status(500).send('Erro ao buscar categorias')
    }
  })

  app.get('/categories/:id', async (request) => {
    try {
      const paramsSchema = z.object({
        id: z.string(),
      })

      const { id } = paramsSchema.parse(request.params)
      const categoryId = parseInt(id, 10)
      const category = await prisma.category.findFirstOrThrow({
        where: {
          id: categoryId,
        },
      })

      if (!category) {
        return {
          statusCode: 404,
          message: 'Categoria não encontrada',
        }
      }

      return category
    } catch (error) {
      console.error('Erro ao buscar a categoria por ID:', error)

      return {
        statusCode: 500,
        message: 'Erro ao buscar a categoria por ID',
      }
    }
  })

  app.post('/categories', async (request, reply) => {
    try {
      const bodySchema = z.object({
        name: z.string(),
        activated: z.boolean().default(true),
      })

      const { name, activated } = bodySchema.parse(request.body)

      const category = await prisma.category.create({
        data: {
          name,
          activated,
        },
      })

      return category
    } catch (error) {
      console.error('Erro ao criar a categoria:', error)
      reply.status(500).send('Erro ao criar a categoria')
    }
  })

  app.put('/categories/:id', async (request) => {
    try {
      const paramsSchema = z.object({
        id: z.string(),
      })

      const { id } = paramsSchema.parse(request.params)
      const categoryUpdate = parseInt(id, 10)
      const bodySchema = z.object({
        name: z.string(),
        activated: z.boolean().default(true),
      })

      const { name, activated } = bodySchema.parse(request.body)
      const category = await prisma.category.update({
        where: {
          id: categoryUpdate,
        },
        data: {
          name,
          activated,
        },
      })

      if (!category) {
        return {
          statusCode: 404,
          message: 'Categoria não encontrada',
        }
      }
      return category
    } catch (error) {
      console.error('Erro ao buscar a categoria por ID:', error)
      return {
        statusCode: 500,
        message: 'Erro ao buscar a categoria por ID',
      }
    }
  })

  app.delete('/categories/:id', async (request) => {
    try {
      const paramsSchema = z.object({
        id: z.string(),
      })

      const { id } = paramsSchema.parse(request.params)
      const categoryIdDel = parseInt(id, 10)

      await prisma.category.delete({
        where: {
          id: categoryIdDel,
        },
      })

      if (!categoryIdDel) {
        return {
          statusCode: 404,
          message: 'Categoria não encontrada',
        }
      }

      return categoryIdDel
    } catch (error) {
      console.error('Erro ao buscar a categoria por ID:', error)
      return {
        statusCode: 500,
        message: 'Erro ao buscar a categoria por ID',
      }
    }
  })
}
