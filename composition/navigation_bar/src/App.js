import logo from './logo.svg';
import './App.css';
import { Item } from './components/navbar/item';
import { Sitename } from './components/navbar/sitename';
import { Navbar } from './components/navbar/navbar';
import { Form } from './components/creditcard/form';
import { ItemForm } from './components/creditcard/formItem';
function App() {
  return (
    <div className="App">
     <Form></Form>
     {/* <ItemForm  src="https://cdn-icons-png.flaticon.com/512/6283/6283675.png" value="card holder name"></ItemForm> */}
    </div>
  );
}

export default App;
