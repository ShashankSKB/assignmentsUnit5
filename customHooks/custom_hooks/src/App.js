import logo from './logo.svg';
import './App.css';
import { useDelay } from './Hooks/useDelay';
function App() {

  const {delay} =useDelay();

  return delay ? (
    <div className="App">

    <h1>Hello world</h1>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default App;
