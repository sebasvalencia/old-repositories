

var a = 10;
var b = new Number(10);

console.log(a === b); //false
console.log(a == b);//true

console.log(a.toFixed(2));//coloca la cantidad de decimales

a = a.toString();
console.log(a);

a = 10.456789;
console.log(a.toPrecision(4));//precision lo deja 10.46

var b = new Number("20");
console.log(b.valueOf());//Retorna el valor primitivo del objecto numerico
