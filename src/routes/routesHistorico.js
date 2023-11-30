const express = require('express')
const router = express.Router()
const controllerHistorico = require('../controllers/controllerHistorico')

router.post('/', controllerHistorico.createHistorico)

module.exports = router
