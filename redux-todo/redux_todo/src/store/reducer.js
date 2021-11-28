import { ADD_TODO, GET_TODO } from "./actionTypes";

const intistate={
    todo:
    {
        loading:false,
        data:[],
        error:false
    }
};

const reducer =(state =intistate,action)=>
{
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
            
            return {
                ...state,
                todo:{
                   
                    data:action.payload
                }
                
            }
    }

        default:
            return state
    }
}

export {reducer}