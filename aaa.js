class Ejercicio{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    saludo(edad){
        console.log(`Mi nombre es ${this.nombre} tengo ${edad}`)
    }
}

const obj = new Ejercicio("Juan", "Merlos")
obj.saludo(28)