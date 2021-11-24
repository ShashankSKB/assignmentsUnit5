import { useContext } from "react"
import { themeContext } from "../context/themeContext"

function Navbar()
{
    const {toggleTheme} =useContext(themeContext)
    
    return (
        <div>
            <div><h1>Dashboard</h1></div>
            <div><button onClick={toggleTheme} >Toggle theme</button></div>
        </div>
    )
}

export {Navbar}

