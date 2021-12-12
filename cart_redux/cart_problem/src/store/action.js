import { ADD_TODO, GET_TODO, SHOW_CURRENT, UPDATE_TODO } from "./actionTypes"


export const addTodo=(payload)=>{

    return {
        type:ADD_TODO,
        payload
    }
}

export const getTodo=(payload)=>{
    return {
        type:GET_TODO,
        payload
    }
}
export const showCurrent=(payload)=>{
    return {
        type:SHOW_CURRENT,
        payload
    }
}

export const updateTodo=(payload)=>{
    return {
        type:UPDATE_TODO,
        payload
    }
}
