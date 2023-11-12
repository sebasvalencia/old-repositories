
//Creamos un arreglo con los datos que vamos a trabajar

const inventors = [
    {
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
/*******************************  filter()  *************************************/
//Array.prototype.filter()
//1. Filtrar la lista de inventores para los nacidos en 1500 a 1600
/*const fifteen = inventors.filter(function(inventor){
    //console.log(inventor);
    if(inventor.year >= 1500 && inventor.year<1600){ 
        return true;//Nos quedamos con el o no
    }else{
        return false;
    }
});
console.table(fifteen);*/

const fifteen = inventors.filter( inventor => 
    (inventor.year >= 1500 && inventor.year<1600)
);
console.table(fifteen);

/*******************************  map()  *************************************/
//Array.prototype.map()
//recorre un arreglo hace algo y retorna un nuevo arreglo de la misma dimensión
//2. Retorne un arreglo con el nombre y apellido de los inventores
/*const fullNames = inventors.map(function(inventor){
    return `${inventor.first} ${inventor.last}`;
});*/
const fullNames = inventors.map(inventor =>
     `${inventor.first} ${inventor.last}`);

console.table(fullNames);

/*******************************  sort()  *************************************/
//Array.prototype.sort()
//3. Ordene el arreglo de inventores por fecha de nacimiento del menor al mayor
//tiene dos elementos y ordena dos arreglos y va recorriendo el arreglo
/*const ordered = inventors.sort(function(firstPerson, secondPerson){
    if(firstPerson.year > secondPerson.year){
        return 1;
    }else{
        return -1;
    }
    
});*/

const ordered = inventors.sort((firstPerson, secondPerson) => firstPerson.year > secondPerson.year ? 1 : -1);
console.table(ordered);



/*******************************  reduce()  *************************************/
//Array.prototype.reduce()
//4. Cuantos años vivieron los inventores
//
const totalYears = inventors.reduce(function(total, inventor){
    return total + (inventor.passed - inventor.year);
},0);
console.log(totalYears);

/*******************************  sort()  *************************************/
//5. Ordene los inventores por años vividos
const oldest = inventors.sort(function(a,b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 :1;
});
console.table(oldest);

/*******************************  map() filter()  *************************************/
//6. Crear una lista de Boulevards en Paris que contenga 'de' en cualquier parte del nombre
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/*const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));//cambiarlo a un arreglo

const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'));*/

/*******************************  sort()  *************************************/

//7. Ordene el ejercicio
//Ordene el arreglo de personas alfabeticamente por apellido 
const alpha = people.sort((lastOne, nextOne) => {
    //console.log(lastOne);
    const [alast, afirst] = lastOne.split(', ');
    const [blast, bfirst] = nextOne.split(', ');
    //console.log(alast, afirst);
    return alast > blast ? 1 : -1;
});

console.table(alpha);

/*******************************    *************************************/

//8. Reduce exercise
//Sumar cada una de las instancias de cada elemento
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(object, item){
    //console.log(item);
    if(!object[item]){
        object[item] =0;
    }
    object[item]++;
    return object;
},{});

console.log(transportation);


