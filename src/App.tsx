import './App.css'
import profile from './assets/profile.jpg'

const Cpu = (props) => {
  const generateVerticalPins = (classNames) => {
    let pinsArray = [];
    for (let i = 0; i < 15; i++) {
      const pos = 7 + (i * 16);
      let pinStyle = { width: "7px", left: pos + "px", margin: 0 };
      if (i === 0) {
        delete pinStyle.margin;
      }
      pinsArray.push(
        <div className={classNames} style={pinStyle}></div>
      )
    }
    return pinsArray;
  }

  const generateHorizontalPins = (classNames: string, direction: string) => {
    let pinsArray = [];
    for (let i = 0; i < 15; i++) {
      const pos = 0 + (i * 16);
      let pinStyle = { height: "7px", top: pos + "px" };
      pinStyle[direction] = "-28px";
      pinsArray.push(
        <div className={classNames} style={pinStyle}></div>
      )
    }
    return pinsArray;
  }

  let topPins = generateVerticalPins("absolute h-7 -top-7 bg-zinc-400 rounded");
  let bottomPins = generateVerticalPins("absolute h-7 -bottom-7 bg-zinc-400 rounded");
  let leftPins = generateHorizontalPins("absolute h-2 w-7 -top-1 bg-zinc-400 rounded", "left");
  let rightPins = generateHorizontalPins("absolute h-2 w-7 -top-1 bg-zinc-400 rounded", "right");

  return (
    <div className="flex flex-col w-[250px] h-[250px] relative m-auto border-2 border-black bg-zinc-900 py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 items-center">
      {topPins}
      {bottomPins}
      {leftPins}
      {rightPins}
      {props.children}
    </div>
  )
}

const Circuits = () => {
  return (
    <svg style={{ height: "100%", width: "100%" }}>
      <polyline points="50,50 225,300" style={{ fill: "none", stroke: "#78B365", strokeWidth: 3 }} />
      <circle cx={50} cy={50} r={10} fill="#99823D" />
      <circle cx={50} cy={50} r={6} fill="black" />
    </svg>
  )
}

function App() {

  return (
    <div className="flex h-screen justify-center bg-emerald-900">
      <div className="flex h-screen min-w-[1000px]">
        <Cpu>
          <div className="h-24 space-y-0.5">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={profile} alt="Noel's Face" />
          </div>
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5 text-center">
              <p className="text-lg text-white font-semibold">
                Noel Wilson
              </p>
              <p className="text-slate-500 font-medium">
                Principle Engineer
              </p>
            </div>
          </div>
        </Cpu>
        <div className="absolute h-screen w-screen">
          <Circuits></Circuits>
        </div>
      </div>
    </div>
  )
}

export default App
