import {Link} from "react-router-dom";

const { useState } = require("react")


function Navbar()
{
    const [Links,setLinks]=useState([

  
        {
           to:"/",
           title:"home" 
        },
        {
            to:"/products",
            title:"products" 
         },
         {
            to:"/products/:id",
            title:"product" 
         }
        ]
    )

    return (
        <div>
                {Links.map((e)=>(
                   <div> 
                       <Link to={e.to}>
                       {e.title}
                       </Link>
                    
                    </div>
                ))}
        </div>
    )
}

export {Navbar}