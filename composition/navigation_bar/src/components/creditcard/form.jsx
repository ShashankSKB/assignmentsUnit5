import { useState } from "react"
import "./form.css"
import { ItemForm } from "./formItem"

function Form()
{
    const [data,setData]=useState({
        name:"",
        cardNumber:"",
        expiryMonth:"",
        expiryYear:"",
        cvc:""
    })


    const handleChange=(e)=>{

        const {name,value}=e.target;
        
        console.log(name,value)
        setData({
            ...data,
            [name]:value
        })
    }

    const handleSubmit=(e)=>{

        e.preventDefault();
        console.log("data",data)

    }

    return (
        <div>
            <h2>Payment details</h2>
            <form className="form_parent" onSubmit={handleSubmit}>
                <label>cardholder name</label>
                {/* <input placeholder="cardholder name" name="name" onChange={handleChange}></input> */}
                <ItemForm name="name" src="https://cdn-icons-png.flaticon.com/512/6283/6283675.png" value="card holder name" handle={handleChange}></ItemForm>

                <label>card number</label>
                {/* <input placeholder="card number" name="cardNumber" onChange={handleChange}></input> */}
                <ItemForm name="cardNumber" src="https://cdn-icons-png.flaticon.com/512/6283/6283675.png" value="card number" handle={handleChange}></ItemForm>

                <label>expiry month</label>
                {/* <input placeholder="expiry month" name="expiryMonth" onChange={handleChange}></input> */}
                <ItemForm name="expiryMonth" src="https://cdn-icons-png.flaticon.com/512/6283/6283675.png" value="expiry month" handle={handleChange}></ItemForm>

                <label>expiry year </label>
                {/* <input placeholder="expiry year " name="expiryYear" onChange={handleChange}></input> */}
                <ItemForm name="expiryYear" src="https://cdn-icons-png.flaticon.com/512/6283/6283675.png" value="expiry year" handle={handleChange}></ItemForm>

                <label>CVC</label>
                {/* <input placeholder="cvc" name="cvc" onChange={handleChange}></input> */}
                <ItemForm name="cvc" src="https://cdn-icons-png.flaticon.com/512/6283/6283675.png" value="cvc" handle={handleChange}></ItemForm>

                <h4>Payment amount: 1200 $</h4>
                <input type="submit" value="pay" ></input>
            </form>
        </div>
    )
}

export {Form}