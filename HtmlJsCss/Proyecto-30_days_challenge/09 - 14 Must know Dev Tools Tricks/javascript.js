

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#bada55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');//Pasarle un parametro
var popo = '💩';
console.log(`Hello I am a ${popo} string!`);//Mejor ES6

// Styled
//Primer parametro texto, segundo parametro estilos
console.log('%c I am some great text ', 'font-size:50px; background:red');//Anteponer %c

// warning!
console.warn('OH NOOO');

// Error :|
console.error('shit');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
console.assert(1 === 1, 'That is wrong');//Este no imprime la aserción es correcta
console.assert(1 === 2, 'That is wrong');//Este imprime por que es erronea la respuesta

/*const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');*/

// clearing
console.clear();

// Viewing DOM Elements
function view() {
    const p = document.querySelector('p');
    console.log(p);//Muestra el elemento html
    console.dir(p);//Muestra todas las propiedades del elemento html
}

// Grouping together
const dogs = [
    {
        name: 'Snickers',
        age: 2
    },
    { name: 'hugo', age: 8 }
];

dogs.forEach(dog => {
    //console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

console.log({ dogs });

// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing cuanto demora una peticion
console.time('fetching data');//mismo valor
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');//mismo valor
        console.log(data);
    });

    //Table
    console.table(dogs);