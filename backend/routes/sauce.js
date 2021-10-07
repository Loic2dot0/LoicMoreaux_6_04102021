const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce'); //import du fichier controller
const multer = require('../middleware/multer'); //import du fichier multer

router.get('/', sauceCtrl.getAllSauce);
router.get('/:id', sauceCtrl.getOneSauce);
router.post('/', multer, sauceCtrl.createSauce);
router.put('/:id', multer, sauceCtrl.modifySauce);
router.delete('/:id', sauceCtrl.deleteSauce);
router.post('/:id/like', sauceCtrl.rateSauce);

module.exports = router;