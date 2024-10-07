import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  const addValue = ()=>{
    //setCounter ( (counter) => {} )
    setCounter(preCounter => preCounter + 1)
    setCounter(preCounter => preCounter + 1)
    setCounter(preCounter => preCounter + 1)
    setCounter(preCounter => preCounter + 1)
  }

  const RemoveValue = ()=> {
    if(counter > 0){
      counter = counter-1;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h3>counter value : {counter}</h3>

      <button
      onClick={addValue}>Add Value</button>

     <br/><br/>

      <button 
      onClick={RemoveValue}>Remove Value</button>
        
    </>
  )
}

export default App
