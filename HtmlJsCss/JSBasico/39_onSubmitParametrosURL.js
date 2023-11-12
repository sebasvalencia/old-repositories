


function validar(){
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;

    if(nombre.length < 1){
        return false;
    }

    if(apellido.length < 1){
        return false;
    }
    return true;
}


console.log(window.location);
//sacar el search tiene los datos del url
console.log(window.location.search.split("&"));
//console.log(getParamURL("txtNombre"));
