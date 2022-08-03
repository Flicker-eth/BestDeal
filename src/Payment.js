import React ,{useEffect, useState}from "react";
import "./payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProducts from "./CheckoutProducts";
import { NavLink } from "react-router-dom";
import { CardElement, useStripe,useElements } from "@stripe/react-stripe-js";
import { getbaskettotal } from "./reducer";
import NumberFormat from 'react-number-format';
import axios from "axios";




function Payment() {
    const [{ basket , user }, dispatch] = useStateValue();
    const stripe= useStripe();
    const element= useElements();
   const [succeded, setSucceeded] =useState(false);
   const [processing, setProcessing] =useState("");
   const [error,setError] = useState(null);
   const [disabled, setDisabled] = useState(true);
   const [clientSecret ,setClientSecret] = useState(true);

   useEffect(() =>{
  const getClientSecret = async () => {
      const response = await axios({
     method:"post",
     url:`/payments/create?total=${getbaskettotal(basket) * 100}`

      })
      setClientSecret(response.data.clientSecret)
  }
   getClientSecret();
   },[basket]) 

    const handleSubmit = async (event) => {
           event.preventDefault();
           setProcessing(true);
           const payload = await stripe.confirmCardPayment(clientSecret,{
               payment_method:{
                   card:element.getElement(CardElement)
               }
           }).then(({ paymentIntent }) =>{
               setSucceeded(true);
               setError(null);
               setProcessing(false)
               NavLink.replace('/orders')
           })
    }
    const handleChange = event => {
     setDisabled(event.empty);
     setError(event.error ? event.error.message :"");
    }


  return (
    <div className="payment">
      <div className="payment__continer">
       <h1>
           Checkout(<NavLink to="/checkout">{basket?.length}</NavLink>)
       </h1>


        <div className="payment__section">
          <div className="payment__title">
             <h3>Delivery Address</h3>

          </div>
            <div className="payment__address">

             <p>{user?.email}</p>
              <p>123 for gomti lucknow</p>
              <p>wewe road lucknow</p>
            </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">

            <h3>review items and delivery</h3>
            <div className="payment__items">
            {basket.map(item =>(
                    <CheckoutProducts
                   id={item.id}
                  title={item.title}
                    image={item.image}
                   price={item.price}
                   rating={item.rating}
                    />
                ))}
            </div>
          </div>

        </div>
        <div className="payment__section">
        <div className="payment__items">
           <h3>Payment Method</h3>
       </div>
       <div className="payment__details">
      <form onClick={handleSubmit}> 
      <CardElement  onChange={handleChange}/>
       <div className="payment_priceContainer">

       <NumberFormat 
renderText={(value) => (
  <h3>order total: {value}</h3>
)}
decimalScale={2}
value={getbaskettotal(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"Rs"}


 />
 


<button disabled={processing || disabled || succeded}>

    <span>{processing ?<p>processing</p>: 'BUY NOW'}</span>
</button>


       </div>
    {error && <div>{error}</div>}
      </form>

       </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
