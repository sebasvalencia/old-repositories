

//var a = 30; //la toma si no hay dentro de la funcion

//lee el archivo y reserva en memoria lo q encuentre lo mete en el objecto global
function primeraFuncion(){
    var a = 20;//si no esta aca la toma del global
    console.log(a); //si no esta local o global saca error
}

primeraFuncion();//Llama la funcion


//toda funcion regresa algo
function pruebaRegresa(){} //revisar el window ahi aparece y tiene su definicion con unas funciones q el motor pone



function otraFuncion(){}

var a = otraFuncion();

console.log(a);

function otraFuncion2(){
    console.log("Invoca");
}

var otra = otraFuncion2;//no se esta invocando le faltan los ()

function imprimir( nombre, apellido ){
    console.log(nombre + " " + apellido);
}

imprimir("Juan", "Padilla");//se le manda una variable anonimo, es porq se crea en el momento q se le envia a la funcion
imprimir("Jose");
imprimir();


function imprimir2( nombre, apellido ){
    //validar campos

    /*if(apellido === undefined){
        apellido = "xxx";
    }*/

    apellido = apellido || "xxx";


    console.log(nombre + " " + apellido);
}

imprimir2("Juan", "Padilla");//se le manda una variable anonimo, es porq se crea en el momento q se le envia a la funcion
imprimir2("Jose");
imprimir2();

function imprimir3( persona ){
    console.log(persona.nombre + " " + persona.apellido);
    persona.nombre = "Maria";
}


imprimir3({ nombre: "Juan2", apellido: "Padilla2"}); //usando objetos anonimos

var obj= { 
    nombre: "Juan3",
    apellido: "Padilla3"
};

imprimir3(obj);

console.log(obj);


function imprimir4( fn ){
    fn();
}

//enviando como parametro una funcion anonima
imprimir4(function(){
    console.log("Funcion anonima");
});

var varDeUnaNoAnonima = function(){
    console.log("Mi funcion");
}

imprimir4(varDeUnaNoAnonima);