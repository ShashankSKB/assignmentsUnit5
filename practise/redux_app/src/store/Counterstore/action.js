


import {  DEC} from "./actionTypes";
import { INC } from "./actionTypes";


export const handleadd=(payload)=>{

    return {
        type:INC,
        payload
    }
}

export const handlesub=(payload)=>{

    return {
        type:DEC,
        payload
    }
}
