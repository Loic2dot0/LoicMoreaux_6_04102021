const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce'); //import du fichier controller

router.get('/', sauceCtrl.getAllSauce);
router.get('/:id', sauceCtrl.getOneSauce);
router.post('/', sauceCtrl.createSauce);
router.put('/:id', sauceCtrl.modifySauce);
router.delete('/:id', sauceCtrl.deleteSauce);
router.post('/:id/like', sauceCtrl.rateSauce);

module.exports = router;