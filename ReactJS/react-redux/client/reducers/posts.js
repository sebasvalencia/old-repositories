/* eslint-disable quotes */
//A reducer takes in 2 things:

//1. the action(info about what happened)

//2. Copy of current state

//action, store
//okay let me see
//update and return  store

function posts(state = [], action) {
  console.log("the post will change");
  console.log("postsReducers: ", state, action);

  switch (action.type) {
    case "INCREMENT_LIKES":
      console.log('Incrementing Likes!!');
      const i = action.index;
      // return the updated state
      return [
        ...state.slice(0,i), //before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), //after the one we are updateing
      ]
      break;

    default:
      return state;
      break;
  }

  return state;
}

export default posts;
