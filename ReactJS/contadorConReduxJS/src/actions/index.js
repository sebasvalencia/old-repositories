//Creamos una funcion q va a dar al reducer , q tiene un tooltip-top//y argumento

export const increment = () => ({
  type: 'INCREMENT',
  arg: 'Hola'
});

export const decrement = () => ({
  type: 'DECREMENT',
  arg: 'Mundo'
})
