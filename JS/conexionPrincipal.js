document.addEventListener('DOMContentLoaded', function() {
    const resultContainer = document.getElementById('result');

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
