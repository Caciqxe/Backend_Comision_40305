//let product = require('./ProductManager.js')
//import { ProductManager } from "./ProductManager";

const express = require('express');

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

const app = express();
console.log(product);

app.get('/products',(req,res) =>{
    const limite = req.query.limit
    if (limite === undefined) {
        res.send(product)
    } else {
        console.log(limite);
        res.send(product.limit(limite));
    }

})

app.get('/products/:idProduct', (req,res) =>{
    let idProduct = req.params.idProduct
    if (idProduct > product.length) {
        return res.send({error: "Id no encontrado"})
    } else {
        res.send(product[idProduct-1])
    }

})



app.listen(8080,()=>{
    console.log('Escuchando con puerto 8080');
})