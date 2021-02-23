const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')

router.get('/products',apiController.productos);
router.get('/products/:id',apiController.detalle);

module.exports = router;