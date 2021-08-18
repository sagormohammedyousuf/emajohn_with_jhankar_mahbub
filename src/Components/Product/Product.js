import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props.product)
    const {img , name , seller , price , stock ,key} = props.product ;
    return (
        <div className="product">
            <div className="img">
                <img src={img} alt='img' />
            </div>
         <div className="product-detail"> 
         <h4 id="pname"><Link to={"/product/"+key}> {name} </Link> </h4>
         <p><small>by : {seller}</small></p>
         <h5>Price: ${price}</h5>
         <p><small> Only {stock} left in stock -order soon</small></p>

        {props.showAddToCart && <button className="btn" 
         onClick={() => props.handleAddProduct(props.product)}
         
         ><FontAwesomeIcon icon={faShoppingCart} />  Add to Cart</button>}
         </div>
            
        </div>
    );
};

export default Product; 