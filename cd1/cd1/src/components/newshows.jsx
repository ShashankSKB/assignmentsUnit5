import { useSelector } from "react-redux"


function Shows()
{
    const shows= useSelector(store =>store.user.data)

    console.log(shows)

    return (
        <div>
            Latest Shows
        </div>
    )
}


export {Shows}