import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Details } from './components/details';
function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Details/>
    </div>
  );
}

export default App;
