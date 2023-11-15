//Ponto de entrada do aplicativo//

//import { server } from './routes/server.js'
const express = require('express')
const routesHabitos = require('./routes/routesHabitos.js')

const app = express()

// Configuração do Express para processar JSON
app.use(express.json());

//redirecionar rotas
app.use('/', routesHabitos)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});


// const mongoose = require("mongoose");

// // Conectar ao MongoDB
// mongoose.connect("mongodb://localhost/projeto_habitos", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const habitoSchema = new mongoose.Schema({
//   habito: String,
// });

// // Definir o modelo de hábito
// const Habito = mongoose.model("Habito", habitoSchema);