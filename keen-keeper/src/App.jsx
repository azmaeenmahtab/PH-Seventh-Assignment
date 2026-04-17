
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-xl space-y-4 rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-emerald-700">Tailwind Test</h1>
        <div className="rounded-lg bg-red-500 p-4 text-white">
          If this box is red with white text, Tailwind is working.
        </div>
        <button className="btn btn-primary">DaisyUI Button</button>
      </div>
    </div>
  )
}

export default App
