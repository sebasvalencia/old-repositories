



document.onmousedown = function (arg) {
    //boton 2 izq, boton 0 der
    if (arg.button === 2) {
        console.log(arg);
        alert("Clcik bloqueado");
        return;
    }

}

document.onmouseup = function(){
    var texto = window.getSelection().toString();
    console.log(texto);
    
}

