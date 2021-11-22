import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';
import { Settings } from './components/settting';
import { Navbar } from './components/routes';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Login/>
      <Dashboard/>
      <Settings/>
    </div>
  );
}

export default App;
