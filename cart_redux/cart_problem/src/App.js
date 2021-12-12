import logo from './logo.svg';
import './App.css';
import { Todo } from './components/todoinput';
import { List } from './components/todoList';
import { Route, Switch } from 'react-router';
import { Item } from './components/particularItem';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
        <Todo></Todo>
        <List></List>
        </Route>

        <Route path="/item/:id">
         <Item></Item>
        </Route>


      </Switch>
      
      
    </div>
  );
}

export default App;
