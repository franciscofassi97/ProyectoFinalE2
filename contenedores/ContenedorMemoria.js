class ContenedorMemoria {

	datos = [];

	save = (objeto) => {
		if (this.datos.length > 0) {
			objeto.id = this.datos[this.datos.length - 1].id + 1;
			this.datos.push(objeto);
			return objeto.id;
		} else {
			objeto.id = 1;
			this.datos.push(objeto);
			return objeto.id
		}
	}

	getAllData = () => {
		return this.datos;
	}

	getById = (id) => {
		const objectById = this.datos.find(obj => obj.id == id);
		if (objectById) return objectById;
	}

	deleteById = (id) => {
		const indexObject = this.datos.findIndex(obj => obj.id == id);
		if (indexObject > -1) {
			const objectDeleted = this.datos.splice(indexObject, 1);
			return objectDeleted[0];
		}
	}

	upDate = (id, objeto) => {
		const indexObject = this.datos.findIndex(obj => obj.id == id);
		this.datos.splice(indexObject, 1, objeto);
		return objeto.id;
	}
}

module.exports = ContenedorMemoria;