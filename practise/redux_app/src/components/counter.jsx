import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"


import { handleadd,handlesub  } from "../store/Counterstore/action.js"
function Counter()
{

    const count= useSelector(store =>store.counter.count)
    const dispatch =useDispatch();
    
    const handleADD =()=>
    {
        dispatch(handleadd(1));
    }

    const handleSUB =()=>
    {
        dispatch(handlesub(1));
    }
    return(
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={handleADD}>+</button>
            <button onClick={handleSUB}>-</button>
            <hr></hr>
        </div>
       
    )
}

export {Counter}