import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)  // setCounter function controls the counter variable


  // Add value 
  const addValue = () => {
    if (counter >= 20) {
      return
    } else {
      setCounter(counter + 1)
    }
  }

  //Remove value
  const removeValue = () => {
    if (counter <= 0) {
      return
    } else {
      setCounter(counter - 1)
    }
  }


  return (
    <>
      <h1>Bikash Adhikari</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value {counter} </button><br />{ }<br />
      <button onClick={removeValue}>Decrease value {counter}</button>
    </>
  )
}

export default App


