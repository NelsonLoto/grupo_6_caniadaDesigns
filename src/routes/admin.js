const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productosController = require ('../controllers/productosController');
const usuariosController = require ('../controllers/usuariosController');
const {guestAuth, roleAuth} = require ('../middlewares/authMiddleware')


var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, path.join(__dirname,'../../public/images/fotosProductos'))
     },
     filename: function (req, file, cb) {
        
      let nombreLimpio = req.body.nombre.split(" ").join("")

       cb(null, nombreLimpio + '-' + Date.now() + path.extname(file.originalname))
     }
   })
    
   var upload = multer({ storage: storage })




router.get ('/productos/all' ,roleAuth , productosController.productosAdmin) //funciona OK
router.get ('/productos/nuevo', roleAuth ,productosController.crearView) //funciona OK
router.post ('/productos/nuevo', roleAuth ,upload.single('fotoProducto'),productosController.crearSave)
router.get ('/productos/editar/:id', roleAuth ,productosController.editarView)
router.put ('/productos/editar/:id', roleAuth ,productosController.editarSave)
router.get ('/usuarios/all',roleAuth ,usuariosController.users) //funciona OK
//no tiene middleware de multer porque no subimos archivo al editar, solo lo mostramos en la vista. Lo que enviamos al hacer submit de la edicion es un INPUT hidden que es tipo texto que tiene el nombre del archivo. UN QUILOMBO
router.delete('/productos/borrar/:id', roleAuth ,productosController.borrar)

module.exports = router




  //let storage = multer.diskStorage({
    //      destination: function (req, file, cb) {
    //        cb(null, path.join(__dirname,'../../public/images/avatars'))
    //      },
    //      filename: function (req, file, cb) {
    //        cb(null, req.body.email + path.extname(file.originalname))
    //      }
    //    })
        
    //    var upload = multer({ storage: storage })

// router.get ('/login', usuarioRegistrado, usuariosController.login )
// router.post ('/login',loginValidation ,usuariosController.loginPost )
// router.get('/register', usuariosController.register) //funciona OK
// router.post('/register', upload.single('avatar'), registerValidation ,usuariosController.registerPost) //funciona OK



