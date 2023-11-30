const mongoose = require("mongoose")

// desenhar a tabela
const historicoSchema = new mongoose.Schema({
    id_habito: { type: String, required: true },
    data: { type: Date, required: true },
    feito: { type: Boolean, required: true, default: false }
});

//  Criar o modelo/tabela de Historico
const Historico = mongoose.model("Historico", historicoSchema);

module.exports = Historico