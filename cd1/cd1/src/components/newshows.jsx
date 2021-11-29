import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { showdetails } from "../store/action"




function Shows()
{
    const action= useSelector(store =>store.user.action)
    const horror=useSelector(store =>store.user.horror)
    console.log(action)
  
     const dispatch = useDispatch()


    

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

                    
                        
                    

                }}>
                      
                    <div><img src={e.image}></img></div>
                    <div>{e.title}</div>
                    <div>{e.time}</div>
                    <button>BOOK</button>
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