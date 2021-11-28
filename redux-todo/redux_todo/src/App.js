import logo from './logo.svg';
import './App.css';
import { TodoInput } from './components/todoinput';
import { TodoList } from './components/todolist';
import { Route, Switch } from 'react-router';
import {Item} from "./components/particularItem"
function App() {
  return (
    <div className="App">
      <h1>todo</h1>
     <Switch>

      <Route exact path="/">
      <TodoInput/>
      <TodoList/>
      </Route>

      <Route path="/item">
      <Item/>
      </Route>

     </Switch>
      
      
      
      
      
    </div>
  );
}

export default App;
