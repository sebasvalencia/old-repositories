


for (var index = 0; index <= 10; index++) {
    console.log(index);

}


var Persona = function () {
    this.nombre = "Juan",
        this.apellido = "Pineda",
        this.edad = 18;
};

var juan = new Persona();
Persona.prototype.direccion = "San Jose";

for (var propiedad in juan) {
    console.log(propiedad, juan[propiedad]);
}

for (var propiedad2 in juan) {
    console.log(juan.hasOwnProperty(propiedad2));//3 true 1 false
    console.log(propiedad, ":", juan[propiedad]);
}

for (var key in juan) {
    if (!juan.hasOwnProperty(key)) {//permite conocerse a si mismo
        continue;

    }
    console.log(propiedad2, ":", juan[propiedad2]);

    if (juan.hasOwnProperty(key)) {
        continue;

    }
    console.log(propiedad2, ":", juan[propiedad2]);


}


for (num in [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    console.log(num);//imprime los indices
}

[1, 2, 3, 4, 5, 6, 7, 8, 9, false, "abc", { nomb: 123 }].forEach(function (valor) {
    console.log(valor);
})



