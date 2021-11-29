import { createContext, useState } from "react";


export const AuthContext= createContext();

const AuthContextProvider= ({children})=>{


    const [isAuth,setAuth]=useState(false)

    

    const toggleAuth =(username,password)=>{
        if(username=="admin" && password=="admin")
        {
            console.log("login succesfull")
            setAuth(!isAuth)

        }
        
    }

    const value ={isAuth,toggleAuth}
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}


export {AuthContextProvider}