let express = require ('express')
let router = express.Router()
const productosController = require ('../controllers/productosController')

router.get('/', productosController.productos ) //funciona OK

module.exports = router