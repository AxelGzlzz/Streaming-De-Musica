import Canciones from "./ClassCanciones.js";


const btnCanciones= document.getElementById('btnCanciones');
const formularioCanciones =document.getElementById('formularioCanciones');
const ModalAdminCanciones =new bootstrap.Modal(document.getElementById('ModalAdminCanciones'));
const  Grupo =document.getElementById('Grupo');
const  Categoria =document.getElementById('Categoria');
const  Titulo =document.getElementById('Titulo');
const  Imagen =document.getElementById('Imagen');
const  Duracion =document.getElementById('Duracion');
const  Cancion =document.getElementById('Cancion');
const listadoCanciones = JSON.parse(localStorage.getItem('listadoCancionesKey')) || [];





const mostrarModal =() => {


    ModalAdminCanciones.show();
    
    }

    
    const limpiarFormulario=()=>{

        formularioCanciones.reset();
    }

   
    const guardarEnLocalStorage =() => {

     localStorage.setItem('listadoCancionesKey',JSON.stringify(listadoCanciones));

    }




    /////////CREAR////////////////////////////////////
    const crearCanciones =(e)=>{
        e.preventDefault();
 
   const NuevaCancion = new Canciones(Grupo.value,Categoria.value,Titulo.value,Imagen.value,Duracion.value,Cancion.value);
   listadoCanciones.push(NuevaCancion);
   limpiarFormulario();
 guardarEnLocalStorage();
 dibujarFila(NuevaCancion);
    
    }
///////////CIERRE CREAR////////////////////////////////



    const cargaCancionesInicial=()=>{

        if(listadoCanciones.lenght !=0){
                                     //invento variable canciones
               listadoCanciones.map((canciones) =>dibujarFila(canciones))

        }
    }
    
    const dibujarFila =(canciones)=> {

      const tabla =document.querySelector('tbody');
      tabla.innerHTML +=`<tr>
                  <td>${canciones.Id}</td>
                  <td>${canciones.Grupo}</td>
                  <td>${canciones.Categoria}</td>
                  <td>${canciones.Titulo}</td>
                  <td><audio controls autoplay>
                    <source src="${canciones.Cancion}" type="audio/mpeg">
                    Tu navegador no soporta la reproducción de audio.
                </audio></td>
                  <td>
                    <button class="btn btn-outline-danger mb-2 mb-md-0">Eliminar</button>
                    <button class="btn btn-outline-success">Modificar</button>
                  </td>

                </tr>`

    }
   






    btnCanciones.addEventListener('click',mostrarModal);
    formularioCanciones.addEventListener('submit',crearCanciones);
    cargaCancionesInicial();
