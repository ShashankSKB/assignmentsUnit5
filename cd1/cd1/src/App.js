import logo from './logo.svg';
import './App.css';
import { Login } from './components/input';
import { Shows } from './components/newshows';
import { Show } from './components/show';
import { Route, Switch } from 'react-router';
import { Tickets } from './components/dashboard';
import { Navbar } from './components/navbar';
function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <Switch>

  
   
    <Route exact path="/">
      
      <Shows></Shows>
    </Route>

    <Route exact path="/login">
      <Login/>
      
    </Route>

    <Route path="/show">
     
      <Show>
        
      </Show>
    </Route>

    <Route path="/tickets">
     
      <Tickets></Tickets>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
