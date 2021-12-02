import logo from './logo.svg';
import './App.css';
import { PostInput } from './components/postInput';
import { useState } from 'react';
function App() {

  const [count,setCounter]=useState(0);

  // setInterval(()=>{
  //   console.log("rendeder")
  //   setCounter((prev)=>prev+1)
  // },1000)

  return (
    <div className="App">
      <div>Count :{count}</div>
      <PostInput/>
    </div>
  );
}

export default App;
