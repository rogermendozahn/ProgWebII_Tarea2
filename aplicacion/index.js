const {Persona} = require('./modelos/personas')
const persona = new Persona("Luke", "Skywalker", "El papa es Darth Vader");
//const {ConfiguracionBasedeDatos, ConfiguracionBaseDatos} = require ('./configuracion/configuracion')
const {ConfiguracionBadeDatos, ConfiguracionBaseDatos} = require('./configuracion/configuracion')
const {autenticar} = require('./configuracion/autenticacion')
const {ejemplosArreglos} = require('./modelos/ejemplosArreglos')
const {Carros} = require('./modelos/carros')
const {ejemplosCarros} = require('./modelos/ejemplosCarros')


//ejemplosArreglos()

ejemplosCarros()
