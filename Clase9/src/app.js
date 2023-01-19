//let product = require('./ProductManager.js')
//import { ProductManager } from "./ProductManager";

const express = require('express');
const req = require('express/lib/request');

const product = [
    {
        title: 'Producto1',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin Imagen',
        code: 593,
        stock: 25,
        id: 1
    },
    {
        title: 'Producto2',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin Imagen',
        code: 'abc124',
        stock: 25,
        id: 2
    },
    {
        title: 'Producto3',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin Imagen',
        code: 'abc124',
        stock: 25,
        id: 3
    },
    {
        title: 'Producto4',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin Imagen',
        code: 'abc124',
        stock: 25,
        id: 4
    },
    {
        title: 'Producto5',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin Imagen',
        code: 'abc124',
        stock: 25,
        id: 5
    },
    {
        title: 'Producto6',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin Imagen',
        code: 'abc124',
        stock: 25,
        id: 6
    }
]

const cart = [
    {
        id:1,
        products:[
            
        ]
    }
]
const app = express();
app.use(express.json());

console.log(product);

app.get('/api/products',(req,res) =>{ 
    const limite = req.query.limit
    if (limite === undefined) {
        res.send(product)
    } else {
        console.log(limite);
        res.send(product.limit(limite));
    }

})  

app.get('/api/products/:idProduct', (req,res) =>{
    let idProduct = req.params.idProduct
    if (idProduct > product.length) {
        return res.send({error: "Id no encontrado"})
    } else {
        res.send(product[idProduct-1])
    }
})

app.post('/api/products/:pTitle/:pDescription/:pPrice/:pCode/:pStock/:pThumbnail?', (req,res) =>{
    let pTitle = req.params.pTitle
    let pDescription = req.params.pDescription
    let pPrice = req.params.pPrice
    let pCode = req.params.pCode
    let pStock = req.params.pStock
    let pThumbnail = req.params.pThumbnail
    let id = product.length+1

    if (pThumbnail === undefined) {
        let productoNuevo = {
            title: pTitle,
            description: pDescription,
            price: pPrice,  
            thumbnail: "Sin Imagen",
            code: pCode,
            stock: pStock,
            id: id
        }

        product.push(productoNuevo)
        res.send(product);
    } else {
        let productoNuevo = {
            title: pTitle,
            description: pDescription,
            price: pPrice,  
            thumbnail: pThumbnail,
            code: pCode,
            stock: pStock,
            id: id
        }

        product.push(productoNuevo)
        res.send(product);
    }
})


app.put('/api/products/:idProduct/:pTitle?/:pDescription?/:pPrice?/:pCode?/:pStock?/:pThumbnail?', (req,res) =>{
    let idProduct = req.params.idProduct
    let pTitle = req.params.pTitle
    let pDescription = req.params.pDescription
    let pPrice = req.params.pPrice
    let pCode = req.params.pCode
    let pStock = req.params.pStock
    let pThumbnail = req.params.pThumbnail

    if (idProduct > product.length) {
        return res.send({error: "Id no encontrado"})
    } else {
        let nuevoProducto = product[idProduct-1]
        if (pTitle !== undefined) {
            nuevoProducto.title = pTitle
        }
        if (pDescription !== undefined) {
            nuevoProducto.description = pDescription
        }
        if (pPrice !== undefined) {
            nuevoProducto.price = pPrice
        }
        if (pCode !== undefined) {
            nuevoProducto.code = pCode
        }
        if (pStock !== undefined) {
            nuevoProducto.stock = pStock
        }
        if (pThumbnail !== undefined) {
            nuevoProducto.thumbnail = pThumbnail
        }

        res.send(nuevoProducto)
    }
})

app.delete('/api/products/:idProduct', (req,res) =>{
    let idProduct = req.params.idProduct
    if (idProduct > product.length) {
        return res.send({error: "Id no encontrado"})
    } else {
        let eliminar = idProduct-1
        product.splice(eliminar, 1)
        res.send(product)
    }
})


app.get('/api/carts/:idCarrito', (req, res) =>{
    let idCarrito = req.params.idCarrito;
    if (idCarrito > cart.length) {
        return res.send({error: "Id no encontrado"})
    } else {
        res.send(cart[idCarrito-1].products)
    }
})

app.post('/api/carts/:idCarrito/product/:idProduct', (req, res) =>{
    let idCarrito = req.params.idCarrito
    let idProduct = req.params.idProduct

    if (idCarrito > cart.length) {
        return res.send({error: "Carrito no encontrado"})
    } else {
        if (idProduct > product.length) {
            return res.send({error: "Producto no encontrado"})
        } else {
            let carritoActual = cart[idCarrito-1]
            let productoActual = product[idProduct-1]

            productoxAgregar = carritoActual.products
            productoxAgregar.push(productoActual.id)

            let carritoNuevo = {
                id:idCarrito,
                product:productoxAgregar
            }

            res.send(carritoNuevo)  
        }
    }
})
    
    
app.listen(8080,()=>{
    console.log('Escuchando con puerto 8080');
})