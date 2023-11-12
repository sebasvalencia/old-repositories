

//Son los q hacen q se dispare una funcion



function eventoClick(arg){
    
    console.log("Me dispare");
    console.log(arg.x, arg.y);

}

function eventoDobleClick(arg){
    console.log("Me dispare doble");
    console.log(arg.x, arg.y);
}

var objecto = document.getElementById("objDemo");
console.log(objecto);

//adicionar eventos al objecto
objecto.addEventListener("keypress", eventoClick);

objecto.addEventListener("click", eventoClick);

objecto.click();//simulando el evento click del boton


