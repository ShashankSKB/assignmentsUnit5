import { useState } from "react"
import { useDispatch } from "react-redux";
import { addtodo } from "../store/action";

function TodoInput()
{
    const [title,setTitle]=useState("")

    const dispatch =useDispatch();

    const handleADD=()=>{
        const payload={
            title,
            status:false,
            id:Math.random()
        };

        dispatch(addtodo(payload))


    };

    return (
        <div>
            <h1>TODO LIST</h1>
            <input value={title} placeholder="enter your todo" onChange={(e)=>{
                setTitle(e.target.value)
            }}></input>
            <button onClick={handleADD}>ADD TODO</button>
        </div>
    )
}

export {TodoInput}