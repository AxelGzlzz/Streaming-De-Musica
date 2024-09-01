import Canciones from "./ClassCanciones.js";
const Titulo = document.getElementById("Titulo");
const Imagen = document.getElementById("Imagen");

document.addEventListener('DOMContentLoaded', function() {
    const Galeria = document.getElementById('Galeria');
    const listadoCanciones = JSON.parse(localStorage.getItem('listadoCancionesKey')) || [];

    listadoCanciones.forEach(imageDatos => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <img src="${imageDatos.Imagen}" class="card-img-top" alt="${imageDatos.Titulo}">
                <div class="card-body">
                    <h5 class="card-title">${imageDatos.Titulo}</h5>
                </div>
            </div>
        `;
        Galeria.appendChild(card);
    });
});
