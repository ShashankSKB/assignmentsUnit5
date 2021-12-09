import {  useState } from "react"


function Timer()
{

    
    const [start,setStart]=useState(0);
    const [end,setEnd]=useState(3);

   const [count,setCount]=useState(null);
    const clock =()=>{
       
        setCount(start);
       const id= setInterval(()=>{
        setCount((e)=>{

                console.log(e,end)
                if(e+1===end)
                {
                    clearInterval(id);
                }

                return e+1;
            })

            
        },1000)


        
    }
    
    return(
        <div>
            
            <input placeholder="enter start time" onChange={(e)=>{
                setStart(e.target.value)
            }}></input>
            <input placeholder="enter end time" onChange={(e)=>{
                setEnd(e.target.value)
            }}></input>
            <button onClick={()=>clock()}>Start</button>

            <h1>{count}</h1>
        </div>
    )
}

export {Timer}