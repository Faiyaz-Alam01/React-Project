import { useState } from "react"

function App() {  
  
  let [count,setCount] = useState(0);

  const addCount = () => {
    if(count < 20){
      setCount(count+1);
    }
  }

  const removeCount = () =>{
    if(count > 0){
      setCount(count-1);
    }
  }

  const resetCount = ()=>{
    setCount(count-count);
  }
  return (
    <>
      <div className="w-screen max-w-md bg-zinc-600 p-10 h-50 space-y-4">
        <h1 className="text-3xl font-bold text-center">Counter App</h1>
        <p className="text-xl font-semibold ml-10">Count : {count}</p>
        <div className="flex justify-evenly">
          <button onClick={addCount}
          className="rounded-md px-3 py-1 text-white text-lg bg-indigo-500 font-bold hover:bg-indigo-600">Increase</button>
          <button  onClick={removeCount} 
          className="rounded-md px-3 py-1 text-white text-lg bg-indigo-500 font-bold hover:bg-indigo-600">Decrease</button>
          <button onClick={resetCount}
           className="rounded-md px-3 py-1 text-white text-lg bg-indigo-500 font-bold hover:bg-indigo-600">Reset</button>
        </div>
      </div>
    </>
  )
}
export default App

