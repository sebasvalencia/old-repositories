

//Mecanismo para buscar patron en cadenas

var reg1 = RegExp("a");
var reg2 = /a/;
var reg3 = /A/;

var texto = "Hola Mundo";

var arr = texto.match(reg1);//retorna un arreglo si al menos hay una conincidencia , sino regresa un nulo
var arr = texto.match(reg2);

console.log(arr);
var arr = texto.match(reg3);

var arr = texto.match(/^H/);//primera pos de la letra H
console.log(arr);

var arr = texto.match(/o$/);//al final la ultima letra
console.log(arr);

var arr = texto.match(/.../);//cualquier caracter los primeros 3
console.log(arr);

var arr = texto.match(/^.o/);//cualquier caracter y seguido una o
console.log(arr);

var texto = "Hola mundo 12345.";

var arr = texto.match(/[0-9]/);
console.log(arr);

var arr = texto.match(/[06789]/);
console.log(arr);

var arr = texto.match(/[a-z]/);
console.log(arr);

var arr = texto.match(/[A-Z]/);
console.log(arr);

var arr = texto.match(/^H[a-z]/);//Una H incial y luego cualquier letra
console.log(arr);

var arr = texto.match(/^H[aeiou]/);//H y cualquier vocal
console.log(arr);

var texto ="Hola Mundo.\n12345";

var arr = texto.match(/\s/);//busca un separador
console.log(arr);

var arr = texto.match(/\w/);//[a-zA-Z0-9]
console.log(arr);

var arr = texto.match(/\d/);//[0-9]
console.log(arr);

//i = insensible
//g = todas apariciones
//m = multilinea

var arr = texto.match(/m/i);
console.log(arr);

var arr = texto.match(/[aeiou]/ig);
console.log(arr);

var arr = texto.match(/[aeiou]|á/igm); // | o logico los espacios cuentan
console.log(arr);

var texto ="Hola Mundoooo";

var arr = texto.match(/o+/g);
console.log(arr);

var arr = texto.match(/o?/g);//solo las o
console.log(arr);

var arr = texto.match(/o*/g);//solo las o
console.log(arr);

var arr = texto.match(/o{2,3}/g);//solo las o
console.log(arr);

var texto = "Aeropuerto";
var arr = texto.match(/\w{2,2}/ig);//solo las o
console.log(arr);

var texto = "La respuesta de la suma es : 45 + 60 = 105";
var arr = texto.match(/\d{1,}|respuesta/ig);
console.log(arr);

















