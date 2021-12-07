import { GET_DATA } from "./actionTypes"


const initState ={
    users:{
        data:[]
    }
}


const reducer= (state=initState,action)=>
{
    switch(action.type)
    {
        case  GET_DATA:{
            return {
                ...state,
                users:{
                    data:action.payload
                }
               
            }
        }

    }
}

export {reducer}