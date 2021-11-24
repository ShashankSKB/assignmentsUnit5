import { useState } from "react"
import { useSelector } from "react-redux"


function TodoList()
{
    
    const todos=useSelector(state =>state.todo)
    console.log(todos)
    return (
        <div>
            <h1>Todo list items</h1>
            {todos.map((e)=>(
                <div>{e.title}</div>
            ))}
        </div>
    )
}

export {TodoList}