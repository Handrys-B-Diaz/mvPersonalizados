const carrusel = document.querySelector('.imagenes-carrusel');
const botonesCarrusel = document.querySelectorAll('.boton-carrusel');
let indiceActual = 0;
const imagenes = document.querySelectorAll('.imagen-carrusel');

// Función para mover el carrusel
function moverCarrusel() {
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    carrusel.style.transform = `translateX(-${indiceActual * 100}%)`;
    actualizarBotones();
}

// Función para actualizar los botones del carrusel
function actualizarBotones() {
    botonesCarrusel.forEach(boton => boton.style.backgroundColor = '#fff');
    botonesCarrusel[indiceActual].style.backgroundColor = '#ffd700';
}

// Función para mover el carrusel manualmente
botonesCarrusel.forEach(boton => {
    boton.addEventListener('click', () => {
        indiceActual = parseInt(boton.getAttribute('data-index'));
        moverCarrusel();
    });
});

// Deslizar el carrusel automáticamente cada 3 segundos
setInterval(() => {
    indiceActual++;
    moverCarrusel();
}, 5000);

// Iniciar el carrusel
moverCarrusel();
