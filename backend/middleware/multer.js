const multer = require('multer');

const MIME_TYPES = {
    'image/jpg' : 'jpg',
    'image/jpeg' : 'jpg',
    'image/png' : 'png',
    'image/gif' : 'gif',
    'image/bmp' : 'bmp',
    'image/webp' : 'webp'
}

const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, 'images') //indique le dossier ou enregistrer les fichiers
    },
    filename: (req, file, callback) => {
        const name = Date.now() + '_' + Math.floor(Math.random()*10000); //définition du nom de fichier unique avec un timestamp + un nbre aléatoire
        const extension = MIME_TYPES[file.mimetype]; // création de l'extension a partir du type MIME du fichier
        callback(null, name + '.' + extension);
    }
})

module.exports = multer({storage}).single('image');