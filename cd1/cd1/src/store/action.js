import { IS_AUTH } from "./actionType"


export const isauth=(payload)=>{


    return {
        type:IS_AUTH,
        payload
    }
}

