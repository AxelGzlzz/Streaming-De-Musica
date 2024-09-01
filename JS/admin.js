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
let ID



const mostrarModal = () => {
  ModalAdminCanciones.show();
};
const ocultarModal=()=>{
  ModalAdminCanciones.hide()
}
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
  modificar()

  }
};



/////////CREAR////////////////////////////////////
const crearCanciones = () => {
 Grupo.value=""
  estoyCreandoo = true;
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
  laCancionfuecreadoventana();
};

const cargaCancionesInicial = () => {
  if (listadoCanciones.length !== 0) {
    listadoCanciones.forEach(cancion => dibujarFila(cancion));
  }
};


const dibujarFila = (canciones) => {
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${canciones.Id}</td>
    <td>${canciones.Grupo}</td>
    <td>${canciones.Categoria}</td>
    <td>${canciones.Titulo}</td>
    <td>
      <audio controls>
        <source src="${canciones.Cancion}" type="audio/mpeg">
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </td>
    <td>
      <button class="btn btn-outline-danger mb-2 mb-md-0" onclick="borrarCanciones('${canciones.Id}')">Eliminar</button>
      <button class="btn btn-outline-success" onclick="preparar('${canciones.Id}')">Modificar</button>
    </td>
  `;

  fila.addEventListener("click", () => mostrarDetallesCancion(canciones));

  Tabla.appendChild(fila);
};

///////////CIERRE CREAR////////////////////////////////



// preparar para Modificar
window.preparar=(Id)=>{
 estoyCreandoo=false

 ID=Id
 mostrarModal()
 
 const buscarMusica=listadoCanciones.find((cancion)=>cancion.Id===Id)
if(buscarMusica){
  Grupo.value=buscarMusica.Grupo;
  Categoria.value=buscarMusica.Categoria;
  Titulo.value=buscarMusica.Titulo;
  Imagen.value=buscarMusica.Imagen;
  Duracion.value=buscarMusica.Duracion;
  Cancion.value=buscarMusica.Cancion;
 

}
 
}



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

// modificar
const modificar=()=>{
  const editar=listadoCanciones.findIndex((cancion)=>cancion.Id===ID)
  console.log(editar)
 if(editar!==-1){
  listadoCanciones[editar].Grupo=Grupo.value;
  listadoCanciones[editar].Categoria=Categoria.value;
  listadoCanciones[editar].Titulo=Titulo.value;
  listadoCanciones[editar].Duracion=Duracion.value;
  listadoCanciones[editar].Imagen=Imagen.value;
  listadoCanciones[editar].Cancion=Cancion.value
 
  guardarEnLocalStorage()
 location.reload()

  ocultarModal()
 }
  
}

//////////////Ventana Cancion crear con exito/////////////
const laCancionfuecreadoventana = () => {
  Swal.fire({
    title: "La Cancion Fue creada con exito!!",
    text: "Disfrute su nueva cancionn!",
    icon: "success",
  });
};
//////////////Cierre Cancion Borrar con exito/////////////



//////////////Mostrar Detalle de Cancion/////////////
const mostrarDetallesCancion = (cancion) => {
  document.querySelector(".contenedorPadre .infoCancion p:nth-child(1)").innerHTML = `<strong>Codigo:</strong> ${cancion.Id}`;
  document.querySelector(".contenedorPadre .infoCancion p:nth-child(2)").innerHTML = `<strong>Titulo:</strong> ${cancion.Titulo}`;
  document.querySelector(".contenedorPadre .infoCancion p:nth-child(3)").innerHTML = `<strong>Artista:</strong> ${cancion.Grupo}`;
  document.querySelector(".contenedorPadre .infoCancion p:nth-child(4)").innerHTML = `<strong>Duracion:</strong> ${cancion.Duracion}`;
  document.querySelector(".contenedorPadre .infoCancion p:nth-child(5)").innerHTML = `<strong>Cancion:</strong> ${cancion.Categoria}`;
  document.querySelector(".contenedorPadre .logoCancion img").src = cancion.Imagen;
  document.querySelector(".contenedorPadre .logoCancion a").href = cancion.Cancion;
};





btnCanciones.addEventListener("click", mostrarModal);
formularioCanciones.addEventListener("submit", administradorDeCanciones);
cargaCancionesInicial();
