// const contenedorCarritoMemroia = require("../../carrtio/carriotoMemoria");
// const contenedorProductosMemoria = require("../../productos/productosMemoria");

// const contenedorCarrito = require("../../carrtio/carritoArchivos");
// const contenedorProductos = require("../../productos/productosArchivos");

const contenedorCarrito = require("../../carrtio/carritoMongo");
const contenedorProductos = require("../../productos/productosMongo");

const saveCarrito = async (req, res) => {
	const carrito = {
		timesTamp: new Date(),
		productos: []
	}
	const id = await contenedorCarrito.save(carrito);
	if (id) return res.status(200).json({ idCarrito: id });
	else return res.status(404).json({ message: "No se pudo guardar el carrito" });
}

const getAllCarritos = async (req, res) => {
	const id = req.params.id;

	if (id) {
		const carritoById = await contenedorCarrito.getById(id);
		if (carritoById) return res.status(200).json(carritoById);
		else return res.status(404).json({ message: "No se encontro el carrito" });
	} else {
		const carritos = await contenedorCarrito.getAllData();
		if (carritos) return res.status(200).json(carritos);
		else return res.status(404).json({ message: "No se encontraron carritos" });
	}
}

const addProductoToCarrito = async (req, res) => {
	const idCart = req.params.id;
	const { idProducto } = req.body;

	const carrito = await contenedorCarrito.getById(idCart);
	const producto = await contenedorProductos.getById(idProducto);

	if (carrito && producto) {
		carrito.productos.push(producto);

		const carritoUpdated = await contenedorCarrito.upDate(idCart, carrito);
		return res
			.status(200)
			.json({
				message: 'Se agrego el producto al carrito',
				carrito: carritoUpdated.id
			})
	} else {
		return res.status(404).json({
			message: "No se encontro el carrito o el producto"
		});
	}
}

const removeProductoFromCarrito = async (req, res) => {
	const idCart = req.params.id;
	const idProducto = req.params.id_prod;

	let carrito = await contenedorCarrito.getById(idCart);
	const index = carrito.productos.findIndex(obj => obj.id == idProducto);
	const productDeleted = carrito.productos.splice(index, 1);

	const carritoUpdated = await contenedorCarrito.upDate(idCart, carrito);
	if (productDeleted) {
		return res
			.status(200)
			.json({
				message: 'Se elimino el producto del carrito',
				carrito: carritoUpdated
			})
	} else {
		return res.status(404).json({
			message: "No se encontro el producto"
		});
	}
}

const deleteCarrito = async (req, res) => {
	const id = req.params.id;
	const carrito = await contenedorCarrito.getById(id);
	if (carrito) {
		const carritoEliminado = await contenedorCarrito.deleteById(id)
		return res
			.status(200)
			.json({
				message: 'Se elimino el carrito',
				carrito: carritoEliminado
			})
	} else {
		return res.status(404).json({
			message: "No se encontro el carrito"
		});
	}
}

module.exports = {
	saveCarrito,
	getAllCarritos,
	addProductoToCarrito,
	removeProductoFromCarrito,
	deleteCarrito
}
