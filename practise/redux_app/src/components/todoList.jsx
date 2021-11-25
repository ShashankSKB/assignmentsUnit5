import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getTodoError, getTodoSucess } from "../store/Todostore/action.js"

import { useDispatch } from "react-redux"
const axios = require('axios');

function Todolist()
{
    const todos=useSelector(state =>state.todos.todo.data)
    const dispatch=useDispatch()

    useEffect(()=>{
        getTodo();
    },[])

    console.log("todos are get",todos)

    const getTodo=async()=>{

        try{
            
            const {data} =await axios.get('http://localhost:3001/todo')
            console.log("success get",data)

            dispatch(getTodoSucess(data))
            

        }
        catch(err)
        {
            dispatch(getTodoError(err))
        }
    }

    console.log("todo",todos)
    return (
        <div>
        hello
            {todos.map((e)=>(
                <div>{e.title}</div>
            ))}
        </div>
    )
}

export {Todolist}