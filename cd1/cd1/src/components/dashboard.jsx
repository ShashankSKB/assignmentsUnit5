import { useContext } from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import { AuthContext } from "../context/authContext"

function Tickets()
{
    const {isAuth}=useContext(AuthContext)
    const tickets=useSelector(store=>store.user.tickets)
    console.log(tickets)

    return isAuth ?(
        <div>
            <h1>TICKETS</h1>
            <div>{tickets.map((e)=>(
                <div>
                       <div><img src={e.image}></img></div>
                <div>{e.title}</div>

                </div>
             
            ))}</div>
        </div>
    )
    :
    (
         <Redirect to="/login"></Redirect>
    )
}

export {Tickets}