const express = require("express");
const router = express.Router();

const {
	saveProducto,
	getAllProductos,
	deleteProducto,
	updateProducto
} = require('../controllers/productosController/productosControllerMemoria');


router.post('/', saveProducto);
router.get('/:id?', getAllProductos)
router.delete('/:id', deleteProducto)
router.put('/:id', updateProducto)

module.exports = router;