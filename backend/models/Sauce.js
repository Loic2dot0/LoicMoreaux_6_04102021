/* Sauce = {
    userId: String, // id créé par MongoDB
    name: String, // nom de la sauce
    manufacturer: String, // Fabricant de la sauce
    description: String, // Description de la sauce
    mainPepper: String, // le principal ingrédient épicé de la sauce
    imageUrl: String, //Url de l'image de la sauce téléchargée par l'utilisateur
    heat: Number, // Nombre entre 1 et 10 décrivant la sauce
    likes: Number, // Nombre d'utilisateur qui aime la sauce
    dislikes: Number, // Nombre d'utilisateur qui n'aime pas la sauce
    usersLiked: ["String <userId>"], // tableau des identifiants des utilisateurs qui ont aimé (= liked) la sauce
    usersDisliked: ["String <userId>"] // tableau des identifiants des utilisateurs qui ont aimé (= liked) la sauce
}
*/

const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    name: {type: String, required: true}, 
    manufacturer: {type: String, required: true},
    description: {type: String, required: true}, 
    mainPepper: {type: String, required: true},
    imageUrl: {type: String, required: true},
    heat: {type: Number, required: true},
    likes: {type: Number, required: true},
    dislikes: {type: Number, required: true},
    usersLiked: {type: Object, required: true},
    usersDisliked: {type: Object, required: true}
});

module.exports = mongoose.model('Sauce', sauceSchema);