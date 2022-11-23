//const path = require('path');
const express = require("express");
const router = express.Router();

//const products = [];
const productController = require('../controllers/products');

router.get('/add-product', productController.getAddProduct);// admin/add-product =>get

router.post('/add-product', productController.postAddProduct);// admin/add-product = >post

module.exports = router;

