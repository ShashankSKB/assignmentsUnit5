import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContextProvider"
const axios = require('axios');

function Status(){

    const {isAuth,toggleAuth}=useContext(AuthContext)

    const [data,setData]=useState({
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        console.log(e.target.value)

        setData({
            ...data,
            [e.target.name]:e.target.value
        })

        
    }


    

    

    return (
        <div>
         <h1>Status : {isAuth ? "user is logged in" : "user need to login"} </h1>
         <form onSubmit={(e)=>{
             e.preventDefault()

             console.log(data)


             axios.post('https://reqres.in/api/login', {
                email: `${data.email}`,
                password: `${data.password}`
              })
              .then(function (response) {
                console.log(response.data);

                toggleAuth(true)

              })
              .catch(function (error) {
                console.log(error);
                console.log("incorrect email or password")
                toggleAuth(false)
              });
         }}>
             <input placeholder="username" type="text" onChange={handleChange} name="email"></input>
             <input placeholder="password" type="text"  onChange={handleChange}   name="password"></input>
             <input type="submit" ></input>
         </form>
        </div>
    )
}

export {Status}