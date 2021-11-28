import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { addtodo, gettodo } from "../store/action";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
const axios = require('axios');

function Item()
{

    const [currentChoice,setCurrentChoice]=useState({})

    const [state,setState]=useState(0)
    const dispatch=  useDispatch();


    useEffect(()=>{
        current()
        console.log("triggered get call")
    },
    state)


    const current=async()=>{
       await axios.get('http://localhost:3002/current')
    .then(function (response) {
      // handle success
      setCurrentChoice(response.data);
    })
}

    return(
        <div style={{display:"flex", flexDirection:"row",justifyContent:"center",margin:"10px" ,gap:"10px"}}> 
            <div>{currentChoice.title}</div>
            <div>{currentChoice.status ? "done" :"Not done"}</div>
            <button onClick ={async ()=>{
                const payload={
                    id:currentChoice.id,
                    status:(!currentChoice.status),
                    title:currentChoice.title
                }

                console.log("payload",payload)
                const { data } = await axios.patch(`http://localhost:3002/todo/${currentChoice.id}`, payload);
                
                console.log("toogle",data)

                setCurrentChoice(data);
                
               
            }}>Toggle</button>  

            <button onClick={async ()=>{

            const {data}=await axios.delete(`http://localhost:3002/todo/${currentChoice.id}`)
                console.log(data)

                alert("todo deleted succesfully")

                return <Redirect link="/"></Redirect>
            }}><Link to="/">Delete</Link></button>    
        </div>
       
    )
}


export {Item}