const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require('path');

const usuariosController = require('../controllers/usuariosController')
const registerValidation = require('../validator/registerValidation')
const loginValidation = require('../validator/loginValidation')


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, path.join(__dirname,'../../public/images/avatars'))
    },
    filename: function (req, file, cb) {

         cb(null, req.body.email + path.extname(file.originalname))
      }
      
  })
 
  var upload = multer({ storage: storage })
   
  

router.get ('/login', usuariosController.login )
router.post ('/login',loginValidation ,usuariosController.loginPost )
router.get ('/logout',usuariosController.logout )
router.get('/register', usuariosController.register) //funciona OK
router.post('/register', upload.single('avatar'), registerValidation , usuariosController.registerPost) //funciona OK

module.exports = router