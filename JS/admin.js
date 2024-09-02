import Canciones from "./ClassCanciones.js";



const btnCanciones = document.getElementById("btnCanciones");
const formularioCanciones = document.getElementById("formularioCanciones");
const ModalAdminCanciones = new bootstrap.Modal(
  document.getElementById("ModalAdminCanciones")
);
const Grupo = document.getElementById("Grupo");
const Categoria = document.getElementById("Categoria");
const Titulo = document.getElementById("Titulo");
const Imagen = document.getElementById("Imagen");
const Duracion = document.getElementById("Duracion");
const Cancion = document.getElementById("Cancion");
const Tabla = document.querySelector("tbody");
const listadoCanciones =
  JSON.parse(localStorage.getItem("listadoCancionesKey")) || [];
let estoyCreandoo = true;
let ID;

const mostrarModal = () => {
  ModalAdminCanciones.show();
};
const ocultarModal = () => {
  ModalAdminCanciones.hide();
};
const limpiarFormulario = () => {
  formularioCanciones.reset();
};

const guardarEnLocalStorage = () => {
  localStorage.setItem("listadoCancionesKey", JSON.stringify(listadoCanciones));
};

const administradorDeCanciones = (e) => {
  e.preventDefault();
  if (estoyCreandoo) {
    crearCanciones();
  } else {
    modificar();
  }
};

/////////CREAR////////////////////////////////////
const crearCanciones = () => {
  estoyCreandoo = true;
 
    // Crear nueva canción si las validaciones son exitosas
    const NuevaCancion = new Canciones(
      Grupo.value,
      Categoria.value,
      Titulo.value,
      Imagen.value,
      Duracion.value,
      Cancion.value
    );
    
    // Agregar nueva canción a la lista y guardar en localStorage
    listadoCanciones.push(NuevaCancion);
    limpiarFormulario();
    guardarEnLocalStorage();
    dibujarFila(NuevaCancion);
    laCancionfuecreadoventana();
  
};



const cargaCancionesInicial = () => {
  if (listadoCanciones.length !== 0) {
    listadoCanciones.forEach(cancion => {
      dibujarFila(cancion);
      actualizarPaginaPrincipal(cancion); // Cargar en la página principal
    });
  }
};

const dibujarFila = (canciones) => {
  Tabla.innerHTML += `<tr>
                  <td>${canciones.Id}</td>
                  <td>${canciones.Grupo}</td>
                  <td>${canciones.Categoria}</td>
                  <td>${canciones.Titulo}</td>
                  <td><audio controls autoplay>
                    <source src="${canciones.Cancion}" type="audio/mpeg">
                    Tu navegador no soporta la reproducción de audio.
                </audio></td>
                  <td>
                    <button class="btn btn-outline-danger mb-2 mb-md-0" onclick="borrarCanciones('${canciones.Id}')">Eliminar</button>
                    <button class="btn btn-outline-success" onclick="preparar('${canciones.Id}')">Modificar</button>
                  </td>
                </tr>`;
};

const actualizarPaginaPrincipal = (canciones) => {
  const losMasEscuchados = document.getElementById("losMasEscuchados");
  losMasEscuchados.innerHTML += `
    <div class="col-12 col-md-4 my-3">
      <img src="${canciones.Imagen}" alt="Portada de ${canciones.Titulo}" class="img-fluid rounded">
      <h5>${canciones.Titulo}</h5>
      <p>${canciones.Grupo} - ${canciones.Categoria}</p>
      <audio controls>
        <source src="${canciones.Cancion}" type="audio/mpeg">
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </div>`;
};

///////////CIERRE CREAR////////////////////////////////
// preparar para Modificar
window.preparar = (Id) => {
  estoyCreandoo = false;
  ID = Id;
  mostrarModal();

  const buscarMusica = listadoCanciones.find((cancion) => cancion.Id === Id);
  if (buscarMusica) {
    Grupo.value = buscarMusica.Grupo;
    Categoria.value = buscarMusica.Categoria;
    Titulo.value = buscarMusica.Titulo;
    Imagen.value = buscarMusica.Imagen;
    Duracion.value = buscarMusica.Duracion;
    Cancion.value = buscarMusica.Cancion;
  }
};

/////////BORRAR CANCIONES/////////////////
window.borrarCanciones = (Id) => {
  Swal.fire({
    title: "¿Seguro que quieres borrar la canción?",
    text: "Al borrar no habrá forma de recuperar los datos.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#252850",
    cancelButtonColor: "#8B0000",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      const posCanciones = listadoCanciones.findIndex(
        (canciones) => canciones.Id === Id
      );

      listadoCanciones.splice(posCanciones, 1);
      guardarEnLocalStorage();
      Tabla.removeChild(Tabla.children[posCanciones]);
      Swal.fire({
        title: "Eliminaste la canción seleccionada.",
        text: "La canción fue eliminada correctamente.",
        icon: "success",
      });
    }
  });
};

//////////////////CIERRE BORRAR//////////////////////////

// Modificar canción
const modificar = () => {
  const editar = listadoCanciones.findIndex((cancion) => cancion.Id === ID);
  if (editar !== -1) {
    listadoCanciones[editar].Grupo = Grupo.value;
    listadoCanciones[editar].Categoria = Categoria.value;
    listadoCanciones[editar].Titulo = Titulo.value;
    listadoCanciones[editar].Duracion = Duracion.value;
    listadoCanciones[editar].Imagen = Imagen.value;
    listadoCanciones[editar].Cancion = Cancion.value;
    guardarEnLocalStorage();
    location.reload();
    ocultarModal();
  }
};

//////////////Ventana Cancion crear con exito/////////////
const laCancionfuecreadoventana = () => {
  Swal.fire({
    title: "La Canción fue creada con éxito!",
    text: "Disfruta tu nueva canción.",
    icon: "success",
  });
};


document.addEventListener('DOMContentLoaded', function() {
  const formularioCanciones = document.getElementById('formularioCanciones');

  formularioCanciones.addEventListener('submit', function(event) {
      event.preventDefault();

 
      // Validar campos
      if (!Imagen || !Titulo) {
          alert('Por favor, ingrese la URL de la imagen y el título.');
          return;
      }

      // Obtener las imágenes almacenadas
      const listadoCanciones = JSON.parse(localStorage.getItem('listadoCancionesKey')) || [];
      listadoCanciones.push({ Imagen: Imagen, Imagen: Imagen });
      guardarEnLocalStorage();

      // Cerrar el modal y limpiar el formulario
      $('#ModalAdminCanciones').modal('hide');
      formularioCanciones.reset();
  });
});











btnCanciones.addEventListener("click", mostrarModal);
formularioCanciones.addEventListener("submit", administradorDeCanciones);
cargaCancionesInicial();
