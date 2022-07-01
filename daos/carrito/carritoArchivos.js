const ContenedorArchivos = require("../../contenedores/ContenedorArchivos")

class ContenedorCarritoArchivo extends ContenedorArchivos {
    constructor(nombreArchivo) {
        super(nombreArchivo);
    }
}

const contenedorCarritoArchivo = new ContenedorCarritoArchivo('carrito.json');

module.exports = contenedorCarritoArchivo;
