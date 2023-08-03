const {Persona} = require('./personas')
function ejemplosArreglos(){

    //Arrelgos de valores
    const notas = [1,23,4,567,7]
    const texto = "Hola Mundo"
    const cosasImportantes = ["Hacer cena", 25, true, new Date(), "Hacer prueba el viernes"]
    let  listadoClase = [
        {
            id: 1,
            nombre: "Luke",
            apellido: "Skywalker"
        },
        {
            id: 2,
            nombre: "Leia",
            apellido: "Organa"
        },
        {
            id: 3,
            nombre: "Roger",
            apellido: "Skywalker"
        }
    ]
    console.log(notas[3]);
    console.log(texto[3]);
    console.log(texto[30]);
    console.log(cosasImportantes[2]);
    console.log(listadoClase);
    console.log(listadoClase[1]);

    //Adicionar a un arreglo
    notas.push(777)
    console.log("Nuevo listado de notas ", notas);

    cosasImportantes.push("Ver al Olimpia")
    console.log("Las Nuevas cosas importantes son ", cosasImportantes);

    listadoClase.push({
        id: 44,
        nombre: "Roger",
        apellido: "Mendoza"
    })

    const nuevaPersona = {
        id: 5,
        nombre: "Han",
        apellido: "Solo"
    }

    listadoClase.push(nuevaPersona)

    console.log("Nuevo Listado Clase:  ", listadoClase);

    function buscarPorID(persona){
        return persona.id === 1
    }

    // ejemplos de funciones
    // funcion tradicional 1

    //const personaEncontrada = listadoClase.find(
    //    function (persona){
    //        return persona.id === 1
    //    }
    //)



    const buscarPersonaPorIdFFR = (persona) =>{
        return persona.id === 1
    }
    const buscarPersonaPorIdFF =(persona) => persona.id === 1

    //Esta es una Funcion anonima
    const personaEncontrada = listadoClase.find((persona) => persona.id === 2)

    // Tambien lo podemos usar llamando la funcion de arriba
    const personaEncontrada2 = listadoClase.find(buscarPorID)

    console.log("Persona encontrada: ", personaEncontrada);
    console.log("Persona encontrada 2: ", personaEncontrada2);

    // dEVUELVE UN ARREGLO DE TODAS LAS PERSONAS CON APELLIDO SKYWALKER
    const personasApellidoSkywalker = listadoClase.filter((persona) => persona.apellido === "Skywalker")
    console.log("Personas apellido skywalker", personasApellidoSkywalker);

    // dEVUELVE UN ARREGLO DE UN OBJETO
    console.log(listadoClase.filter((persona) => persona.id === 1));

    //PErsona Modificar
    const personaModificar = listadoClase.find((persona) => persona.id === 2)
    personaModificar.apellido = "Skywalker"
    console.log("Listado modificado ",listadoClase);

    //Eliminar
    listadoClase = listadoClase.filter((persona) => persona.id !== 5)
    console.log("Listado sin el ID 5", listadoClase);

    //Usando clases
    const persona1 = new Persona("Luke", "Skywalker","secreto")
    const persona2 = new Persona("Luke", "Skywalker","secreto")
    const persona3 = new Persona("Luke", "Skywalker","secreto")
    const persona4 = new Persona("Luke", "Skywalker","secreto")

    let elencoStarwars =[persona1, persona2]

    elencoStarwars.push(persona3)
    elencoStarwars.push(persona4)

    console.log(elencoStarwars);
}

module.exports = {ejemplosArreglos}
