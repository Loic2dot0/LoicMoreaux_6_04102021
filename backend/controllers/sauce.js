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
    console.log('modification in progress');
    let sauceObject = {};
    if(req.file){
        console.log('File !');
        sauceObject = {
            name: JSON.parse(req.body.sauce).name, 
            manufacturer: JSON.parse(req.body.sauce).manufacturer,
            description: JSON.parse(req.body.sauce).description, 
            mainPepper: JSON.parse(req.body.sauce).mainPepper,
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            heat: JSON.parse(req.body.sauce).heat
        };
    } else{
        console.log('Data only !');
        sauceObject = {
            name: req.body.name, 
            manufacturer: req.body.manufacturer,
            description: req.body.description, 
            mainPepper: req.body.mainPepper,
            heat: req.body.heat
        };    
    };
    console.log(sauceObject);
    res.status(200).json({message: "Sauce modifiée !"});
};

exports.deleteSauce = (req, res, next) => {
};

exports.rateSauce = (req, res, next) => {
};