const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;

// Connexion à MongoDB
mongoose.connect('mongodb://mongo:27017/counterDB', { useNewUrlParser: true, useUnifiedTopology: true });

const counterSchema = new mongoose.Schema({
  count: Number,
  timestamp: Date
});

const Counter = mongoose.model('Counter', counterSchema);

// Middleware pour les requêtes JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route pour afficher la page (renvoyer les données JSON)
app.get('/get-counter', async (req, res) => {
  const data = await Counter.find().sort({ timestamp: -1 }).limit(1);
  const count = data.length > 0 ? data[0].count : 0;
  res.json({ count });
  console.log(count)
});

// Route pour incrémenter le compteur
app.post('/increment', async (req, res) => {
  // Récupérer le dernier compteur
  console.log('nouveau clique')
  const lastCountData = await Counter.find().sort({ timestamp: -1 }).limit(1);
  console.log(lastCountData[0].count)
  const newCount = lastCountData.length > 0 ? lastCountData[0].count + 1 : 1;
  console.log(newCount)

  // Sauvegarder le nouveau compteur
  const newCounter = new Counter({
    count: newCount,
    timestamp: new Date()
  });
  console.log(newCount)

  await newCounter.save();

  // Retourner la nouvelle valeur du compteur
  res.json({ count: newCount });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
