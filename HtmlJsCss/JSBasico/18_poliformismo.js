
//Aplicando poliformismo

function determinaDato(a){
    if(a === undefined){
        console.log("a es undefined");
    }

    if(typeof a === "number"){
        console.log("a es un numero");
    }

    if(typeof a === "string"){
        console.log("a es un texto");
    }

    if(typeof a === "object"){
        console.log("a es un object");

        if(a instanceof Number){
            console.log("a es un object numerico");
        }

    }

}

determinaDato();
determinaDato(1);
determinaDato("Sebas");
determinaDato({nombrre: "S"});

var b = new Number(3); //es un objecto
console.log(b);
determinaDato(b);









