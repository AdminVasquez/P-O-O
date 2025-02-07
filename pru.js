class Producto {
    constructor(nombre, codigo, fechaIngreso, precio) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.fechaIngreso = fechaIngreso;
        this.precioBase = precio;
    }

    registrarPrecios() {
        let preciosu20 = this.precioBase * 1.2; // 20% más
        let precioMen20 = this.precioBase * 0.8; // 20% menos

        console.log(`Producto: ${this.nombre}`);
        console.log(`Código: ${this.codigo}`);
        console.log(`Fecha de Ingreso: ${this.fechaIngreso}`);
        console.log(`Precio base: $${this.precioBase}`);
        console.log(`Precio con 20% más: $${preciosu20}`);
        console.log(`Precio con 20% menos: $${precioMen20}`);
    }
}


const producto1 = new Producto("Cargador", "C2206", "2025-02-07", 50);

producto1.registrarPrecios();
