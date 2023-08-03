console.log("El susario y password de la base de datos es: ", ConfiguracionBaseDatos.usuario, ConfiguracionBaseDatos.password);

autenticar("Usuario80", "password.1234")
autenticar("usuarioincorrecto", "passwordincorrecto")

//persona.id = 1

const persona2 = new Persona("Leia", "Organa", "El hermano de Luke");
//persona2.id = 1


persona.nombreCompleto = "Nombre Nuevo"
console.log("Hola Mi nombre Completo 1 Es: ", persona.nombreCompleto);
console.log("El secreto de la persona 1: ", persona.obtenerSecreto);

//console.log("Este es el secreto desencriptado de la persona 1: ", cryptr.decrypt(persona.obtenerSecreto));

console.log(persona);
console.log(persona2);
