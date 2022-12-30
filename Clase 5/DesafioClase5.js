const fs = require('fs')

class ProductManager{
    constructor(){
        this.product = []
    }

    addProduct = (title,description,price,thumbnail,code,stock) =>{
        var id = (this.product.length+1)
        var buscarCode = this.product.find(el => el.code === code)
        if (buscarCode === undefined) {
            this.product.push({'title':title,'description':description,'price':price,'thumbnail':thumbnail,'code':code,'stock':stock,'id':id})
            console.log(this.product);   
        } else {
            console.log('Code se encuentra repetido, porfavor actualizarlo');
        }
    }
    
    getProduct = () =>{
        console.log(this.product);
    }

    getProductById = (id) =>{
        var buscarId = this.product.find(el => el.id === id)
        if (buscarId===undefined) {
            console.log('Error: Product not found');
        } else {
            console.log(buscarId);
        }
    }
    
    updateProduct(id, LlaveValor) {
        this.product[id-1] = { ...this.product[id-1], ...LlaveValor};
        console.log(this.product);
    }

    deleteProduct = (id) =>{
        var buscarId = this.product.find(el => el.id === id)
        if (buscarId===undefined) {
            console.log('Error: Product not found');
        } else {
            this.product.pop(buscarId);
            console.log(this.product);
        }
    }
}

let instancia = new ProductManager()
instancia.addProduct("producto prueba","Este es un producto prueba",200,"Sin Imagen","abc123",25)
instancia.addProduct("producto prueba","Este es un producto prueba",200,"Sin Imagen","abc124",25)
instancia.deleteProduct(5)
instancia.updateProduct(1,{'code':593,'title':'hola'})
