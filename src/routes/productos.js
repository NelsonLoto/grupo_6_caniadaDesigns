let express = require ('express');
const multer = require ('multer');
const path = require ('path');
const productosController = require ('../controllers/productosController');

let router = express.Router()

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

router.get('/', productosController.productos ) //funciona OK
router.get('/carrito', productosController.carrito)
router.get ('/crear', productosController.crearView) //funciona OK
router.post ('/crear', upload.single('fotoProducto'),productosController.crear)
router.get ('/crear/success', productosController.success)
router.get ('/:sku', productosController.detalle)
router.get ('/editar/:sku', productosController.editarView)
router.put ('/editar/:sku', productosController.editarSave)
//no tiene middleware de multer porque no subimos archivo al editar, solo lo mostramos en la vista. Lo que enviamos al hacer submit de la edicion es un INPUT hidden que es tipo texto que tiene el nombre del archivo. UN QUILOMBO

module.exports = router

