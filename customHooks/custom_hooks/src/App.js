import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { useDelay } from './Hooks/useDelay';
import { useFetch } from './Hooks/useFetch';
function App() {

  // const {delay} =useDelay();
  const {loading,error,data}=useFetch('https://reqres.in/api/users?');

  const [load,setLoad]=useState(true)
  console.log("data",data)

  if(loading=="false")
  {
    console.log(loading)
    setLoad(false)
  }

  return load ? (
    <h1>loading ...</h1>
  ):
  (
    <div>{data[0].first_name}</div>
  )
}

export default App;
