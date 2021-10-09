const Sauce = require('../models/Sauce'); //import du modèle sauce
const fs = require('fs'); //fs = file system

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
    const sauceObject = JSON.parse(req.body.sauce);
    const sauce = new Sauce({
        userId: sauceObject.userId,
        name: sauceObject.name, 
        manufacturer: sauceObject.manufacturer,
        description: sauceObject.description, 
        mainPepper: sauceObject.mainPepper,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        heat: sauceObject.heat,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: []
    })
    //console.log(sauce);
    sauce.save()
        .then(() => res.status(200).json({message: "Nouvelle sauce ajoutée !"}))
        .catch(error => res.status(400).json({error}));
};

exports.modifySauce = (req, res, next) => {
    const sauceObject = req.file ?
    {
        name: JSON.parse(req.body.sauce).name, 
        manufacturer: JSON.parse(req.body.sauce).manufacturer,
        description: JSON.parse(req.body.sauce).description, 
        mainPepper: JSON.parse(req.body.sauce).mainPepper,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        heat: JSON.parse(req.body.sauce).heat
    } : {
        name: req.body.name, 
        manufacturer: req.body.manufacturer,
        description: req.body.description, 
        mainPepper: req.body.mainPepper,
        heat: req.body.heat
    };
    //console.log(sauceObject);
    //console.log(req.params.id);
    Sauce.updateOne({_id: req.params.id}, sauceObject)
        .then(res.status(200).json({message: "Sauce modifiée !"}))
        .catch(error => res.status(400).json({error}));
};

exports.deleteSauce = (req, res, next) => {
    Sauce.findById(req.params.id) // On recherche d'abord la sauce pour supprimer le fichier image
        .then(sauce => {
            const filename = sauce.imageUrl.split('/images/')[1]; // on extrait le nom du fichier à supprimer
            fs.unlink(`images/${filename}`, () =>{ // suppression du fichier image
                Sauce.deleteOne({_id: req.params.id}) // on supprime la sauce de la DB
                    .then(res.status(200).json({message: "Sauce supprimée !"}))
                    .catch(error => res.status(400).json({error}));
            });
        })
        .catch(error => res.status(400).json({error}));
};

exports.rateSauce = (req, res, next) => {
};