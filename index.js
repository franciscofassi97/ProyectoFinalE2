const express = require('express')
const app = express();

const PORT = 8080;

app.use(express.json());

//Routers 
const routerProductos = require('./routers/productosRouter');
const routerCarritos = require('./routers/carritosRouter');

app.use('/api/productos', routerProductos);
app.use('/api/carrito', routerCarritos);


app.listen(PORT, () => {
	console.log(`Server is runnig on port ${PORT}`);
})