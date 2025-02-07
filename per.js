class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }

    saludar(otroNombre="amigo"){
        console.log(`Hola ${otroNombre}, soy ${this.nombre}`);
    }
}
const obj = new Persona("William");
obj.saludar("amigo");