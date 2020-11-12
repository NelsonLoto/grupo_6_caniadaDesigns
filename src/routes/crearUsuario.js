let express = require ('express')
let router = express.Router()

const accountController = require ('../controllers/crearUsuarioController')

router.get('/', accountController.crearUsuario) //funciona OK

module.exports = router