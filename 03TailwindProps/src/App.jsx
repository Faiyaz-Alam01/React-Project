import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "faiyaz",
    pass : 123,
    age : 20
  }

  let myArr = [1,2,3,4,5]

  // props pass karo  , only varible not array and object in  direct jsx tag
  return (
    <>
      <h1 className="bg-green-500 text-black
      p-4 rounded-xl mb-10">Tailwind test</h1>   
      <Card username = "chaiaurcode" btnText = "Click Me"/>
      <Card username = "faiyazMalik" />
    </>
  )
}

export default App
