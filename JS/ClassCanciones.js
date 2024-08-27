export default class Canciones {
#Id
#Grupo
#Categoria
#Titulo
#Imagen
#Duracion
#Cancion

constructor(Grupo,Categoria,Titulo,Imagen,Duracion,Cancion){
    this.#Id=crypto.randomUUID();
    this.#Grupo =Grupo;
    this.#Categoria = Categoria;
    this.#Titulo =Titulo;
    this.#Imagen =Imagen;
    this.#Duracion = Duracion;
    this.#Cancion =Cancion;
   
}
   
get Id(){
    return this.#Id;
}
 set Id(value){

    this.#Id= value;
 }



 get Grupo (){
     
    return this.#Grupo;

 } 
 set Grupo(value){

  this.#Grupo = value;

 }



 get Categoria (){

    return this.#Categoria;
 }
 set  Categoria(value){
    
     this.#Categoria =value;

 }



 get Titulo (){

    return this.#Titulo;
 }
  
 set  Titulo(value){

    this.#Titulo =value;
 }





 get Imagen (){

    return this.#Imagen;
 }
  
 set  Imagen(value){

    this.#Imagen =value;
 }




 get Duracion (){

    return this.#Duracion;
 }
  
 set  Duracion(value){

    this.#Duracion =value;
 }





 get Cancion (){

    return this.#Cancion;
 }
  
 set  Cancion(value){

    this.#Cancion =value;
 }





 toJSON(){
    return {
       Id :this.Id,
       Grupo :this.#Grupo,
       Categoria :this.#Categoria,
       Titulo : this.#Titulo,
       Imagen :this.#Imagen,
       Duracion:this.#Duracion,
       Cancion:this.#Cancion,
     
    }
}








}






