import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// HTTP Method: GET, POST, PUT, PATCH, DELETE, HEAD, OPTION

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

// API RESTful possui padrões, os métodos http seguem a semântica da rota

app
  .listen({
    port: 7000,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:7000')
  })
