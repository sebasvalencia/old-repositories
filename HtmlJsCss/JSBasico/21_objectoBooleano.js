


var a = true;
var b = false;

var c = new Boolean(); //false por defecto
console.log(c);

var c = new Boolean("-1"); //false por defecto
console.log(c);

var c = new Boolean("-1"); //true siempre porq es una cadena
console.log(c);

var c = new Boolean(0); //false
console.log(c);

var c = new Boolean(NaN); //false
console.log(c);

var c = new Boolean(null); //false
console.log(c);

var c = new Boolean(Infinity); //true
console.log(c);

var c = new Boolean(-Infinity); //true
console.log(c);

var c = new Boolean(undefined); //false
console.log(c);




