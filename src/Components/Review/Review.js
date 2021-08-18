import  {useState , useEffect , React} from 'react';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImg from '../../images/giphy.gif'



const Review = () => {
    const [cart, setCart] = useState([]);
    
    const [orderPlaced, setOrderPlace] = useState(false);
    // console.log(happyImg)

    const handlePressOrder = () => {
        setCart([]);
        setOrderPlace(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        console.log('Product is removed', productKey)
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
    }
    useEffect(() => {
        //cart 
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart)
            
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
         
        
        setCart(cartProducts);
    }, []);
    
    let thankYou;
    if (orderPlaced){
        thankYou = <img src={happyImg} alt="happyimg" />
    }
    return (
        <div className="style twin-container">
           
            <div className="shopping-area">
                  <h1> Cart Items: {cart.length}</h1>
            
            {
                cart.map(pd => <ReviewItem
                    key={pd.key}
                    removeProduct ={removeProduct}
                    product={pd}></ReviewItem>)
                }

                {thankYou}
          
            </div>
            <div className="c-c">
                <Cart cart={cart}>
                    <button onClick={handlePressOrder} className="btn">Press Order</button>
                </Cart>
                
            </div>

           
           
        </div>
    );
};

export default Review; 