

var num= 10; //un tipo de dato q apunta a un solo valor
var str = "texto";
var bol = true;
var und = undefined;
var nul = null;

var obj = {};//definición obj vacio

var obj = {
    numero : 1,
    texto: "Nuevo texto",
    objHijo: {
        numero2: 20,
        texto2: "Numero texto 2"
    }
};

console.log(obj);//Se ordena alfabeticamente
console.log(obj.numero);
console.log(obj['texto']);