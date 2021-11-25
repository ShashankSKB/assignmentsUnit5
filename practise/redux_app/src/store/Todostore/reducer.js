import {  DEC,ADD, ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR, GET_TODO_ERROR, GET_TODO_SUCCESS, GET_TODO_LOADING} from "./actionTypes";
import { INC } from "./actionTypes";

const initstate={
    
    todo:
        {
            loading:false,
            data:[],
            error:false
        }
    
}

const todoReducer =(state=initstate,action)=>
{

    switch (action.type)
    {
        

        case ADD:{
            return {
                ...state,
                todo:[...state.todo,action.payload]
            }
        }

        case ADD_TODO_LOADING:{

            return {
                ...state,
                todo:{
                    ...state.todo,
                    loading:false,
                }
                
            }
        }
        case ADD_TODO_SUCCESS:{

            return {
                ...state,
                todo:{
                    ...state.todo,
                    data:[...state.todo.data,action.payload]
                }
                
            }
        }
        case ADD_TODO_ERROR:{

            return {
                ...state,
                todo:{
                    loading:false,
                    error:action.payload
                }
            }
        }

        case GET_TODO_LOADING:{

            return {
                ...state,
                todo:{
                    ...state.todo,
                    loading:false,
                }
                
            }
        }
        case GET_TODO_SUCCESS:{

            return {
                ...state,
                todo:{
                    ...state.todo,
                    data:action.payload
                }
                
            }
        }
        case GET_TODO_ERROR:{

            return {
                ...state,
                todo:{
                    loading:false,
                    error:action.payload
                }
            }
        }

        default:
            return state;
    }
}

export {todoReducer}