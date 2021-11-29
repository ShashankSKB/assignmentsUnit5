import { ADD_TODO, GET_TODO } from "./actionTypes";

const intistate={
    user:
    {
        loading:false,
        data:[{
            id:1,
            title:"Krrish",
            time:"9am,12pm,5pm"
        },
        {
            id:2,
            title:"Bang Bang",
            time:"10am,2pm,6pm"
        }],
        tickets:[]
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