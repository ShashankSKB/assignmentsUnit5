
import "./forms.css"

import { Appcontext } from "../context/Appcontextprovider"
import { useContext, useState } from "react"
function Forms(){

    const {token,auth,onsubmit}= useContext(Appcontext)

    const [details,setDetails]=useState({
        name:""
    })

    const onsubmits =(e)=>{

        e.preventDefault();

      
        // onsubmit()

        console.log(details)
}



    return (
        <div>
            <form className="parent" onSubmit={onsubmits}>
                <h1>FORMS</h1>
                <input placeholder="name" name="name" ></input>
                <input type="submit" onClick={()=>{
                    onsubmit("abcdef")
                }}></input>
            </form>
            <h1> {token ? "logged in" : "logged out"} </h1>
            <h2>{token}</h2>
        </div>
    )
}


export {Forms}