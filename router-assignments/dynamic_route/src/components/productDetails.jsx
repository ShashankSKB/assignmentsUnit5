import { useEffect, useState } from "react"
import { useParams } from "react-router"
const axios = require('axios');

function ProductDetails(){

    const {id}= useParams();
    const [products,setProducts]=useState([])
    console.log(id)

    useEffect(()=>{
        axios.get('http://localhost:3004/data')
        .then(function (response) {
    // handle success
    console.log(response.data);
    setProducts(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
    },[])
    return (
        <div>
                <hr></hr>
            ProductDetails
            <hr></hr>
            
            {products.filter((e)=>e.id==id).map((e)=>(
                
                 <div className="parent2">
                     
                    <div>Price:{e.price}</div>
                   
                   <div>Brand:{e.brand}</div>
                  
                   <div>Features:{e.features.map((e)=>(
                       
                        <div>{e}</div>
                    ))} </div>
                 </div>   
                
            ))}
        </div>
    )
}


export {ProductDetails}