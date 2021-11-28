import { ADD_TODO, GET_TODO } from "./actionTypes";


export const addtodo=(payload)=>{


    return {
        type:ADD_TODO,
        payload
    }
}

export const gettodo=(payload)=>
{
    return {
        type:GET_TODO,
        payload
    }
}