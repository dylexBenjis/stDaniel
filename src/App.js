import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import img from './Images/stdaniel.png'
import LoaderPage from './LoaderPage';
import Pages from './Pages';

function App() {

  const [loaderEnded, setLoaderEnded] = useState(false)
  const [load, setLoad] = useState(false)
  const y = ()=>{
      setLoaderEnded(true)
  }

  const x = () =>{
    setLoad(true)

  }
  useEffect(()=>{
    if(load===true){
      setTimeout(y,3000);}
  },[load])
console.log(loaderEnded, load)

  return (
    <div className="App">
        <LoaderPage loaderEnded={loaderEnded} x={x}/>
        <Pages loaderEnded={loaderEnded}/>
    </div>
  );
}

export default App;
