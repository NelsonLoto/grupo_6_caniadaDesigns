let express = require ('express')
let router = express.Router()

const carritoController = require ('../controllers/carritoController')

router.get('/carrito', carritoController.carrito) //funciona OK

module.exports = router