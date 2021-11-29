
import { Redirect } from "react-router"
import { authContext } from "../context/authcontext"
import { useContext, useState } from "react"
function Settings()
{
    const {isAuth}=useContext(authContext)
    return isAuth ?(
        <div>
            <h1>Settings Page</h1>
        </div>
    ):
    (   <div>
        <h1>Please login</h1>
        <Redirect to="/login"></Redirect>
        </div>
        
    )
}


export {Settings}