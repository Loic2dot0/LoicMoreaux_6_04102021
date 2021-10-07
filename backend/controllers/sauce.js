const Sauce = require('../models/Sauce'); //import du modèle sauce


exports.getAllSauce = (req, res, next) => {
    Sauce.find() //on cherche tous les modèles Sauce dans la DB
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({error}));
};

exports.getOneSauce = (req, res, next) => {
};

exports.createSauce = (req, res, next) => {
};

exports.modifySauce = (req, res, next) => {
};

exports.deleteSauce = (req, res, next) => {
};

exports.rateSauce = (req, res, next) => {
};