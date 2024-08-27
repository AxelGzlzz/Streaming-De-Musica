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


    
    const crearCanciones =(e)=>{
        e.preventDefault();
 
   const NuevaCancion = new Canciones(Grupo.value,Categoria.value,Titulo.value,Imagen.value,Duracion.value,Cancion.value);
 
   listadoCanciones.push(NuevaCancion);
   console.log(NuevaCancion);
   limpiarFormulario();
   
 guardarEnLocalStorage();

    
    }
    
    



    btnCanciones.addEventListener('click',mostrarModal);
    formularioCanciones.addEventListener('submit',crearCanciones);
