import { Counter } from '../util/counter';
import { CardContext } from '../Context/cartContext';
const axios = require('axios');
const { useEffect, useState, useContext } = require('react');



function Content()
{

    

    const [data,setData]=useState([])
    
    
    useEffect(()=>{
    axios.get('http://localhost:3004/productDetails')
    .then(function (response) {
    setData(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
 
    },[])


    const addtocart=(e)=>{

        axios.post('http://localhost:3004/cart', e)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }




    return (
        <div>
            {data.map((e)=>(
                <div style={{border:"1px solid black" ,margin:"10px",padding:"10px"}}>
                <div><img src={e.image_url}></img></div>
                <div>{e.product_name}</div>
                <div>Description : {e.description}</div>
                <div>Price : {e.price}</div>
                <div><Counter /></div>
                <div><button onClick={()=>{addtocart(e);
                                            }}>ADD TO CART</button></div>
                <br/>
                </div>
                
            ))}
        </div>
    )
}


export {Content}