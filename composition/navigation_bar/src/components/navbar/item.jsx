import "./item.css"

function Item({label})
{

    return (
        <div className="item_child">
            <h3>{label}</h3>
        </div>
    )
}


export {Item}