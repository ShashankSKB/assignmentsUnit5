import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodoLoading,addTodoSucess,addTodoError} from "../store/Todostore/action.js"
import { store } from "../store/store"
const axios = require('axios');
function TodoInput()
{   

    // const {loading,error}=useSelector(store=>store.todos.todo);

    const [title,setTitle]=useState("")
    const dispatch=useDispatch()

    const handleaddTodo=async()=>{

        dispatch(addTodoLoading());
        const payload={
            status:false,
            title:title
        };

        try{
            
            const {data}=await axios.post('http://localhost:3001/todo',payload )
            console.log("success",data)

            dispatch(addTodoSucess(data))
            

        }
        catch(err)
        {
            dispatch(addTodoError(err))
        }

        // dispatch(addTodo(payload))
    }

    return (
        <div>
           
            <input value={title} placeholder="enter your todo" onChange={(e)=>{
                setTitle(e.target.value)
            }}></input>
            <button onClick={handleaddTodo}>ADD TODO</button>
        </div>
    )
}

export {TodoInput}