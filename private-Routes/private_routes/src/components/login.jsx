import { useContext, useState } from "react"
import { authContext } from "../context/authcontext"
function Login()
{
    const {isAuth,handleAuth}=useContext(authContext)

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()

        handleAuth(username,password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter username" onChange={(e)=>{
                    setUsername(e.target.value)
                }} ></input>
                <input type="password" placeholder="enter your password" onChange={(e)=>{
                    setPassword(e.target.value)
                }}></input>
                <input type="submit"></input> 
            </form>
        </div>
    )
}

export {Login}