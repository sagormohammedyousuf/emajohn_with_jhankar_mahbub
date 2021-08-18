import React from 'react';
import './ProductDetail.css'
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
import Product from '../Product/Product';


const ProductDetail = () => {
    const { productKey } = useParams()
    const product = fakeData.find(product => product.key === productKey);
    console.log(product)
    return (
        <div className="main">
             <div className="product">
            <div className="center"></div>
                <div className="product2">
                    <h1 > your product details</h1>
                <Product showAddToCart={false} product={product}></Product>
            </div>
        </div>
            
       </div>
    );
}; 

export default ProductDetail; 