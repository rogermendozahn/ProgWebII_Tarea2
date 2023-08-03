class ConfiguracionCrypto{
    static llaveSecreta = "Un password super seguro"
}

class ConfiguracionBaseDatos{
    static usuario = "Usuario80"
    static password = "password.1234"
}

function autenticar(usuario, password){
    if(usuario === ConfiguracionBaseDatos.usuario && password === ConfiguracionBaseDatos.password){
        console.log("Autenticado");
    }else{
        console.log("Error de Autenticacion");
    }
}

module.exports = {ConfiguracionCrypto, ConfiguracionBaseDatos}