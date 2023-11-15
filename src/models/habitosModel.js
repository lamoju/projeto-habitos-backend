const mongoose = require("mongoose")

const habitoSchema = new mongoose.Schema({
    habito: { type: String, required: true },
});

//  Definir o modelo de hábito
const Habito = mongoose.model("Habito", habitoSchema);

module.exports = Habito