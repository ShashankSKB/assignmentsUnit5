import { ADD_TODO } from "./actionTypes";

const intistate={
    todo:[
        {
            id:1,
            title:"learn mern",
            status:false
        }
    ]
};

const reducer =(state =intistate,action)=>
{
    switch (action.type)
    {
        case ADD_TODO:{
            return {
                ...state,
                todo:[...state.todo,action.payload]
            }
        }

        default:
            return state
    }
}

export {reducer}