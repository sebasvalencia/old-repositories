


//Nos ayudan a mantener el codigo bastante encapsulado
/*
var a = 10;
function cambiarA(){
    a = 30;
}
cambiarA();
console.log(a);
*/

//Una funcion q no tiene nombre () -> invocacion
(function () {
    var a = 10;
    console.log(a);
    function cambiarA() {
        a = 20;
    }
    cambiarA();
    console.log(a);
})();
//-----------------------------------

function ejecutarFuncion( fn ){
    if(fn() === 1){
        return true;
    }else{
        return false;
    }
}


//se crea en el momento 

console.log(ejecutarFuncion(function(){
    console.log("Funcion anonima ejecutada");
    return 1;
}));
















