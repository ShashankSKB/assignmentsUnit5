import { GET_DATA } from "./actionTypes";


export const getData =(payload)=>{

    return {
        type:GET_DATA,
        payload
    }
}