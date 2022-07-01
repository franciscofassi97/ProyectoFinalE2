// const contenedorProductos = require("../../productos/productosMemoria");
// const contenedorProductos = require("../../productos/productosArchivos");

// const contenedorProductos = require("../../productos/productosMongo")

const contenedorProductos = require("../../productos/productosFirebase")

const saveProducto = async (req, res) => {
	const producto = req.body;
	const id = await contenedorProductos.save(producto);
	if (id) return res.status(200).json({ idProducto: id });
	else return res.status(404).json({ message: "No se pudo guardar el producto" });
}

const getAllProductos = async (req, res) => {
	const id = req.params.id

	if (id) {
		const producto = await contenedorProductos.getById(id);
		if (producto) return res.status(200).json(producto);
		else return res.status(404).json({ message: "No se encontro el producto" });
	} else {
		const productos = await contenedorProductos.getAllData();
		if (productos) return res.status(200).json(productos);
		else return res.status(404).json({ message: "No se encontraron productos" });
	}
}

const deleteProducto = async (req, res) => {
	const id = req.params.id;
	const producto = await contenedorProductos.getById(id);

	if (producto) {
		const productoEliminado = await contenedorProductos.deleteById(id)
		return res
			.status(200)
			.json({
				message: 'Se elimino el producto',
				producto: productoEliminado
			})
	} else {
		return res.status(404).json({
			message: "No se encontro el producto"
		});
	}
}

const updateProducto = async (req, res) => {
	const id = req.params.id;
	const productoToUpdate = await contenedorProductos.getById(id);
	const producto = req.body;
	if (productoToUpdate) {
		const productoUpdate = {
			id: productoToUpdate.id,
			nombre: producto.nombre || productoToUpdate.nombre,
			descripcion: producto.descripcion || productoToUpdate.descripcion,
			codigo: producto.codigo || productoToUpdate.codigo,
			fotoUrl: producto.fotoUrl || productoToUpdate.fotoUrl,
			precio: producto.precio || productoToUpdate.precio,
			stock: producto.stock || productoToUpdate.stock
		}
		const idProducto = await contenedorProductos.upDate(id, productoUpdate)
		return res
			.status(200)
			.json({
				message: 'Se actualizo el producto',
				producto: idProducto
			})
	} else {
		return res.status(404).json({
			message: "No se encontro el producto"
		});
	}

}
module.exports = {
	saveProducto,
	getAllProductos,
	deleteProducto,
	updateProducto,
};