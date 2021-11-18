import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import {Link,Switch,Route}  from "react-router-dom";
import { Home } from './components/home';
import { Product } from './components/products';
import { ProductDetails } from './components/productDetails';
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/products">
          <Product/>
        </Route>

        <Route path="/products/:id">
          <ProductDetails/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
