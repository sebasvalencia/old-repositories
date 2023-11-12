
//todo mi archivo sea ejecutado modo archivo pero solo mi archivo
//hago una funcion anonima
//modo estricto debe estar encampsulado


(function () {
    function getNombre() {
        "use strict";
        var nombre2 = "Juan";
        return nombre2;
    }

    var nombre = "Fernando";
    console.log(nombre);
    console.log(getNombre());

})();

/*
function getNombre() {
    "use strict";
    var nombre2 = "Juan";
    return nombre2;
}

var nombre = "Fernando";
console.log(nombre);
console.log(getNombre());

*/



