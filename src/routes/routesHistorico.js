const express = require('express')
const router = express.Router()
const controllerHistorico = require('../controllers/controllerHistorico')

router.post('/', controllerHistorico.createHistorico)
router.get('/dia', controllerHistorico.getDayHistorico)

module.exports = router
