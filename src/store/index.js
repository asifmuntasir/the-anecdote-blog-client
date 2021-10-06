import { createStore, applyMiddleware, combineReducers } from "redux";
import  thunkMiddleware  from "redux-thunk";
import AuthReducer from "./reducers/AuthReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    // AuthReducer: AuthReducer,
    // key and value same, So we can write this given below
    AuthReducer,
});

const middlewares = [thunkMiddleware];
const Store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default Store;


