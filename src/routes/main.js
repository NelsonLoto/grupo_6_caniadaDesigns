const express = require ('express')
const router = express.Router();


const mainController = require ('../controllers/mainController')

router.get('/', mainController.index) //funciona OK
router.get('/nosotros', mainController.nosotros) //funciona OK

module.exports = router