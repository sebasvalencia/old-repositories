


var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function () {
        var salida = this.marca + " - " + this.color;
        return salida;
    }
}


console.log(carro.imprimir());

var logCarro = function (arg1, arg2) {
    console.log("Carro: ", this.imprimir());
    console.log("Argumentos: ", arg1, arg2);//Argumentos:  undefined undefined porq no se le pasa nada como argumentos
    console.log("=============================");
}
//console.log(logCarro());//No se imprime porq va al objecto global por la funcion imprimir()

var logModeloCarro = logCarro.bind(carro);//le pasamos el objecto carro a la funcion para q sepa en q this esta
logModeloCarro();//establecer el objecto y usar el this
logModeloCarro("abc","xyz");


//-------CALL - APPLY
logModeloCarro.call(carro, "123", 456);//la diferencia entre el call y el apply es q este ultimo espera dos param

logModeloCarro.apply(carro, ["asd", "que"]);

//-------- Funciones prestadas
var carro2 = {
    color:"Rojo",
    marca:"Toyota"
}

console.log(carro.imprimir.call(carro2));//carro2 invoca la funcion imprimir de carro








