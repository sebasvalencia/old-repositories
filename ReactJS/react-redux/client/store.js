import { createStore, compose } from "redux";

//hook up react with redux
import { syncHistoryWithStore } from "react-router-redux";

import { browserHistory } from "react-router";

//import the root reducer
import rootReducer from "./reducers/index";

//import data
import comments from "./data/comments";
import posts from "./data/posts";

//create an object for the default data
const defaultState = {
  posts,
  comments
};

// redux dev tools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);


//Create store (reducers, defaultState)
const store = createStore(rootReducer, defaultState);

// Hot reloding the reducers
if(module.hot){
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;

//Keep it tracking where I done
export const history = syncHistoryWithStore(browserHistory, store);

