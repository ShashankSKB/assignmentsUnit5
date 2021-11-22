
import { useContext, useState } from "react"
import { Redirect } from "react-router"
import { authContext } from "../context/authcontext"

function Dashboard()
{
    const {isAuth}=useContext(authContext)
    return isAuth ?(
        <div>
            <h1>Dashboard Page</h1>
        </div>
    ):
    (
        <Redirect to="/login"></Redirect>
    )
}


export {Dashboard}