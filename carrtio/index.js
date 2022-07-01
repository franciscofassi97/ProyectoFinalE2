require("dotenv").config();
let contenedorImportar = "Archivos"

if (process.env.CONTENEDOR == "MONGO") contenedorImportar = "Mongo"


const definirContenedor = async () => {
    try {
        const contenedor = await import(`./carrito${contenedorImportar}.js`);
        return contenedor.default;
    } catch (error) {
        console.log("Error al importar contenedor");
    }
}

module.exports = definirContenedor;
