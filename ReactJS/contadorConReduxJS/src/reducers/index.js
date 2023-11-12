//Para crear un reduce son funciones puras

//por argumentos el estado en cero, y action es el tipo del action
export default(state = 0, action) => {
  console.log(state, action, "Reducer");
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    break;
    case 'DECREMENT':
      return state -1;
    break;
    default:
      return state;
  }
};
