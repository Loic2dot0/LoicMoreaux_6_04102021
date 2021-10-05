const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user')

mongoose.connect('mongodb+srv://Loic2dot0:n4T3PV6Rn7x7kpE@cluster0.vjlu7.mongodb.net/piiquanteDB?retryWrites=true&w=majority',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Réussite de la connexion MongoDB'))
    .catch(() => console.log('Echec de la connexion MongoDB'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Autorisation de toute origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // Autorisation des entêtes listées
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Autorisation des méthodes listées
    next();
});

app.use('/api/auth', userRoutes);

module.exports = app;