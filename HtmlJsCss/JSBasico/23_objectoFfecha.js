

var hoy = new Date();
console.log(hoy);

var fechaMilisegundos = new Date(1);//
console.log(fechaMilisegundos);

var fechaFija = new Date(2016,9,21,23,10,15,1);
console.log(fechaFija);

var fFija = new Date(2016, 9);//las fechas son en base 0
console.log(fFija);

console.log(hoy.getFullYear());//año
console.log(hoy.getDate());//dia
console.log(hoy.getMonth());//mes
console.log(hoy.getHours());//horas
console.log(hoy.getSeconds());//sec


console.log(hoy.getTime());//tiempo en milisegundos de una fecha

//cuanto tiempo dura una fucnion en ejecutarse
var inicio = new Date();

for (var index = 0; index < 15000; index++) {
    console.log("Algo...");
    

}
var fin = new Date();

console.log(inicio);
console.log(fin);

var duracion = fin.getTime() - inicio.getTime();
console.log(duracion/1000, "Segundos");//tiempo q se demora ejecutando un ciclo en segundos










