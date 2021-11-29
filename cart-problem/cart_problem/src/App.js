import logo from './logo.svg';
import './App.css';
import { Content } from './Components/appContent';
import { Counter } from './util/counter';
import { CartItems } from './Components/cartItems';
function App() {
  return (
    <div className="App">
      <Content/>
      <CartItems/>
     
    </div>
  );
}

export default App;
