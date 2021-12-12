import { ADD_TODO, GET_TODO, SHOW_CURRENT, UPDATE_TODO } from "./actionTypes"

const initState={
    todo:{
        data:[],
        currentItem:{}
    }
}


export const reducer=(state=initState,action)=>{

    switch (action.type)
    {
        case ADD_TODO:{
            return {
                ...state,
                todo:{
                    data:[...state.todo.data,action.payload]
                }
            }
        }

        case GET_TODO:{
            return{
                
                todo:{
                    ...state,
                    data:action.payload
                }
            }
        }

        case SHOW_CURRENT:{
            return {
                ...state,
                todo:{
                    ...state,
                    currentItem:action.payload
                }
            }
        }

        case UPDATE_TODO:{
            return{
                ...state,
                todo:{
                    ...state,
                    data:action.payload
                }
            }
        }

        default:
            return state
    }

}