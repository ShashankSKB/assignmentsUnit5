import "./navbar.css"
function Navbar({children})
{


    return (
        <div className="navbar">
            {children}
        </div>
    )
}

export {Navbar}


// {/* <Navbar>
{/* <Sitename>
<Item label="Site name"></Item>
</Sitename>
<Item label="About us"></Item>
<Item label="Prices"></Item>
<Item label="Other"></Item>
<Item label="Start page"></Item>
<Item label="Offer"></Item>
<Item label="Contact"></Item>
</Navbar> */} 
