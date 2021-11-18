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
            ProductDetails
            <div className="parent2">
                        <div><h4>Name</h4></div>
                        <div><h4>Price</h4></div>
                        <div><h4>Details</h4></div>
            </div>
            {products.filter((e)=>e.id==id).map((e)=>(
                
                 <div className="parent2">
                   <div>{e.price}</div>
                  <div>{e.brand}</div>
                  <div>{e.features.map((e)=>(
                        <div>{e}</div>
                    ))} </div>
                 </div>   
                
            ))}
        </div>
    )
}


export {ProductDetails}