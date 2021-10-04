const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Loic2dot0:n4T3PV6Rn7x7kpE@cluster0.vjlu7.mongodb.net/piiquanteDB?retryWrites=true&w=majority',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Réussite de la connexion MongoDB'))
    .catch(() => console.log('Echec de la connexion MongoDB'));

const app = express();

app.use((req, res) => {
    res.json({ message: 'Requête reçue'});
})

module.exports = app;