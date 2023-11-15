const express = require("express");
const mongoose = require("mongoose");
const app = express();

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

// Configuração do Express para processar JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

//consultar tabela de Habitos
app.get('/habitos', async (req, res) => {
  try {
    const habitos = await Habito.find();
    res.json(habitos);
  } catch (error) {
    console.error('Erro ao consultar hábitos:', error);
    res.status(500).json({ error: 'Erro ao consultar hábitos' });
  }
});

//adicionar novo Habito na tabela
app.post('/habitos', async (req, res) => {
  try {
    const novoHabito = new Habito({ habito: req.body.habito });
    const habitoSalvo = await novoHabito.save();
    res.status(201).json(habitoSalvo);
  } catch (error) {
    console.error('Erro ao salvar o hábito:', error);
    res.status(500).json({ error: 'Erro ao salvar o hábito' });
  }
});