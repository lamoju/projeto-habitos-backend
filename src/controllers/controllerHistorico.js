// criar um registro de um Historico novo no Model
const Historico = require('../models/historicoModel')

const createHistorico = async (req, res) => {
    try {
        const historico = new Historico(req.body)
        await historico.save()
        res.status(201).json(historico)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createHistorico
} 


    // id_habito: { type: String, required: true },
    // data: { type: Date, required: true },
    // feito: { type: Boolean, required: true, default: false }