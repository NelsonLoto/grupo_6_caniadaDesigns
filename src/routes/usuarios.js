const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require('path');

const usuariosController = require('../controllers/usuariosController')
const registerValidation = require('../validator/registerValidation')
const loginValidation = require('../validator/loginValidation')
const {userAuth} = require ('../middlewares/authMiddleware')


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, path.join(__dirname,'../../public/images/avatars'))
    },
    filename: function (req, file, cb) {

         cb(null, req.body.email + path.extname(file.originalname))
      }
      
  })
 
  var upload = multer({ storage: storage })
   
  

router.get ('/login', userAuth ,usuariosController.login )
router.post ('/login',loginValidation ,usuariosController.loginPost )
router.get ('/logout',usuariosController.logout )
router.get('/register', userAuth ,usuariosController.register) //funciona OK
router.post('/register', upload.single('avatar'), registerValidation , usuariosController.registerPost) //funciona OK
router.get('/perfil', usuariosController.perfil)

//prueba Shaggy
router.get('/register2', function(req,res){
   res.render('./partials/usuario/register2')
})

module.exports = router