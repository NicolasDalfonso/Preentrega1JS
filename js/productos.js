
const productos = [
    { id: "Crema-Humectante", nombre: "Crema Humectante", precio: 15000, img: "./img/crema-humectante.jpg" },
    { id: "Jabon-Neutro", nombre: "Jabon Neutro", precio: 15000, img: "./img/jabon-neutro.jpg" },
    { id: "Crema-Anestesica", nombre: "Crema Anestesica", precio: 13500, img: "./img/crema-anestesica.jpg" },
    { id: "Parche-de-curacion", nombre: "Parche de curacion", precio: 5000, img: "./img/parche-de-curacion.jpg" }
];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <div>
                <h3 class="nombre-producto">${producto.nombre}</h3>
                <p class="precio">$${producto.precio}</p>
                <button class="agregar" id="${producto.id}">Agregar</button>
            </div>`;
        contenedorProductos.append(div);
    });
}

cargarProductos();

localStorage.setItem("productos", JSON.stringify(productos));

const productosEnLS = JSON.parse(localStorage.getItem("productos"));
console.log(productosEnLS);


const botonModoOscuro = document.createElement("button");
botonModoOscuro.id = "modo-oscuro";
botonModoOscuro.classList.add("modo-oscuro");
botonModoOscuro.textContent = "Modo Oscuro";

// Agregar el botón al header
const header = document.querySelector("header");
header.appendChild(botonModoOscuro);

// Lógica para alternar el modo oscuro
botonModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
});


