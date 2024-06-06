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
        alert("El artista disponible para tu estilo de tatuaje es: " + artista);
    } else {
        console.log("No tenemos artistas que realicen ese estilo de tatuajes.");
        alert("No tenemos artistas que realicen ese estilo de tatuajes.");
    }
});