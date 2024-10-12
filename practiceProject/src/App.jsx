import {useState} from 'react'
function App() {

  const[length,setLength] = useState(8);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 '>
          <h1 className='text-white text-center my-3 font-bold text-2xl'>Password Generator</h1>
          <div className='flex rounded-lg overflow-hidden mb-4'>
              <input 
                type="text" 
               
                className='outline-none w-full py-1 px-3'
                placeholder='Password'
                readOnly
             
              />
              <button 
            
              className='text-white shrink-0 px-3 py-0.5 bg-blue-700 
              outline-none'
              >Copy</button>
              
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range" 
              min={8}
              max={100}
             value={length}
              className='cursor-pointer'
    
              //jab ham event pass karenge to hi wah call kar sakta setLength ko
              />
              <label>Length: {length}</label>
            </div>

            <div className='flex items-center gap-x1'>
              <input 
              type="checkbox" 
             
              id='numberInput'
             
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x1'>
              <input 
              type="checkbox" 
             
              id='charInput'
             
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
