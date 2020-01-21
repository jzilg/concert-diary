require('dotenv').config()

const path = require('path')
const express = require('express')

const { PORT } = process.env
const server = express()
const router = express.Router()

server.use(express.static('dist'))

router.get('*', (request, response) => {
    response.sendFile(path.resolve('dist/index.html'))
})

server.use(router)

server.listen(PORT, () => {
    /* eslint-disable-next-line no-console */
    console.log('listen to port:', PORT, '\n')
})
