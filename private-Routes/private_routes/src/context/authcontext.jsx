import { createContext, useState } from "react";


export const authContext = createContext();

export const AuthContextProvider= ({children})=>{

    const [isAuth,setisAuth]= useState(false);

    const handleAuth=()=>{

        setisAuth(true)
    }

    const value= {isAuth,handleAuth}
    return (
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}