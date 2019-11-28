const jsonServer = require('json-server')
const db = require('./db.js')

const PORT = 3000

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`)
})
