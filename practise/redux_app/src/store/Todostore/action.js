import { INC,DEC,ADD, ADD_TODO_SUCCESS,ADD_TODO_LOADING, ADD_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, GET_TODO_ERROR } from "../Todostore/actionTypes"

const axios = require('axios');

export const addTodo=(payload)=>{

    return {
        type:ADD,
        payload
    }
}

export const addTodoLoading=(payload)=>
{
    return {
        type:ADD_TODO_LOADING,
        
    }
}


export const addTodoSucess=(payload)=>
{
    return {
        type:ADD_TODO_SUCCESS,
        payload
    }
}

export const addTodoError=(payload)=>
{
    return {
        type:ADD_TODO_ERROR,
        payload
    }
}


export const getTodoLoading=(payload)=>
{
    return {
        type:GET_TODO_LOADING,
        
    }
}


export const getTodoSucess=(payload)=>
{
    return {
        type:GET_TODO_SUCCESS,
        payload
    }
}

export const getTodoError=(payload)=>
{
    return {
        type:GET_TODO_ERROR,
        payload
    }
}

