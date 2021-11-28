import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { addtodo, gettodo } from "../store/action";
import "./todolist.css"
const axios = require('axios');

function TodoList()
{

    const todo=useSelector(state=>state.todo.data)
    
    const dispatch=useDispatch()
    const handleItem=(e)=>{

        console.log(e)
        axios.post('http://localhost:3002/current', e)

        return (
            <Redirect to="/item"></Redirect>
        )
    
    }

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async ()=>{


        try{
             const {data}=await axios.get('http://localhost:3002/todo')
        console.log("success :",data)
        
        dispatch(gettodo(data))
        console.log("after dispatch",todo)
        }
        catch(err)
        {
            console.log("error",err)
        }
       
    }

    console.log("todos",todo)
    
    
    return (
        <div>
            <h1>Todo list items</h1>
            {todo.map((e)=>(
                <div className="parent_list">
                    <div className="list">
                    <div>{e.title} </div>
                    <div>{e.status? "done" :"not done"}</div>
                </div>
                
                <button onClick={()=>handleItem(e)} ><Link to="/item">EDIT</Link></button>
                </div>
            ))}
        </div>
    )
}

export {TodoList}