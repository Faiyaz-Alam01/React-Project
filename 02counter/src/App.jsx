import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //counter->variable , setCounter->function or Method hai counter ka 
  let [counter,setCounter] = useState(15)

  // let counter = 15;

  const addValue = ()=>{
     // counter+=1; 
     if(counter <20){
      setCounter(counter+1)
     }
    
    // console.log('clicked', counter);
  }

  const removeValue = () =>{ 
    if(counter >0){
      setCounter(counter-1);
    }
    
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <br/>
      <button
      onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
