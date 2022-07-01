const ContenedorMemoria = require("../../contenedores/ContenedorMemoria")

class ContenedorProductosMemoria extends ContenedorMemoria {
	constructor() {
		super();
	}
}

const contenedorProductosMemoria = new ContenedorProductosMemoria();

module.exports = contenedorProductosMemoria;


