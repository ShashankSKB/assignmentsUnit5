import { createContext, useState } from "react";


export const AuthContext= createContext();

const AuthContextProvider= ({children})=>{


    const [isAuth,setAuth]=useState(false)

    const toggleAuth =(change)=>{
        setAuth(change)
    }

    const value ={isAuth,toggleAuth}
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}


export {AuthContextProvider}