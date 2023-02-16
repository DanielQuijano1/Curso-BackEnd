class ProductManager {


    constructor() { this.products = []}


    addProduct(item) {
        const products = this.getProducts();
        const addSuccessfully = 'Product has been add successfully'
        if (products.length) {

            const result = products.find(element => element.code === item.code)

            if (result) {
                return console.log('This products has already been added!!')
            } else {
                let lastIndex = products.length - 1;
                let lastId = products[lastIndex].id;
                item.id = lastId + 1;
                let id = item.id;
                this.products.push(item);
                console.log(addSuccessfully)
                return id;
            }

        } else {
            item.id = 1;
            this.products.push(item);
            console.log(addSuccessfully)
        }
    }



    getProducts() {
        const products = this.products;
        return products;
    }



    getProductById(id) {
        const products = this.getProducts();
        let productsById;
        const notFound = 'Not Found';
        products.map(el => {
            el.id === id && (productsById = el)
        });
        return productsById ? console.log(productsById) : console.log(notFound);
    }

}


//Pruebas 
const productsManager = new ProductManager();

productsManager.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto de prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
});

productsManager.addProduct({
    title: 'producto prueba 2',
    description: 'Este es un segundo producto de prueba ',
    price: 500,
    thumbnail: 'Sin imagen',
    code: 'def456',
    stock: 15
});


productsManager.getProductById(1);
