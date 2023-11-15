//Arquivo de rotas para usuários//

//import { Router } from "express"

const express = require('express')
const router = express.Router()
const controllerHabitos = require('../controllers/controllerHabitos')

router.get('/test', controllerHabitos.teste)

//export { router }
module.exports = router