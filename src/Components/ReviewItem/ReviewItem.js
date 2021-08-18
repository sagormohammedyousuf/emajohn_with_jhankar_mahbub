import React  from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    console.log(props)
    const {name,quantity , key , price}  = props.product;
    return (
        <div> 
            <div className='style'>
                <h4>{name}</h4>
                <p> Quantity : {quantity}</p>
                <p><small>${price}</small></p>
                <button onClick={()=> props.removeProduct(key) } className="btn">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;   