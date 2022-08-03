import React from "react";
import "./CheckoutProducts.css"
import { useStateValue } from "./StateProvider";
function CheckoutProducts({id,image,title,price,rating}){
    const [{ basket }, dispatch] = useStateValue();            //same use satefunction used every whereß
 const toremove = () =>{        ///function is create 
       dispatch({
           type:"REMOVE_FROM_BASKET",
           id: id, 
       });
 }

return <div className="checkoutproducts">
       <img className="checkproduct__image" src={image}/>



       <div className="checkoutproduct__info">
       <p className="checkoutproduct__title">{title}</p>
       <p className="checkproduct__Price"> 
       <small>Rs</small><strong>{price }</strong>  </p>
       <div className="checkproduct__rating">
       {Array(rating).fill().map((_,i)=>(         
            <p>🌟</p>
        ))}
       </div>
            <button onClick={toremove}>Remove from cart</button> 
       </div>


</div>
}


export default CheckoutProducts;