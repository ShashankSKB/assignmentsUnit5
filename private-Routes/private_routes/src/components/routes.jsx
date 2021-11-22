
import {Link } from "react-router-dom"
function Navbar()
{

    const links =[
        {
            to:"/",
            title:"home"
        },
        {
            to:"/login",
            title:"login"
        },
        {
            to:"/dashboard",
            title:"dashboard"
        },
        {
            to:"/dashboard/setting",
            title:"Setting"
        }

    ]


    return (
        <div style={{display:"flex",margin:"0px auto",justifyContent:"center",gap:"10px"}}>
              {links.map((e)=>(
                  <Link to={e.to}>{e.title}</Link>
              ))}
        </div>
    )
}


export {Navbar}