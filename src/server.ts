import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World'
})

app.listen({
  port: 7000,
}).then(()=>{
  console.log('🚀HTTP server running on http://localhost:7000')
})