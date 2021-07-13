import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import {moviesReducer} from "./moviesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    movies: moviesReducer,
});

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
