const productos = [
    { nombre: "Crema Humectante", precio: 15000 },
    { nombre: "Jabon Neutro", precio: 15000 },
    { nombre: "Crema Anestesica", precio: 13500 },
    { nombre: "Crema Humectante", precio: 5000 }
];

const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);

console.log("Precio total de todos los productos: $" + precioTotal);

