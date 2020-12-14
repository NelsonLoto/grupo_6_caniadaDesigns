const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productosController = require ('../controllers/productosController');


router.get('/', productosController.productos ) //funciona OK
router.get ('/:sku?', productosController.detalle)
router.get('/ver/carrito', productosController.carrito)


module.exports = router

