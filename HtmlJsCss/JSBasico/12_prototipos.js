



//Supongamos q se tiene q agregar un metodo o propiedades pero no se puede crear en el objecto
//los prototipos permiten expandir el objecto
//Hacer mas eficiente el uso de prototipos
//Propiedades y metodos q son heredadas por ser un tipo de dato

function Persona(){
    this.nombre = "Fernando";
    this.apellido = "Herrera";
    this.edad = 30;

    /*this.imprimirInfo = function(){
        console.log(`${this.nombre} ${this.apellido} (${this.edad})`);
    }*/
}

Persona.prototype.pais = "Costa Rica";

//Se define un solo prototipo , solo esta una vez en memoria
Persona.prototype.imprimirInfo = function(){
    console.log(`${this.nombre} ${this.apellido} (${this.edad})`);
}

Number.prototype.esPositivo = function(){
    return (this > 0) ? true : false;
}



var fer = new Persona();

console.log(fer);
console.log(fer.pais);//luego de mirar en el objecto mira en los __proto__
console.log(fer.imprimirInfo());
//fer.imprimirInfo();


