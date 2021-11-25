import { todoReducer } from "../store/Todostore/reducer.js"
import {createStore,combineReducers} from "redux"
import { countReducer } from "./Counterstore/reducer.js";


const rootReducer=combineReducers(
    {
        todos:todoReducer,
        counter:countReducer
    }
)

export const store= createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState())
