import { useState } from "react"
import { useDispatch } from "react-redux";
import { addtodo } from "../store/action";
const axios = require('axios');
function TodoInput()
{
    const [title,setTitle]=useState("")

    const dispatch =useDispatch();

    const handleADD=()=>{
        const payload={
            title,
            status:false,
           
        };

       const {data}= axios.post('http://localhost:3002/todo', payload)
        console.log("after add",data)
        dispatch(addtodo(payload))
    };

    return (
        <div>
           
            <input value={title} placeholder="enter your todo" onChange={(e)=>{
                setTitle(e.target.value)
            }}></input>
            <button onClick={handleADD}>ADD TODO</button>
        </div>
    )
}

export {TodoInput}