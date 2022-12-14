import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import LoaderPage from './LoaderPage';
import Pages from './Pages';

function App() {

  const [loaderEnded, setLoaderEnded] = useState(false)
  const y = ()=>{
      setLoaderEnded(true)
  }

   useEffect(()=>{

      setTimeout(y,3000);
  },[])
console.log(loaderEnded)

  return (
    <div className="App">
        <LoaderPage loaderEnded={loaderEnded}/>
        <Pages loaderEnded={loaderEnded}/>
    </div>
  );
}

export default App;
