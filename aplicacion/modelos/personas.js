const Cryptr = require('cryptr');
const {ConfiguracionCrypto} = require('../configuracion/configuracion');
const cryptr = new Cryptr(ConfiguracionCrypto.llaveSecreta);

let hoy = new Date();
console.log(hoy);
class Persona{

  #secreto
  #secretoEncriptado

  constructor(nombre = "No Definidos", apellido = "No Definidos", secreto = "No definido"){
    this.id = "id" + nombre +  " - " + apellido[0]
    this.nombre = nombre
    this.apellido = apellido
    this.#secreto = secreto
    this.#prepararSecreto()
  }

  get nombreCompleto(){
    //backsticks
    return `${this.nombre} ${this.apellido}`
  }

  #prepararSecreto(){
    this.#secretoEncriptado = cryptr.encrypt(this.#secreto)
  }


  get obtenerSecreto(){
    return this.#secretoEncriptado
  }

  presentarse(){
    console.log("Hola mi nombre es: ", this.nombre, " ", this.apellido);
  }
}


module.exports = {Persona}