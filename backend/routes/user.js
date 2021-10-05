const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user'); //import du fichier controller

router.post('/signup', userCtrl.signup); //Définition de la route signup
router.post('/login', userCtrl.login); //Définition de la route login

module.exports = router;