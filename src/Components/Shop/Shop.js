import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';


const Shop = () => {
   
const first10 = fakeData.slice(0,10);
    const [product, setProduct] = useState(first10)
    
    const [cart, setCart] = useState([])
    
    
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = saveCart[existingKey]
            return product;
        })
        setCart(previousCart)
    },[])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey)

        let count = 1;
        let newCart;
        if (sameProduct) {
            
            const count = sameProduct.quantity + 1;
            sameProduct.quantity = count ;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);

            newCart = [...others, sameProduct];


        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];

        }
    // const count = sameProduct.length;
    
    // const newCart = [...cart , product];
    setCart(newCart)
    
    
    addToDatabaseCart(product.key, count);
}
  
    return (
        <div className="twin-container">
            <div className="shopping-area"> 
           
                    {
                    product.map((product => <Product
                        key ={product.key}
                            showAddToCart={true}
                        handleAddProduct ={handleAddProduct}
                        
                         product={product}></Product>))
                    }
             
            </div>
            <div className="shopping-cart"> 
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="btn">Review Order</button>
                    </Link>
                </Cart>

            </div>
       
            
           
        </div>
    );
};

export default Shop;