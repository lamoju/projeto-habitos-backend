//Arquivo de rotas para usuários//

//import { Router } from "express"

const express = require('express')
const router = express.Router()
const controllerHabitos = require('../controllers/controllerHabitos')

router.get('/healthcheck', controllerHabitos.healthCheck)
router.post('/', controllerHabitos.createHabito)
router.get('/', controllerHabitos.getAllHabitos)
router.get('/:id', controllerHabitos.getHabito)
router.patch('/:id', controllerHabitos.updateHabito)
router.delete('/:id', controllerHabitos.deleteHabito)

//export { router }
module.exports = router