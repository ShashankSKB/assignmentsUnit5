import {  DEC} from "./actionTypes";
import { INC } from "./actionTypes";


const initstate={
    count:0
}
const countReducer =(state=initstate,action)=>
{

    switch (action.type)
    {
        case INC:{
            return {
                ...state,
                count:state.count+action.payload
            }
        }

        case DEC:{
            return {
                ...state,
                count:state.count-action.payload
            }
        }

        

        default:
            return state;
    }
}

export {countReducer}