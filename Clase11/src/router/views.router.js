import express, { Router } from 'express';
import product from '../items/items.js'
import { io } from 'socket.io-client';
const socket = io()

const router = express.Router()

router.get('/', (req,res)=>{
    res.render('index', {productos: JSON.stringify(product)});
})

router.get('/realtimeproducts', (req,res) =>{
    res.render('realTimeProducts',{})
})

router.post('/realtimeproducts', (req, res) =>{
 
    let pTitle = req.query.title
    let pDescription = req.query.description
    let pPrice = req.query.price
    let pCode = req.query.code
    let pStock = req.query.stock
    let pThumbnail = req.query.thumbnail
    let id = product.length+1

    let productoNuevo = {
        title: pTitle,
        description: pDescription,
        price: pPrice,  
        thumbnail: pThumbnail,
        code: pCode,
        stock: pStock,
        id: id
    }
    console.log(socket.emit('newProduct', productoNuevo));
    socket.emit('newProduct', productoNuevo)
    console.log(productoNuevo);
    product.push(productoNuevo)
    res.send(product);
})


export default router;