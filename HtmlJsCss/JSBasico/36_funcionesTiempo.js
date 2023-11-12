



//dos fnciones para manejar
///para ejecutar un codigo pasado x cantdad de segundos

setTimeout(function(){
    console.log("paso un segundo");
}, 1000 );

//cada cuanto se repite
var seg= 0;
var intervalo = setInterval(function(){
    seg++;
    console.log("seg", seg);
    if (seg ===3){
        clearInterval(intervalo);//this aca apunta al obj grobal
    }
}, 1000);

nombre = "Pedro";
edad = 60;


var juan = {
    nombre:"Juan",
    edad: 30,
    imprimir: function(){
        var self = this;
        setTimeout(function(){
            console.log(self.nombre, self.edad);
        }, 1000);        
    }
}

juan.imprimir();









