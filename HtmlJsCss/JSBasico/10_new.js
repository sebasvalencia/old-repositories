
//con new hace lo mismo pero si necesita q se le expecifique de que tipo es el objeto vacio

function Persona(){
    this.nombre = "Juan";
    this.apellido = "Mendoza";
    this.edad = 30;

    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido;
    };
}

function Persona2(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 30;

    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido;
    };
}

//var juan = {};//un objecto vacio
//var juan = Persona();//undefined se llama una funcion pero no crea un objecto con el this se puede ver
var juan = new Persona();//Objecto vacio pero de tipo persona , crea el espacio en memoria

console.log(juan);
console.log(juan.imprimirPersona());

var andres = new Persona2("Andres", "Jaramillo");//valores por defecto
console.log(andres.imprimirPersona());

