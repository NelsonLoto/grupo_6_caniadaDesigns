const express = require ('express')
const router = express.Router();

const loginRegisterController = require('../controllers/loginRegisterController')

router.get ('/', loginRegisterController.usuario )

module.exports = router