

import { useDispatch, useSelector } from "react-redux";
import { getTodo, showCurrent, updateTodo } from "../store/action";
import { useState } from "react";
function Item()
{ const item=useSelector(store=>store.todo.currentItem)
    const data=useSelector(store=>store.todo)

    const [update,setUpdate]=useState([])
    console.log("ur item",item)
    const temp=data.todo.data;
    const dispatch=useDispatch();
    const handleToggle=(id)=>{
        
       const temp2=temp.map((e)=>{

            if(e.id==id)
            {
                e.status=!e.status;
                console.log(e)
                dispatch(showCurrent(e))
                
            }
            return e;
        })

        
       

        console.log("update",temp2);

        //  dispatch(getTodo(temp2));

        

    }

    return(
        <div>
            <h3>Item</h3>
            <h3>{item.title}</h3>
            <h3>Status:{item.status ?"done": "Not done"} </h3>
            <button onClick={()=>handleToggle(item.id)}>Toggle Status</button>
        </div>
    )


}

export {Item}