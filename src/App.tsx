import './App.css'
import profile from './assets/profile.jpg'

function App() {

  return (
    <div className="flex h-screen bg-emerald-950">
      <div className="flex flex-col w-[250px] h-[250px] relative m-auto border-2 border-black bg-zinc-900 py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 items-center">
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "5px"}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "20px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "35px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "50px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "65px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "80px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "95px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "110px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "125px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "140px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "155px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "170px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "185px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "200px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "215px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -top-7 bg-zinc-400" style={{left: "230px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "5px"}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "20px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "35px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "50px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "65px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "80px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "95px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "110px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "125px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "140px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "155px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "170px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "185px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "200px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "215px", margin: 0}}></div>
        <div className="absolute h-7 w-2 -bottom-7 bg-zinc-400" style={{left: "230px", margin: 0}}></div>
        <div className="h-24 space-y-0.5">
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
