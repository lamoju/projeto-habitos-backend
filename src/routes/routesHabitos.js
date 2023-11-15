//Arquivo de rotas para usuários//

//import { Router } from "express"

const express = require('express')
const router = express.Router()
const controllerHabitos = require('../controllers/controllerHabitos')

router.get('/healthcheck', controllerHabitos.healthCheck)
router.post('/habitos', controllerHabitos.createHabito)
router.get('/habitos', controllerHabitos.getAllHabitos)
router.patch('/habitos/:id', controllerHabitos.updateHabito)
router.delete('/habitos/:id', controllerHabitos.deleteHabito)

//export { router }
module.exports = router