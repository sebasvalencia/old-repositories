

//Un objecto tipo string es un objecto

var a = new String("El gran capitan america");//no es un arreglo es un objecto

console.log(a[0]);//Usando la notacion de corchetes

var b = "Herrera";
console.log(b[0]);//Usando la notacion de corchetes

console.log(a.toUpperCase());//Todas en mayusculas
console.log(a.toLowerCase());//todas en minisculas

var i = a.indexOf("a");//encuntra dode esta la ocurrencia
console.log("La letra esta en la pos: " + i);

i = a.lastIndexOf("n");
console.log("La letra esta en la pos: " + i);


var nombre = a.substr(6);//Corta un pedazo de una cadena
console.log(nombre);
a.subs
var nombre = a.substr(6,3);//Corta un pedazo de una cadena
console.log(nombre);

var nombre = a.substr(0, a.indexOf(" "));//Corta un pedazo de una cadena hasta q encuentra un espacio
console.log(nombre);

var split = a.split();//divide una cadena por algun identificador 
console.log(split);

var split = a.split(" ");
console.log(split);//split y luego contarlos
console.log(split.length);

document.write("Hola Mundo!");//escribe en la pagina 
document.write(a.italics());//escribe en la pagina de forma italica 











