document.addEventListener('DOMContentLoaded', function() {
    // Obtener la canción seleccionada desde localStorage
    const cancionSeleccionada = JSON.parse(localStorage.getItem('cancionSeleccionada'));

    if (cancionSeleccionada) {
        // Actualizar los elementos HTML con los datos de la canción
        document.getElementById('imagenCancion').src = cancionSeleccionada.Imagen;
        document.getElementById('tituloCancion').textContent = cancionSeleccionada.Titulo;
        document.getElementById('artistaCancion').textContent = cancionSeleccionada.Grupo;
        document.getElementById('duracionCancion').textContent = cancionSeleccionada.Duracion;
        document.getElementById('codigoCancion').textContent = cancionSeleccionada.Id;
        document.getElementById('categoriaCancion').textContent = cancionSeleccionada.Categoria;
        document.getElementById('audioSource').src = cancionSeleccionada.Cancion;
        document.getElementById('linkReproduccion').href = cancionSeleccionada.Enlace;
    } else {
        // Mostrar mensaje de error si no se encuentra la canción seleccionada
        document.getElementById('infoCancion').innerHTML = '<p>No se encontró la canción seleccionada.</p>';
    }
});
