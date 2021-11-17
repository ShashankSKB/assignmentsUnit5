import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"

function Navbar(){

    const {isAuth,toggleAuth}= useContext(AuthContext)

    console.log("isauth",isAuth)
    return (
        <div>
            <h1>Navbar</h1>
            <button >{isAuth ? "LOGOUT" : "LOGIN "}</button>
        </div>
    )
}

export {Navbar}