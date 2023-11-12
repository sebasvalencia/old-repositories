

//Los arreglos son colecciones de objectos
var arr = [5,4,3,2,1];
console.log(arr);
console.log(arr[1],arr[4]);

console.log(arr.reverse());//invierte el arreglo

arr = arr.map( function(elemento){
    elemento *= elemento;
    return elemento;
} ); //ejecutar una function en cada elemento del arreglo sin usar el for
console.log(arr);
arr = arr.map(Math.sqrt);
console.log(arr);

arr = arr.join("|");//convierte todas las posiciones separadas por comas
console.log(arr);

/*arr = arr.split();
console.log(arr);//por comas*/

arr = arr.split("|");
console.log(arr);

arr.push("6");

console.log(arr);

arr.unshift("0");
console.log(arr);

console.log(arr.toString());//mas rapido q el split

arr.pop();
console.log(arr);

//arr.splice();//el primero debe ser un num la pos del arreglo, y el seg el elemento a eliminar
arr.splice(1, 1);
console.log(arr);

arr.splice(1, 3);
console.log(arr);

arr.splice(1, 1, "10");//quito la pos 1 y meto en esa pos el 10
console.log(arr);

arr.splice(1, 1, "10","20","30","40","50","60");
console.log(arr);

arr= arr.slice(0,2);//Corta desde y hasta del arreglo
console.log(arr);

var arr1 = [
    true,
    false,
    true,
    {
        nombre:"Fer",
        apellido: "Her"
    },
    function(){
        console.log("Soy una funcion anonima");
    },
    function(persona){
        console.log(`${persona.nombre} ${persona.apellido}`);
    },
    [
        "Fernando", 
        "Melissa",
        "Carlos",
        "Herando",
        [
            "Juan",
            "Pedro",
            function(){
                console.log(this);
            }
        ]
    ]
];

console.log(arr1);

console.log(arr1[0]);
console.log(arr1[3].nombre);
console.log(arr1[4]());

arr1[5](arr1[3]);

console.log(arr1[6][1]);

console.log(arr1[6][4][1]);

var arreglo2 = arr1[6][4];

console.log(arreglo2[1] = "Pedra!");

console.log(arreglo2[2]());







