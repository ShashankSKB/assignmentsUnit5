import { useState } from "react"


function Counter()
{
    const [count,setCount]=useState(0)

    const handleCount =(x)=>{
        
        if(count+x >=0)
        {
            setCount(count + x)
        }
        
    }



    return (
        <div>
            <button onClick={()=>{handleCount(+1)}}>+</button>
               {count} 
            <button onClick={()=>{handleCount(-1)}}>-</button>
        </div>
    )
}

export {Counter}