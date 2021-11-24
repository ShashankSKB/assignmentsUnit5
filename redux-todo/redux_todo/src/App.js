import logo from './logo.svg';
import './App.css';
import { TodoInput } from './components/todoinput';
import { TodoList } from './components/todolist';
function App() {
  return (
    <div className="App">
      <h1>todo</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
