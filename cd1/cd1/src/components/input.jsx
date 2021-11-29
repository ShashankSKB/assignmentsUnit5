import { useContext, useState } from "react"
import { useSelector } from "react-redux"

import { AuthContext } from "../context/authContext"

function Login()
{
const auth= useSelector(store=>store)
const [username,setUsername]=useState("")

const [password,setPassword]=useState("")

console.log("auth",auth)

const {isAuth,toggleAuth}= useContext(AuthContext);


const handleLogin=()=>{

toggleAuth(username,password);
}


console.log("auth" ,isAuth)
    return (
        <div>
            <input placeholder="enter username" onChange={(e)=>{
                setUsername(e.target.value)
            }}></input>
            <input  onChange={(e)=>{
                setPassword(e.target.value)
            }} placeholder="enter password"></input>
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    )
}
export {Login}