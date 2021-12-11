import logo from './logo.svg';
import './App.css';
import { Item } from './components/item';
import { Navbar } from './components/navbar';
import { Sitename } from './components/sitename';
function App() {
  return (
    <div className="App">
      <Navbar>
        <Sitename>
          <Item label="Site name"></Item>
        </Sitename>
      <Item label="About us"></Item>
      <Item label="Prices"></Item>
      <Item label="Other"></Item>
      <Item label="Start page"></Item>
      <Item label="Offer"></Item>
      <Item label="Contact"></Item>
      </Navbar>
     
    </div>
  );
}

export default App;
