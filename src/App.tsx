import './App.css'
import profile from './assets/profile.jpg'

function App() {

  return (
    <div className="flex h-screen">
      <div className="m-auto border-2 border-slate-600 py-8 px-8 max-w-sm mx-auto bg-black rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="block overflow-hidden mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0">
          <img className="scale-125 block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={profile} alt="Noel's Face" />
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
