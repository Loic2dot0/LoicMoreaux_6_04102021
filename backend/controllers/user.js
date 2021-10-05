const bcrypt = require('bcrypt'); // Ajout de bcrypt pour le chriffrage du mot de passe
const salt = 10; //Nombre de tour pour le salage du mot du hash
const jwt = require('jsonwebtoken'); // Ajout de jsonwebtoken pour la gestion des token

const User = require('../models/User'); //import du modèle user


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, salt) //méthode asynchrone pour le hash du password
        .then(hash =>{
            const user = new User({ // création du nouvel utilisateur
                email: req.body.email,
                password: hash
            });
            user.save() // sauvegarde dans la DB du nouvel utilisateur
                .then(() => res.status(201).json({message: "User created"}))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};

exports.login = (req, res, next) => {
    res.json({ message: 'Log User'});
};