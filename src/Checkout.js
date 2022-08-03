import React from "react";
import "./Checkout.css" ;
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProducts from "./CheckoutProducts";

function Checkout() {
    const [{ basket , user }, dispatch] = useStateValue();



    return (<div className="checkout">
           <div   className="checkout__left">

             <img  className="checkout__ad"  src={require("./image/banner3.jpeg")} alt=""/>
             <div>
             <h3>Hello, {user?.email}</h3>
              <h2 className="checkout__title">Your Shopping Cart</h2>

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
          <div className="checkout__title">

             <Subtotal />
          </div>
      
    </div>
    );
}
export default Checkout;