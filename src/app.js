import { server } from './routes/server'

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

const mongoose = require("mongoose");

// Conectar ao MongoDB
mongoose.connect("mongodb://localhost/projeto_habitos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const habitoSchema = new mongoose.Schema({
  habito: String,
});

// Definir o modelo de hábito
const Habito = mongoose.model("Habito", habitoSchema);