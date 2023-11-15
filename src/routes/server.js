//Inicialização do servidor//

//import express from 'express'
//import router  from './routesHabitos.js'

const express = require('express');
const router = require('./routesHabitos.js');

const server = express()

// Configuração do Express para processar JSON
server.use(express.json());

server.use(router)

module.exports = server