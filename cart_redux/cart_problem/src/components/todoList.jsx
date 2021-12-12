
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showCurrent } from "../store/action";
import { Item } from "./particularItem";
function List()
{
    const list=useSelector(store=>store.todo.data)
    console.log(list)
    const dispatch=useDispatch();

    const handleItem=(e)=>{
        
        dispatch(showCurrent(e))

    }
    return (
        <div>
            {list.map((e)=>(
                
                <div key={e.id} ><Link to={`/item/${e.id}`} onClick={()=>handleItem(e)}> {e.title}</Link> </div>
                
            ))}
           
        </div>
        
    )
}

export {List}