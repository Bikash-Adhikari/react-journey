import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  //To use useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!#$ %&'()*+,-./:;<=>?@[]^_`{|}~"

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


  //Write copyPassToClipBoard Method with useCallback() hook
  const copyPassToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])



  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])




  return (
    <>
      <div className='w-full max-w-md shadow-md rounded-lg px-4 py-3 my-8 mx-auto text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>

          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='password'
          readOnly
          ref={passwordRef} 
          />

          <button
          onClick={copyPassToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer focus:outline-2 active:bg-blue-800 active:font-bold'>
          copy
          </button>

        </div>

        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />

              <label >length: {length} </label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked = {numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumberAllowed((prev)=> !prev);
              }} 
              /> 
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked = {charAllowed}
              id='charInput'
              onChange={()=>{
                setCharAllowed((prev)=> !prev);
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
