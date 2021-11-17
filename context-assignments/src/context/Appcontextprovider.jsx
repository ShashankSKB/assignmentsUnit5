import React, { useState } from "react";
import { createContext } from "react";
export const Appcontext =createContext();


const AppcontextProvider= ({children})=>{

    const [auth,setAuth]=useState(false);
    const [token,setToken]=useState("");

    const onsubmit =(value)=>{
        setToken(value)
    }

    const value ={auth,token,onsubmit}
    return (

        <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
    )
}

export { AppcontextProvider}