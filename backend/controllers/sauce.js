const Sauce = require('../models/Sauce'); //import du modèle sauce


exports.getAllSauce = (req, res, next) => {
    Sauce.find() //on recherche tous les modèles Sauce dans la DB
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({error}));
};

exports.getOneSauce = (req, res, next) => {
    Sauce.findById(req.params.id) //on recherche une sauce par son Id
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(400).json({error}));
};

exports.createSauce = (req, res, next) => {
};

exports.modifySauce = (req, res, next) => {
};

exports.deleteSauce = (req, res, next) => {
};

exports.rateSauce = (req, res, next) => {
};