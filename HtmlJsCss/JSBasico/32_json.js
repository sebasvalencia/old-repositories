



//Es un objecto
//donde los string q indican las propiedades van en comillas dobles

var objectoJS = {
    nombre: "Fernando",
    edad: 30
}

console.log("Objecto litera", objectoJS);

 //convierte un objecto js a un JSON objecto
var jsonString = JSON.stringify(objectoJS);
console.log(jsonString);


var objectoDesdeJson = JSON.parse(jsonString);
console.log(objectoDesdeJson);