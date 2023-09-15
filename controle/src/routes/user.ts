import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import { request } from 'http'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', async (request, reply) => {
    try {
      const bodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
      })

      const { name, email, password } = bodySchema.parse(request.body)

      const userExists = await prisma.user.findUnique({
        where: { email },
      })

      if (userExists) {
        return reply.status(400).send('O e-mail informado já existe.')
      }
      const hashPassword = await bcrypt.hash(password, 10)

      const users = await prisma.user.create({
        data: {
          name,
          email,
          password: hashPassword,
        },
      })

      const { password: passwordOut, ...user } = users

      return reply.status(201).send(user)
    } catch (error) {
      console.error('Erro ao criar o usuário:', error)
      reply.status(500).send('Erro ao criar o usuário')
    }
  })
}
