import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center gap-8 text-slate-900 p-6"
      style={{
        backgroundColor: '#f3eedd',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
      }}
    >
      <h1 className="text-4xl font-bold tracking-tight">Vite + React + Tailwind</h1>
      <p className="text-2xl font-semibold">Count: {count}</p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="rounded-lg bg-white px-5 py-2.5 font-medium text-black border-2 border-black shadow hover:bg-slate-100 active:scale-95 transition"
        >
          +1
        </button>
        <button
          onClick={() => setCount((c) => c - 1)}
          className="rounded-lg bg-white px-5 py-2.5 font-medium text-black border-2 border-black shadow hover:bg-slate-100 active:scale-95 transition"
        >
          -1
        </button>
      </div>
      <p className="text-slate-500 dark:text-slate-400">
        Edit <code className="font-mono text-sm">src/App.jsx</code> and save to test HMR.
      </p>
    </main>
  )
}

export default App
