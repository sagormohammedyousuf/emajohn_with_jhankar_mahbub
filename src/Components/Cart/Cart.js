import React from 'react';


const Cart = (props) => {
    
    const cart = props.cart;
    
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        
    }
   
    // const total = cart.reduce((total , prd) => total + prd.price, 0)

    const tax = total/10 ;

    let shipping = 0 ;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){ 
        shipping = 5;

    }
    else if(total >0){
        shipping = 10;
    }
    return (
        <div className="margin">
        <h3 >  Cart Details</h3>
            <hr className="carthr"/>
           
            <h5>Order Details: {cart.length}</h5>
            <p><small>Shipping: {shipping}</small></p>
            <p>Product Price:{total}</p>
            <p>Tax: {tax}</p>
            <h5> Total price: ${total}</h5>
            {
                props.children
            }
            
            
           
            
            
        </div> 
    );
};
 
export default Cart;