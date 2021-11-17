import logo from './logo.svg';
import './App.css';

// import { Forms } from './components/forms';
import { Navbar } from './components/navbar';
import { Status } from './components/loginstatus';
function App() {
  return (
    <div className="App">
    {/* <Forms/> */}
    <Navbar/>
    <Status/>
    </div>
  );
}

export default App;
