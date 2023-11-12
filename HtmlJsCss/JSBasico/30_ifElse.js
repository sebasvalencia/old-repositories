

var a = 10;
var b = 20;

var c = (a > b) ? a : b;
console.log(c);


var c = (a>b) ? function(){
    console.log("A es mayor a B");
    return a;
}() : function(){//con los () la ejecuta
    console.log("B es mayor a A");
    return b;
}();

console.log(c);


function getNombre(nombre){
    var nomb = nombre || "<Sin nombre>";
    console.log(nomb);
}

getNombre();
getNombre("ABC");

function getNombre2(nombre){
    var nomb1 = nombre || null || "<Sin nombre>";
    var nomb2 = null || null || undefined;
    var nomb3 = null || null || 123;
    var nomb4 = null || null || null;
    console.log(nomb1);
    console.log(nomb2);
    console.log(nomb3);
    console.log(nomb4);

}
getNombre2();




