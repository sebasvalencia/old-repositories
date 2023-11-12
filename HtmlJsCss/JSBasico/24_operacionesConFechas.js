

var fecha = new Date(2016,9,20);
console.log(fecha);

//Sumarle 5 dias a la fecha
fecha.setDate(25);
console.log(fecha);

fecha.setDate(32);//pasa al siguiente dia y mes
console.log(fecha);

//Cambiar el prototipo
Date.prototype.sumarDias = function(dias){
    this.setDate(this.getDate() + dias);
    return this;
}

Date.prototype.sumarAnios = function(anios){
    this.setFullYear(this.getFullYear() + anios);
    return this;
}

console.log(fecha.sumarDias(3));
console.log(fecha.sumarAnios(-16));



