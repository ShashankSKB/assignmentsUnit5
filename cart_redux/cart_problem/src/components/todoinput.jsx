import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { store } from "../store/store"
import { ADD_TODO } from "../store/actionTypes";
import { addTodo } from "../store/action";
function Todo()
{
 
    const dispatch =useDispatch();

    const [count,setCount]=useState(0)

    const [text,setText]=useState("");


    const handleadd=()=>{

        setCount((prev)=>prev+1)
    const data= {
            title:text,
            status:false,
            id:count
        }
        console.log(data);

        dispatch(addTodo(data))

        
    }
    
    return (
        <div>
            <input placeholder="what needs to be done" onChange={(e)=>{
                setText(e.target.value);
            }}></input>
            <button onClick={handleadd}>ADD TODO</button>
        </div>
    )
}

export {Todo}