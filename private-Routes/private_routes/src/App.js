import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';
import { Settings } from './components/settting';
import { Navbar } from './components/routes';
import {Switch  ,Route ,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>

      <Route path="/login">
      <Login/>
      </Route>

      <Route exact path="/dashboard">
      <Dashboard/>
      </Route>

      <Route path="/dashboard/setting">
      <Settings/>
      </Route>
      
      </Switch>
   
    </div>
  );
}

export default App;
