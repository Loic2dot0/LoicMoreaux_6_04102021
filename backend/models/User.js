/* User = {
    email: String, // Email unique dans la DB
    password:String // mot de passe hashé
}
*/
const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator'); //Vérifie que l'élément est unique dans la DB

const userSchema = mongoose.Schema({
    email: {type: String, required:true, unique: true},
    password: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema); // export du model 'User'