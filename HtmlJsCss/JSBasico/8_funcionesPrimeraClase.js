

//las funciones son objectos
function a(){
    console.log("Funcion a");
}

a();

a.nombre = "Maria";

console.log(a.name); //regrese el nombre de la funcion

a.apply = "María"; //sobreescribimos ese mecanismo
