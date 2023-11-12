

console.log(Math);

const PI = Math.PI;
const E = Math.E;

console.log(PI);
console.log(E);


var num1 = 10.456789;

console.log(num1);
console.log(Math.round(num1));//10  redondea
console.log(Math.round(num1 * 100));//1046
console.log(Math.round(num1 * 100)/100);//10.46


console.log(Math.floor(num1));//obtener el valor entero de un numero sin redondeo
console.log(Math.random());//valores entre 0 y 1

function randomEntre( min,max){
    return Math.floor( Math.random() * (max-min + 1) + min   );
}

console.log(randomEntre(1,6));
console.log(Math.sqrt(6));
console.log(Math.pow(4,2));//4*4 = 16







