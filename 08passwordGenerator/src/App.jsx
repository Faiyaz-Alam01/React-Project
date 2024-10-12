import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("");

  //useCallback : PassWord Generator function
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char= Math.floor(Math.random()*str.length + 1); // char : index stoe

      pass += str.charAt(char);

    }
    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])


    //useRef Hook
    const passwordRef =useRef(null)

  //useRef hooks for copy copyPasswordToClipboard text
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //select clipboard chang bg color
    passwordRef.current?.setSelectionRange(0,100);  //select range 0 to 3 text
    window.navigator.clipboard.writeText(password)  //copy text of password
  }, [password])

  //length,numberAllowed,charAllowed isme kuchh bhi chnage ho to phir se code run karo
  useEffect(()=>{
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 '>
          <h1 className='text-white text-center my-3 font-bold text-2xl'>Password Generator</h1>
          <div className='flex rounded-lg overflow-hidden mb-4'>
              <input 
                type="text" 
                value={password}
                className='outline-none w-full py-1 px-3'
                placeholder='Password'
                readOnly
                ref={passwordRef}
              />
              <button 
              onClick={copyPasswordToClipboard}
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
              onChange={(e)=> {setLength(e.target.value)}} //onchange direct nhi de sakta becuase hame ek event bhi dena hota h
              //jab ham event pass karenge to hi wah call kar sakta setLength ko
              />
              <label>Length: {length}</label>
            </div>

            <div className='flex items-center gap-x1'>
              <input 
              type="checkbox" 
              defaultChecked = {numberAllowed}
              id='numberInput'
              onChange={()=> {
                setNumberAllowed((prev) => !prev) //((prev) => !prev) se false and true flip hoga 
                //setNumberAllowed (true) karne se wah always true hi ho jayega jo hame nhi chahiye
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x1'>
              <input 
              type="checkbox" 
              defaultChecked = {charAllowed}
              id='charInput'
              onChange={()=> {
                setCharAllowed((prev) => !prev) //call back fire 
              }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
