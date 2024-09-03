document.addEventListener('DOMContentLoaded', function() {
    const resultContainer = document.getElementById('Galeria');

    function displayItems(items) {
        resultContainer.innerHTML = ''; // Limpiar resultados anteriores
        if (items.length > 0) {
            items.forEach(item => {
                const resultHtml = `
                    <div class="col-md-4">
                        <div class="card">
                            <img src="${item.Imagen}" class="card-img-top" alt="${item.Titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${item.Titulo}</h5>
                            </div>
                        </div>
                    </div>
                `;
                resultContainer.innerHTML += resultHtml;
            });
        } else {
            resultContainer.innerHTML = '<p>No se encontraron resultados.</p>';
        }
    }

    document.getElementById('formularioBuscar').addEventListener('submit', function(event) {
        event.preventDefault();
        const inputBuscar = document.getElementById('inputBuscar').value.toLowerCase();
        
        // Obtener datos del localStorage
        const datosStorage = JSON.parse(localStorage.getItem('listadoCancionesKey')) || [];
        
        // Filtrar resultados
        const resultado = datosStorage.filter(item => item.Titulo.toLowerCase().includes(inputBuscar));
        
        // Mostrar resultados
        displayItems(resultado);
    });

    // Mostrar todos los datos al cargar la página
    const datosStorage = JSON.parse(localStorage.getItem('listadoCancionesKey')) || [];
    displayItems(datosStorage);
});
document.addEventListener('DOMContentLoaded', function() {
    const Galeria = document.getElementById('Galeria');
    const detalleCancion = document.getElementById('detalleCancion');
    const listadoCanciones = JSON.parse(localStorage.getItem('listadoCancionesKey')) || [];

    function mostrarDetalleCanciones(cancion) {
        detalleCancion.innerHTML = `
            <h2>Detalles de la Canción</h2>
            <h3>Categoría: ${cancion.Categoria}</h3>
            <div class="row">
                <div class="col-md-6">
                    <img src="${cancion.Imagen}" alt="${cancion.Titulo}" class="img-fluid rounded mb-5">
                </div>
                <div class="col-md-6">
                    <p><strong>Código:</strong> ${cancion.Id}</p>
                    <p><strong>Título:</strong> ${cancion.Titulo}</p>
                    <p><strong>Artista:</strong> ${cancion.Grupo}</p>
                    <p><strong>Duración:</strong> ${cancion.Duracion}</p>
                    <audio controls>
                        <source src="${cancion.Cancion}" type="audio/mpeg">
                        Tu navegador no soporta la reproducción de audio.
                    </audio>
                </div>
            </div>
        `;
        // Muestra el contenedor de detalles y desplázate hacia él
        detalleCancion.style.display = 'block';
        detalleCancion.scrollIntoView({ behavior: 'smooth' });
    }

    // Crear tarjetas para cada canción en el LocalStorage
    listadoCanciones.forEach(cancion => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <img src="${cancion.Imagen}" class="card-img-top" alt="${cancion.Titulo}">
                <div class="card-body">
                    <h5 class="card-title">${cancion.Titulo}</h5>
                    <p>${cancion.Grupo} - ${cancion.Categoria}</p>
                </div>
            </div>
        `;

        // Añadir evento de clic para mostrar detalles
        card.addEventListener('click', function() {
            mostrarDetalleCanciones(cancion);
        });

        Galeria.appendChild(card);
    });

    // Si no hay canciones, muestra un mensaje
    if (listadoCanciones.length === 0) {
        Galeria.innerHTML = "<p>No hay canciones disponibles.</p>";
    }
});