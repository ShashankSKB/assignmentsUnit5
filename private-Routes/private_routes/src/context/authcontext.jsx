import { createContext, useState } from "react";
import { Redirect } from "react-router";


export const authContext = createContext();

export const AuthContextProvider= ({children})=>{

    const [isAuth,setisAuth]= useState(false);

    const handleAuth=(username,password)=>{
        if(username=="admin" && password=="admin")
       { 
           alert("login successful")
           setisAuth(true);
           
           <Redirect to="/dashboard"></Redirect>
           
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