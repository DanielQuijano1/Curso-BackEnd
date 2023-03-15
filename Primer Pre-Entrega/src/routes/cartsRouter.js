import express, {Router} from 'express';
import { CartManager, Product, ProductManager } from '../../public/productManajer.js';
import { randomUUID } from 'crypto'

export const cartsRouter = Router()
cartsRouter.use(express.json())
cartsRouter.use(express.urlencoded({extended:true}))


const productManager = new ProductManager('./productos.txt');
const cartManager = new CartManager('./carrito.txt')

cartsRouter.get('/:cid',async (req,res)=>{
try {
    const id = req.params.cid
    const carritoID = await cartManager.getCartById(id)
    
        res.json(carritoID)
} catch (error) {
    throw new Error ("id de carrito no encontrado ")
}

} )


cartsRouter.get('/', async (req,res)=>{

    res.send(await cartManager.getCarts())
} )



cartsRouter.post('/:cid/product/:pid', async (req, res) => {
    try {
const cid = req.params.cid
const pid = req.params.pid

        await productManager.getProducts()
        const products = [];
        const id = randomUUID();

        // const producto1 = new Product({
        //     ...req.body,
        //     id: randomUUID()
        // })
        // console.log(producto1);
        
        // const addProducto = await productManager.addProduct(producto1.title, producto1.description,producto1.price, producto1.thumbnail, producto1.stock, producto1.code,producto1.category)
        // res.json(addProducto)
    } catch (error) {
        throw new Error('aiuda')
    }
})