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
            console.log('Not found');
        } else {
            console.log(buscarId);
        }
    }
}

let instancia = new ProductManager()
instancia.addProduct("producto prueba","Este es un producto prueba",200,"Sin Imagen","abc123",25)