const {Carros} = require('./carros')

function ejemplosCarros(){
    console.log("Este es el carro: ", Carros.marca);

    const carro1 = new Carros("Ford", "Escape","Gris")
    const carro2 = new Carros("Nissan", "Sentra","Blanco")
    const carro3 = new Carros("Toyota", "Corolla","Negro")
    const carro4 = new Carros("Honda", "Civic","Blanco")

    let lotedecarros =[carro1, carro2]

    lotedecarros.push(carro3)
    lotedecarros.push(carro4)
    console.log(lotedecarros);

    //MODIFICAR EL 1ER CARRO DE LA LISTA
    const carroModificar = lotedecarros.find((carro) => carro.marca === "Ford")
    carroModificar.marca = "BMW"
    console.log("1er carro modificado ",lotedecarros);

    //FIND 
    const carroEncontrado = lotedecarros.find((carro) => carro.marca === "Honda")

    console.log("BUSCAR CON FIND", carroEncontrado);

    //FILTER
    const carrosColorBlanco = lotedecarros.filter((carro) => carro.color === "Blanco")
    console.log("Carros color blanco", carrosColorBlanco);

    // delete
    lotedecarros = lotedecarros.filter((carro) => carro.marca !== "Honda")
    console.log("Listado sin el HONDA ES ", lotedecarros);
}

module.exports = {ejemplosCarros}