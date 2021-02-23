const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')

router.get('/productos',apiController.productos)

module.exports = router;