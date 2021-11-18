import { useEffect, useState } from "react"
import "./products.css"
import {Link} from "react-router-dom";
const axios = require('axios');


function Product(){

const [products,setProducts]=useState([])

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
            <h1>Products</h1>

            <div className="parent">
                        <div><h4>Name</h4></div>
                        <div><h4>Price</h4></div>
                        <div><h4>Details</h4></div>
            </div>
            {products.map((e)=>(
                <div className="parent">
                <div>{e.name}</div>
                <div>{e.price}</div>
                <div><Link to={`/products/${e.id}`}>more details</Link></div>
                 </div>
               
                
            ))}
        </div>
    )
}


export {Product}