import fastify, { FastifyInstance } from 'fastify'

const app = fastify()

app.get('/', async () => {
    return 'Hello World'
})

// app
//     .listen({
//         port: 3333,
//     })
//     .then(() => {
//         console.log('👀 HTTP server running on http://localhost:3333 ✔')
//     })

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
