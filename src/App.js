// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';


function App() {
  return (
    <div className="Ap">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>  
          </Route>
           {/* <Route path="/">
            <Shop/>
          </Route> */}
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
         
        </Switch>
      </Router>
    
    
   
      
    </div>
  );
}

export default App;
 