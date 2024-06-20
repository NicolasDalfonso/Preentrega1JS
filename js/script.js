// console.log(document.body)

//    // Crear el header
//    const header = document.createElement('header');

//    // Crear el logo
//    const logo = document.createElement('img');
//    logo.className = 'logo';
//    logo.src = './img/tattooink.png';
//    logo.alt = 'Logo';
//    header.appendChild(logo);

//    // Crear el botón de abrir menú
//    const abrirMenu = document.createElement('button');
//    abrirMenu.id = 'abrir';
//    abrirMenu.className = 'abrir-menu';
//    abrirMenu.innerHTML = '<i class="bi bi-list"></i>';
//    header.appendChild(abrirMenu);

//    // Crear el nav
//    const nav = document.createElement('nav');
//    nav.className = 'nav';
//    nav.id = 'nav';

//    // Crear el botón de cerrar menú
//    const cerrarMenu = document.createElement('button');
//    cerrarMenu.className = 'cerrar-menu';
//    cerrarMenu.id = 'cerrar';
//    cerrarMenu.innerHTML = '<i class="bi bi-x"></i>';
//    nav.appendChild(cerrarMenu);

//    // Crear la lista de navegación
//    const navList = document.createElement('ul');
//    navList.className = 'nav-list';

//    // Función para crear elementos de la lista
//    const crearNavItem = (texto, href) => {
//        const li = document.createElement('li');
//        const a = document.createElement('a');
//        a.href = href;
//        a.textContent = texto;
//        li.appendChild(a);
//        return li;
//    };

//    // Agregar los items a la lista de navegación
//    navList.appendChild(crearNavItem('Nosotros', '#'));
//    navList.appendChild(crearNavItem('Tatuajes', '#'));
//    navList.appendChild(crearNavItem('Productos', 'productos.html'));
//    navList.appendChild(crearNavItem('Contacto', 'contacto.html'));
//    nav.appendChild(navList);

//    // Agregar el nav al header
//    header.appendChild(nav);

//    // Agregar el header al body
//    document.body.appendChild(header);

//    // Crear y agregar el título principal
//    const h1 = document.createElement('h1');
//    h1.textContent = 'Tatuajes';
//    document.body.appendChild(h1);

//    // Crear y agregar el subtítulo
//    const h2 = document.createElement('h2');
//    h2.textContent = 'Reservar un turno';
//    document.body.appendChild(h2);

//    // Agregar el script
//    const script = document.createElement('script');
//    script.src = './js/script.js';
//    document.body.appendChild(script);

//    document.addEventListener("DOMContentLoaded", function () {
    // Crear el botón
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
