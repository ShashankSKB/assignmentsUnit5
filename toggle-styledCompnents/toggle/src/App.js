import logo from './logo.svg';
import './App.css';
import { Button } from './customs/button';
import { useState } from 'react';
function App() {

  const [theme,setTheme]=useState(true)
  return (
    <div className="App">
      <Button theme={theme}>Click me</Button>
      <button onClick={()=>{
        setTheme(!theme)
      }} > Toggle mode</button>
    </div>
  );
}

export default App;
