import { Link } from "react-router-dom";


function Navbar()
{


    return(
        <div>
            <Link to="/login">LOGIN</Link>
            <Link to="tickets">DASHBOARD</Link>
            <Link to="show">SHOWS</Link>
            
        </div>
    )
}

export {Navbar}