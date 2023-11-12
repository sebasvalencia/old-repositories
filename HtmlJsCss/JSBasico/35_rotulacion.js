

//Rotulaciones nos permite tener control para salir a un ciclo anterior cuando lo deseemos

for_principal:
for (var i = 1; i <= 5; i++) {

    console.log("i",i);

    for_secundario:
    for (var j = 1; j <= 5; j++) {

        console.log("j",j);
        //continue for_principal;//sale al ciclo principal
        for (var x = 1; x <= 5; x++) {
            console.log("x",x);
            break for_secundario;     //una vuelta de los ciclos internos      
        }
    }

}





