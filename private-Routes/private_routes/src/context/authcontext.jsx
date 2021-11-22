import { createContext, useState } from "react";


export const authContext = createContext();

export const AuthContextProvider= ({children})=>{

    const [isAuth,setisAuth]= useState(false);

    const handleAuth=(username,password)=>{
        if(username=="admin" && password=="admin")
       { 
           console.log("login successful")
           setisAuth(true)
        }
       else{
           alert("enter valid username or password")
       }
    }

    const value= {isAuth,handleAuth}
    return (
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}