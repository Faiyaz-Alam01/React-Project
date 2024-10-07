import { useState } from 'react'
import './App.css'

function App() {
  
  const [text, setText] = useState('hero');

  const handleChange = (e) =>{
      setText(e.target.value)
  }

  const addText = () =>{
    setText('hello');
  }
  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>Your Typed : {text}</p>
      <button onClick={addText}>reset</button>
    </>
  )
}

export default App
