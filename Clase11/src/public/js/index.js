const socket = io();

socket.on('newProduct', productoNuevo =>{
    console.log(productoNuevo);
})