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
const listadoCanciones =JSON.parse(localStorage.getItem("listadoCancionesKey")) || [];

const mostrarModal = () => {
  ModalAdminCanciones.show();
};

const limpiarFormulario = () => {
  formularioCanciones.reset();
};

const guardarEnLocalStorage = () => {
  localStorage.setItem("listadoCancionesKey", JSON.stringify(listadoCanciones));
};

/////////CREAR////////////////////////////////////
const crearCanciones = (e) => {
  e.preventDefault();

  const NuevaCancion = new Canciones(
    Grupo.value,
    Categoria.value,
    Titulo.value,
    Imagen.value,
    Duracion.value,
    Cancion.value
  );
  listadoCanciones.push(NuevaCancion);
  limpiarFormulario();
  guardarEnLocalStorage();
  dibujarFila(NuevaCancion);
};
///////////CIERRE CREAR////////////////////////////////



const cargaCancionesInicial = () => {
  if (listadoCanciones.lenght != 0) {
    //invento variable canciones
    listadoCanciones.map((canciones) => dibujarFila(canciones));
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
                    <button class="btn btn-outline-success">Modificar</button>
                  </td>

                </tr>`;
};


/////////BORRAR CANCIONES/////////////////
window.borrarCanciones = (Id) => {
  Swal.fire({
    title: "¿Seguro que quieres borrar la cancion?",
    text: "Al borrar no habra ninguna forma de recuperar los datos!!!!!",
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
        title: "Eliminaste la cancion Seleccionada!!!",
        text: "la cancion fue eliminado correctamente.",
        icon: "success",
      });
    }
  });
};
//////////////////CIERRE BORRAR//////////////////////////











btnCanciones.addEventListener("click", mostrarModal);
formularioCanciones.addEventListener("submit", crearCanciones);
cargaCancionesInicial();
