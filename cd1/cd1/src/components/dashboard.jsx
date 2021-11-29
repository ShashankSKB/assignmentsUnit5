import { useContext, useState } from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import { AuthContext } from "../context/authContext"

import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
function Tickets()
{
    const {isAuth}=useContext(AuthContext)
    const tickets=useSelector(store=>store.user.tickets)
    console.log(tickets)
    const [qrcode,setqrCode]=useState("")

    return isAuth ?(
        <div>
            <h1>TICKETS</h1>
            <div>{tickets.map((e)=>(
                <div>
                       <div><img src={e.image}></img> <img src={qrcode}></img></div>
                       <div id="Container"></div>
                <div>{e.title}</div>
                <button onClick={()=>{
                    ReactDOM.render(<QRCode value={e.title} />, document.getElementById("Container"));
                }}>DOWNLOAD</button>

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