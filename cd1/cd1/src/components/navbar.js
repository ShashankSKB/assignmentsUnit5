import { Link } from "react-router-dom";


function Navbar()
{


    return(
        <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
            
           
            <Link to="/login">LOGIN</Link>
            <Link to="tickets">DASHBOARD</Link>
            <Link to="show">SHOWS</Link>
            <Link to="/">HOME</Link>
            
        </div>
    )
}

export {Navbar}