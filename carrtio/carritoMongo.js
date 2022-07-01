const ContenedorMongo = require("../contenedores/ContenedorMongo");
const mongoose = require("mongoose");

const carritoSchema = new mongoose.Schema(
    {
        productos: { type: Array },
        timesTamp: { type: Date },
    },
    { timestamps: true }
);

const Carrito = mongoose.model("carrito", carritoSchema);

class ContenedorCarritoMongo extends ContenedorMongo {
    constructor(schema) {
        super(schema);
    }
}

const contenedorCarritoMongo = new ContenedorCarritoMongo(Carrito);

module.exports = contenedorCarritoMongo;