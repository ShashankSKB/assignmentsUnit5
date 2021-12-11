import { useState } from "react"
import "./form.css"

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
                <input placeholder="cardholder name" name="name" onChange={handleChange}></input>

                <label>card number</label>
                <input placeholder="card number" name="cardNumber" onChange={handleChange}></input>

                <label>expiry month</label>
                <input placeholder="expiry month" name="expiryMonth" onChange={handleChange}></input>

                <label>expiry year </label>
                <input placeholder="expiry year " name="expiryYear" onChange={handleChange}></input>

                <label>expiry month</label>
                <input placeholder="cvc" name="cvc" onChange={handleChange}></input>
                <h4>Payment amount: 1200 $</h4>
                <input type="submit" value="pay" ></input>
            </form>
        </div>
    )
}

export {Form}