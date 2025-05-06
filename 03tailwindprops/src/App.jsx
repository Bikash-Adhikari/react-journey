import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='dark:bg-slate-800 bg-slate-100 rounded-xl p-5 w-150 font-medium'>Tailwind Test by Bikash Adhikari</h1>

      <Card name="Rekha Ghimire" profession="Data Analyst" country="Nepal" btnText="Visit Profile" />
      <Card name="Hilary Clinton" profession="Rect Developer" country="Canda" />
    </>
  )
}

export default App
