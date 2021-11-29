
import { ADD_SHOW, SHOW_DETAILS } from "./actionTypes"





export const showdetails=(payload)=>{


    return {
        type:SHOW_DETAILS,
        payload
    }
}


export const addShow=(payload)=>{


    return {
        type:ADD_SHOW,
        payload
    }
}

