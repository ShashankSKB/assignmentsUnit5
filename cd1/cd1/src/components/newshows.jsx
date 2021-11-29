import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addShow, showdetails } from "../store/action"

import { Redirect } from "react-router";

import { Show } from "./show";
function Shows()
{
    const action= useSelector(store =>store.user.action)
    const horror=useSelector(store =>store.user.horror)
    console.log(action)
  
     const dispatch = useDispatch()


     const addTicket=(e)=>{

        console.log("ticket added ",e)
        dispatch(addShow(e))

     }

    

    return (
        <div > 
            Latest Shows
            <h1>ACTION MOVIES</h1>
            <div style={{display:"flex",flexDirection:"row",gap:"10px",justifyContent:"center"}}>
                
            {action.map((e)=>(
             
                <div onClick={()=>{
                    
                    const data=e.title
                    console.log(data)
                    dispatch(showdetails(data))

                    
                    return <Redirect to="/show"></Redirect>
                    

                }}>
                      
                    <div><img src={e.image}></img></div>
                    <div>{e.title}</div>
                    <div>{e.time}</div>
                    <button onClick={()=> {addTicket(e)}}>BOOK</button>
                </div>
          
            ))}
             </div>   

             <h1>HORROR MOVIES</h1>

             <div style={{display:"flex",flexDirection:"row",gap:"10px",justifyContent:"center"}}>
                
            {horror.map((e)=>(
             
                <div>
                      
                    <div><img src={e.image}></img></div>
                    <div>{e.title}</div>
                    <div>{e.time}</div>
                    <button>BOOK</button>
                </div>
          
            ))}
             </div> 
            

        </div>
    )
}


export {Shows}