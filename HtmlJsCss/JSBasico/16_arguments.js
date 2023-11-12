

var arguments = 10;


function miFuncion1() {
    console.log(arguments);
}


//arguments hace referencia a los valores q se le manda cuando se invoca la funcion
miFuncion1();


function miFuncion2(a, b, c, d) {
    console.log(arguments);
}

miFuncion2(10);//lo q realmente es


function miFuncion3() {
    console.log(arguments);
}

miFuncion3(20);//lo q realmente es

function miFuncion4(a, b, c, d) {
    console.log(arguments);
}

miFuncion4(1, 2, 3, 4);//lo q realmente es


function miFuncion5(a, b, c, d) {
    console.log(arguments);
}

miFuncion5(1, 2, 3, 4, {});//lo q realmente es



function miFuncion6(a, b, c, d) {

    if (arguments.length !== 4) {
        console.error('La funcion necesita 4 parametros');
        return ;
    }

    console.log(a + b + c + d);

}

miFuncion6(10, 20, 30); //NaN
miFuncion6(10, 20, 30, 40); //NaN
