import React from "react";
import "./Subtotal.css";
import NumberFormat from 'react-number-format';
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getbaskettotal } from "./reducer";
// import { getbaskettotal } from "./reducer";

function Subtotal(){

    const navigate = useNavigate();        //give the browser history

    const [{ basket }, dispatch] = useStateValue();
return <div className="subtotal">
 <NumberFormat 
renderText={(value) => (
    <>
    <p>
        Subtotal ({basket.length} items): <strong>{value}</strong>  
    </p>
    <small  className="subtotal_gift">
   <input type="checkbox"/> This order contain a gift
    </small>

    </>
)}
decimalScale={2}
value={getbaskettotal(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"Rs"}


 />
 <button  onClick={e => navigate('/payments')} >Proceed to checkout</button>
</div>


}
 export default Subtotal;