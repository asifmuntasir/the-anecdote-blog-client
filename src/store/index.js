import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./reducers/AuthReducer";
import { PostReducer, FetchPosts } from "./reducers/PostReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import 'remixicon/fonts/remixicon.css'

const rootReducers = combineReducers({
    // AuthReducer: AuthReducer,
    // key and value same here, So we can write this like as given below
    AuthReducer,
    PostReducer,
    FetchPosts
});

const middlewares = [thunkMiddleware];
const Store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default Store;


