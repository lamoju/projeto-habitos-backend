//Arquivo de lógica para cada rota//

const Habito = require('../models/habitosModel')

const healthCheck = async (req, res) => {
    res.send("Servidor Online")
}

const createHabito = async (req, res) => {
    try {
        const habito = new Habito(req.body)
        await habito.save()
        res.status(201).json(habito)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllHabitos = async (req, res) => {
    try {
        const habitos = await Habito.find()
        res.json(habitos)
    } catch (error){
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    healthCheck,
    createHabito,
    getAllHabitos
}
