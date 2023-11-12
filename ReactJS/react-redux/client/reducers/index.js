import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import posts from "./posts";
import comments from "./comments";

//We past the reducers and the changes of router
const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;
