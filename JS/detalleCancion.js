
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('gallery');
    const adminForm = document.getElementById('formularioCanciones');
    const searchInput = document.getElementById('inputBuscar');
    const detailTitle = document.getElementById('detail-title');
    const detailImage = document.getElementById('detail-image');
    const detailGroup = document.getElementById('detail-group');
    const detailGenre = document.getElementById('detail-genre');
    const detailDuration = document.getElementById('detail-duration');
    const detailSong = document.getElementById('detail-song');

    let items = JSON.parse(localStorage.getItem('listadoCancionesKey')) || [];

    function renderGallery() {
        gallery.innerHTML = '';
        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'col-md-4';
            card.innerHTML = `
                <div class="card">
                    <img src="${item.Imagen}" class="card-img-top" alt="${item.Titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${item.Titulo}</h5>
                        <a href="../html/detalle.html?id=${index}" class="btn btn-primary">Ver Detalles</a>
                    </div>
                </div>
            `;
            gallery.appendChild(card);
        });
    }

    function loadDetail() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (id !== null) {
            const item = items[id];
            detailTitle.textContent = item.Titulo;
            detailImage.src = item.imageUrl;
            detailGroup.textContent = `Grupo: ${item.Grupo}`;
            detailGenre.textContent = `Género: ${item.Genero}`;
            detailDuration.textContent = `Duración: ${item.Duracion}`;
            detailSong.href = item.Cancion;
            detailSong.textContent = 'Escuchar Canción';
        }
    }

    if (adminForm) {
        adminForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const group = document.getElementById('Grupo').value;
            const genre = document.getElementById('Categoria').value;
            const title = document.getElementById('Titulo').value;
            const imageUrl = document.getElementById('Imagen').value;
            const duration = document.getElementById('Duracion').value;
            const songUrl = document.getElementById('Cancion').value;
            items.push({ group, genre, title, imageUrl, duration, songUrl });
            localStorage.setItem('listadoCancionesKey', JSON.stringify(items));
            adminForm.reset();
            renderGallery(); // Actualizar la galería en la página de administración
        });
    }

    if (gallery) {
        renderGallery();
    }

    if (detailTitle) {
        loadDetail();
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            Array.from(gallery.children).forEach((card) => {
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
