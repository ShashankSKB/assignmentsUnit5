import { useSelector } from "react-redux"

function Show()
{

    const show=useSelector(store=>store.user.show)
    console.log(show)

    return(
        <div>
            <div>movie:{show}</div>
        </div>
    )
}

export {Show}