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
    User.findOne({email: req.body.email}) //On recherche 'utilisateur dans la DB
        .then(user => {
            if(!user){ //Si l'email n'existe pas dans la DB
                return res.status(401).json({error: 'User not found'}); //401 Unauthorized
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => { //résultat booléen
                    if(!valid){ // si mot de passe incorrect on retourne une erreur
                        return res.status(401).json({error: 'Incorrect password'});
                    }
                    res.status(200).json({ //Si True, on renvoi un objet contenant l'id et le token
                        userId: user._id,
                        token: jwt.sign( //fonction de Jsontoken
                            {userId: user._id}, // données a encoder
                            'HJ3X7FGu3xTflm9ZMT5sgZs6AAVPBx4Z17nV', //clé d'encodage
                            {expiresIn: '24h'} // expiration du token
                        )
                    }); 
                })
                .catch(error => res.status(500).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};