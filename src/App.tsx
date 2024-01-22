import './App.css'
import profile from './assets/profile.jpg'

function App() {

  return (
    <div className="flex h-screen bg-emerald-950">
      <div className="relative m-auto border-2 border-black bg-zinc-900 py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="h-24">
          <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={profile} alt="Noel's Face" />
        </div>
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-white font-semibold">
              Noel Wilson
            </p>
            <p className="text-slate-500 font-medium">
              Principle Engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
