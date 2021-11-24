import { ADD_TODO } from "./actionTypes";


export const addtodo=(payload)=>{


    return {
        type:ADD_TODO,
        payload
    }
}