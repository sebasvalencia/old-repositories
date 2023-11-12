

//No existen en JS

//Ejemplo de sobrecarga
//function crearProducto(){}
//function crearProducto(nombre){}
//function crearProducto(nombre, precio){} //seria la q se ejecuta


function crearProducto(nombre, precio){
    nombre = nombre || "Sin nombre";
    precio = precio || 0;
    console.log(`Producto: ${nombre} precio: ${precio}`);
}

crearProducto();
crearProducto("Lapiz");
crearProducto("Lapiz", 10);

function crearProducto100(nombre){
    crearProducto(nombre, 100);
}

crearProducto100("Corrector");

function crearProductoCamisa(precio){
    crearProducto("Camisa", precio);
}
crearProductoCamisa(75);





