import "./formitem.css"

function ItemForm({src,value,name,handle})
{

    return (
        <div className="form_item"> 
            <img src={src}></img>
            <input placeholder={value} name={name} onChange={handle}></input>          
        </div>
    )
}

export {ItemForm}