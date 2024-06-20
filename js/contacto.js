
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");

const estiloSelect = document.getElementById("estilo");

estiloSelect.addEventListener("change", function() {
    
    const estiloTatuaje = estiloSelect.value.toLowerCase();

    let artista;

    switch (estiloTatuaje) {
        case "tradicional":
            artista = "Matias";
            break;
        case "japones":
            artista = "Valentin";
            break;
        case "realismo":
            artista = "Martina";
            break;
        case "geometrico":
            artista = "Pedro";
            break;
        default:
            artista = null; 
    }

    if (artista) {
        console.log("El artista disponible para tu estilo de tatuaje es: " + artista);
        // alert("El artista disponible para tu estilo de tatuaje es: " + artista);
    } else {
        console.log("No tenemos artistas que realicen ese estilo de tatuajes.");
        // alert("No tenemos artistas que realicen ese estilo de tatuajes.");
    }
});
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
