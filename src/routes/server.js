import express from 'express'
import router  from './routesHabitos'

const server = express()

// Configuração do Express para processar JSON
server.use(express.json());

server.use(router)

export { server }