let express = require ('express')
let router = express.Router()
const productosController = require ('../controllers/productosController')

router.get('/', productosController.productos ) //funciona OK
router.get ('/crear', productosController.crearView) //funciona OK
router.post ('/crear', productosController.crear)
// router.get ('/crear/success', productosController.success)

module.exports = router