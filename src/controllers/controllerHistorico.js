const moment = require('moment');
const Habito = require('../models/habitosModel')
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

const getDayHistorico = async (req, res) => {
    try {
        const data_habito = req.query.data
        const data_convertida = moment(data_habito, 'DD/MM/YYYY').toDate()
        const startOfDay = new Date(data_convertida)
        startOfDay.setHours(0, 0, 0, 0) // Define a hora inicial do dia (00:00:00)

        const endOfDay = new Date(data_convertida)
        endOfDay.setHours(23, 59, 59, 999) // Define a hora final do dia (23:59:59.999)

        const historico = await Historico.find({
            data: { $gte: startOfDay, $lte: endOfDay }, // Filtra os hábitos pela data específica
        });

        const habitos = await Habito.find()
        var habitosArray = []
        for (let i = 0; i<habitos.length; i++){
            const encontrouString = historico.some(objeto => {                
                return objeto.nome_habito === habitos[i].habito
            })
            var habitao = habitos[i].habito
            console.log(habitao)
            var obj = {habitao: encontrouString}
            habitosArray.push(obj)
        }
        console.log(habitosArray)
        
        res.json(historico)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createHistorico,
    getDayHistorico
} 


    // id_habito: { type: String, required: true },
    // data: { type: Date, required: true },
    // feito: { type: Boolean, required: true, default: false }