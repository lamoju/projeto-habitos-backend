//Ponto de entrada do aplicativo//

//import { server } from './routes/server.js'
const express = require('express')
const connectDB = require('./database/database')
const routesHabitos = require('./routes/routesHabitos')
const routesHistorico = require('./routes/routesHistorico')

const app = express()

// Configuração do Express para processar JSON
app.use(express.json());

//Conectar ao MongoDB
connectDB()

//redirecionar rotas
app.use('/habitos', routesHabitos)
app.use('/historico', routesHistorico)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
