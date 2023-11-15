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
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateHabito = async (req, res) => {
    const { id } = req.params
    const { habito } = req.body
    try {
        const attHabito = await Habito.findByIdAndUpdate(
            id,
            { habito },
            { new: true }
        )
        if (!attHabito) {
            return res.status(404).json({ error: "Hábito não encontrado" })
        }
        res.json(attHabito)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteHabito = async (req, res) => {
    const { id } = req.params
    try {
        const habito = await Habito.findByIdAndDelete(id)
        if(!habito) {
            return res.status(404).json({ error: "Hábito não encontrado" })
        }
        res.json( {mensagem: "Hábito deletado com sucesso!" })
    } catch (error){
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    healthCheck,
    createHabito,
    getAllHabitos,
    updateHabito,
    deleteHabito
}
