const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce'); //import du fichier controller
const auth = require('../middleware/auth');
const multer = require('../middleware/multer'); //import du fichier multer

router.get('/', auth, sauceCtrl.getAllSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.rateSauce);

module.exports = router;