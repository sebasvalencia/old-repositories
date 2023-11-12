exports.holaMundo = function(valor){
    return valor + " Mundo";
}

exports.sumar = function(valor1, valor2){
    return valor1 + valor2;
}

exports.retornarArreglo = function(){
    return [1,2,3,4,5];
}

exports.retornaObjecto = function(){
    return {
        nombre: "Sebas",
        direccion:{
            pais: 'Colombia'
        }
    }
}