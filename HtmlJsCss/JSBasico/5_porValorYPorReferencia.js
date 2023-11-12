

var a = 10;
var b = a;//Se pasa por valor

console.log("a: ", a);
console.log("b: ", b);

a = 20;

console.log("a: ", a);
console.log("b: ", b);

var c = {
    nombre: "Juana"
}

var d = c;//Siempre se pasa el valor por referencia

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "Maria";

console.log("c: ", c);
console.log("d: ", d);

d.nombre= "Pedro";

console.log("c: ", c);
console.log("d: ", d);
