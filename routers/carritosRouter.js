const express = require("express");
const router = express.Router();

const {
	saveCarrito,
	getAllCarritos,
	addProductoToCarrito,
	removeProductoFromCarrito,
	deleteCarrito
} = require('../controllers/carritoController/carritoControllerMemoria');

// POST
router.post('/', saveCarrito);

// GET
router.get('/:id?', getAllCarritos)

// PUT
router.put('/:id/productos', addProductoToCarrito)

// DELETE
router.delete("/:id/productos/:id_prod", removeProductoFromCarrito);
router.delete("/:id", deleteCarrito);


module.exports = router;