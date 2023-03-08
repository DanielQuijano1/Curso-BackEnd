import express from 'express';
import { ProductManager } from './ProductManager.js';

const productManager = new ProductManager('./productos.txt');
const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.send(`<h1>Servidor en puerto ${PORT} </h1>`)
})

app.get('/products', async (req, res) => {
    try {
        const poductosLeidos = await productManager.getProducts()

        const limite = req.query.limit;
        let productosXPagina;

        if (limite) {
            productosXPagina = poductosLeidos.slice(0, limite)
            res.send(productosXPagina)
        }

        res.json(poductosLeidos)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

})

app.get('/products/:pid', async (req, res) => {

    try {
        const idProducto = req.params.pid
        const poductosLeidos = await productManager.getProducts()


        if (idProducto) {

            const productosString = typeof (poductosLeidos)

            const objeto = Object.values(poductosLeidos)
            const objetoTipo = typeof (poductosLeidos)

            let filtrado = objeto.find((prod) => prod.id === idProducto)

            if (filtrado) {

                res.send(filtrado)
            } else {
                throw new Error("no existe el id")
            }

        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }


})

const server = app.listen(PORT)