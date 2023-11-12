

//contexto local

function crearFunciones() {

    //contexto de la funcion

    var arr = [];
    var numero = 1;

    for (var numero = 1; numero <= 3; numero++) {
        arr.push(
            (function (numero) {//crear funcion anonima q se ejecuta en el momento
                return function () {
                    console.log(numero);
                }
            }
            )(numero)

        );

    }


    /*arr.push(
        (function (numero) {//crear funcion anonima q se ejecuta en el momento
            return function () {
                console.log(numero);
            }
        }
        )(numero)

    );*/

    /*var numero = 2;

    arr.push(function () {
        console.log(numero);
    });

    var numero = 3;

    arr.push(function () {
        console.log(numero);
    });*/

    //numero = 10;
    return arr;
}

var funciones = crearFunciones();
funciones[0]();
funciones[1]();
funciones[2]();






