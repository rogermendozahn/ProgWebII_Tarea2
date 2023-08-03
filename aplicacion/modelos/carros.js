
  class Carros{
    constructor(marca = "No definido", modelo = "No definido", color = "no definido"){
        this.marca = marca
        this.modelo = modelo
        this.color = color
    }
    
    get marcaModelo (){
        return `${this.marca}, ${this.modelo}`
    }

    mostrarse(){
        console.log("La marca y modelo es: ", this.marca, this.modelo);
    }

  }

  module.exports = {Carros}