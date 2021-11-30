const { useState, useEffect } = require("react")


function useDelay()
{
    const [delay,setDelay]=useState(false)

    useEffect(()=>{

        setTimeout(()=>{
            setDelay(!delay)
        },2000)
    },[])
    return {delay}
}

export {useDelay}