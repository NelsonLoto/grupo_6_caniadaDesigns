const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')

router.get('/products',apiController.products);
router.get('/products/:id',apiController.productDetail);
router.get('/users', apiController.users)
router.get('/users/:id', apiController.userDetail)
module.exports = router;