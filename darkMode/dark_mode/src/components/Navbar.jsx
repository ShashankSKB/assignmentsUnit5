import ToggleSwitch from "./toggleButton"
import "./Navbar.css"

function Navbar()
{

  
    return (
        <div className="navbar" >
            <h1>My Dashboard</h1>
            <ToggleSwitch label="Dark Mode" />

        </div>
    )
}

export {Navbar}