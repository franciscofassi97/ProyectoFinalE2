const ContenedorFirebase = require("../contenedores/ContenedorFirebase");

class ContenedorCarritosFirebase extends ContenedorFirebase {
    constructor(nombreColeccion) {
        super(nombreColeccion);
    }
}

const contenedorCarritosFirebase = new ContenedorCarritosFirebase('carritos');

module.exports = contenedorCarritosFirebase;