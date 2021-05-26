const jsonServer = require('json-server')
const db = require('./db')

const PORT = 3000

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(PORT, () => {
    /* eslint-disable-next-line no-console */
    console.log(`JSON Server is running on http://localhost:${PORT}`)
})
