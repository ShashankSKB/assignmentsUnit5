import { createContext, useEffect, useState } from "react";

const axios = require('axios');

export const CardContext= createContext();


export const CardContextProvider= ({children})=>{

    const [cardData,setcardData]=useState([])


    useEffect(()=>{
cart()
    },[])

    const cart=()=>{

        axios.get('http://localhost:3004/cart')
         .then(function (response) {
    // handle success
    console.log("cart data",response.data.e);
  })
 
    }

    const value={cardData,cart}

    return (

        <CardContext.Provider value={value}>{children}</CardContext.Provider>
    )
}