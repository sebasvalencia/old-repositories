

try {
    var a = 100;//comentar para lanzar el error

    if(a === 100){
        throw "que mal";
    }else{
        throw "oh oh";
    }
    console.log("El valor de a: ", a);
} catch (e) {

    if(e === "que mal"){
        console.log("Error tipo 1");
    }else{
        console.log("Error tipo 2");
    }

    console.log("Error de catch: ", e);


} finally {
    console.log("Finalmente");
}
//------------------------------------------------
try{
    throw new Error("Error tipo 1");
}catch(e){
    console.log(e.message);
}finally {
    console.log("Finalmente");
}
//------------------------------------------------
try{
    throw{
        nombreError: "Error tipo 1",
        accion: "Salir corriendo a echarle agua al servidor",
        coError: 1
    }
}catch(e){
    console.log(e.nombreError);
    console.log(e.accion);
}

//------------------------------------------------
try{
    throw function(){
        console.log("Funcion del throw");
    }
}catch(e){
    e();
    console.log(e.nombreError);
    console.log(e.accion);
}


//------------------------------------------------

try{
    throw 2;
}catch(e){
    registroError(e);
}

function registroError(e){
    var ahora = new Date();
    console.log("Se registro un error: ", e, "a las : ", ahora.getTime());
}












