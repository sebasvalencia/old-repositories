

var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San Jose",
        edificio: {
            nombre: "ed 1",
            telefono: "222-454"
        }

    }
};

console.log(persona.nombre);

console.log(persona.direccion.pais);

//agregar una propiedad nueva al obj persona
persona.direccion.zipcode = 00000;
console.log(persona.direccion);

console.log(persona.direccion.edificio.telefono);

//usar valores por referencia para hacer mas simples las cosas
//apunta al lugar de memoria de persona.direccion.edificio
var edificio = persona.direccion.edificio; 

edificio.nopiso = 8;

console.log(persona);

//Notacion de corchetes para acceder directamente
//para mostrar datos dinamicamente
console.log(persona['nombre']);
console.log(persona['direccion']['pais']);

var campo = "edad";
var campo2 = "edad2";
console.log(persona[campo]);
console.log(persona[campo2]);
console.log(persona.edad2);






