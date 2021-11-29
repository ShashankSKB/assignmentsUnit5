import { todoReducer } from "../store/Todostore/reducer.js"
import {createStore,combineReducers} from "redux"
import { countReducer } from "./Counterstore/reducer.js";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import { act } from "react-dom/test-utils";
import thunk from "redux-thunk";
const rootReducer=combineReducers(
    {
        todos:todoReducer,
        counter:countReducer
    }
)

const middleware1= (store)=>(next)=>(action)=>{

    console.log("mid1")
    if(typeof action === "function")
    {
        console.log("here in mid1 dispatch function")
       return action(store.dispatch)
    }
    else{
        next(action)
    }
    
    
    // console.log("mid1 return")
}

// const middleware2= (store)=>(next)=>(action)=>{

//     // console.log("mid2")
//     next(action)
    
//     // console.log("mid2 return")
// }

export const store= createStore(
    rootReducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
   );

// console.log(store.getState())
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  