class Producto {
    constructor(id, producto, codigo, fechaIngreso, precio) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fechaIngreso = fechaIngreso;
        this.precios = [precio]; // Lista de precios
    }

    registrarPrecio(nuevoPrecio1, nuevoPrecio2) {
        this.precios.push(nuevoPrecio1, nuevoPrecio2);
    }

    mostrarProducto() {
        console.log(`ID: ${this.id}`);
        console.log(`Producto: ${this.producto}`);
        console.log(`Código: ${this.codigo}`);
        console.log(`Fecha de Ingreso: ${this.fechaIngreso}`);
        console.log(`Precios registrados: ${this.precios.join(', ')}`);
    }
}

const producto1 = new Producto(1, "Cargador", "c2206", "2025-02-07", 50);


producto1.registrarPrecio(55, 60);


producto1.mostrarProducto();
