
document.addEventListener("DOMContentLoaded", () => {
    const Galeria = document.getElementById('carddefotos');
    const formularioCanciones = document.getElementById('formularioCanciones');
    const Buscar = document.getElementById('inputBuscar');
    const detalleTitulo = document.getElementById('detail-title');
    const detalleImagen = document.getElementById('detail-image');
    const detalleGrupo = document.getElementById('detail-group');
    const detalleGenero = document.getElementById('detail-genre');
    const detalleDuracion = document.getElementById('detail-duration');
    const detalleCancion = document.getElementById('detail-song');

    let items = JSON.parse(localStorage.getItem('listadoCancionesKey')) || [];

    function renderGallery() {
        Galeria.innerHTML = '';
        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'col-md-4';
            card.innerHTML = `
                <div class="card mb-4">
                    <img src="${item.Imagen}" class="card-img-top" alt="${item.Titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${item.Titulo}</h5>
                        <a href="../pages/detalle.html?id=${index}" class="btn btn-primary">Ver Detalles</a>
                    </div>
                </div>
            `;
            Galeria.appendChild(card);
        });
    }

    function loadDetail() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (id !== null) {
            const item = items[id];
            detalleTitulo.textContent = item.Titulo;
            detalleImagen.src = item.Imagen   ;
            detalleGrupo.textContent = `Grupo: ${item.Grupo}`;
            detalleGenero.textContent = `Categoria: ${item.Categoria}`;
            detalleDuracion.textContent = `Duración: ${item.Duracion}`;
            detalleCancion.href = item.Cancion;
            detalleCancion.textContent = 'Escuchar Canción';
        }
    }

    if (formularioCanciones) {
        formularioCanciones.addEventListener('submit', (event) => {
            event.preventDefault();
            const Grupo = document.getElementById('Grupo').value;
            const Genero = document.getElementById('Categoria').value;
            const Titulo = document.getElementById('Titulo').value;
            const Imagen = document.getElementById('Imagen').value;
            const Duracion = document.getElementById('Duracion').value;
            const Cancion = document.getElementById('Cancion').value;
            items.push({ Grupo, Genero, Titulo, Imagen, Duracion, Cancion });
            localStorage.setItem('listadoCancionesKey', JSON.stringify(items));
            formularioCanciones.reset();
            renderGallery(); 
        });
    }

    if (Galeria) {
        renderGallery();
    }

    if (detalleTitulo) {
        loadDetail();
    }

    if (Buscar) {
        Buscar.addEventListener('input', () => {
            const query = Buscar.value.toLowerCase();
            Array.from(Galeria.children).forEach((card) => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                if (title.includes(query)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
