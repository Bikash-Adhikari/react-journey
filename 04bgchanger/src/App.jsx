import { useState } from 'react'


function App() {
  const [color, setColor] = useState("green")

  return (
    <div className='h-screen w-full'
      style={{ background: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{ background: "Green" }}>Green</button>

          <button onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{ background: "Red" }}>Red</button>

          <button onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{ background: "Blue" }}>Blue</button>

          <button onClick={() => setColor("olive")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{ background: "Olive" }}>Olive</button>

          <button onClick={() => setColor("gray")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{ background: "Grey" }}>Gray</button>

          <button onClick={() => setColor("pink")}
            className='outline-none px-4 py-1 rounded-full text-blue shadow-lg cursor-pointer'
            style={{ background: "Pink" }}>Pink</button>

          <button onClick={() => setColor("purple")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{ background: "Purple" }}>Purple</button>

          <button onClick={() => setColor("lavender")}
            className='outline-none px-4 py-1 rounded-full text-blue shadow-lg cursor-pointer'
            style={{ background: "Lavender" }}>Lavender</button>

          <button onClick={() => setColor("white")}
            className='outline-none px-4 py-1 rounded-full text-blue shadow-lg cursor-pointer'
            style={{ background: "White" }}>White</button>

          <button onClick={() => setColor("black")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{ background: "Black" }}>Black</button>
        </div>

      </div>

    </div>
  )
}

export default App
