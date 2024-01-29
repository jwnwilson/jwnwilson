import './App.css'
import profile from './assets/profile.jpg'

const Cpu = (props) => {
  const width = props.width;
  const height = props.height;
  const pinWidth = 7;
  const pinGap = 15;
  const horizontalPinNum = Math.floor((height - pinWidth) / pinGap);
  const VerticalPinNum = Math.floor((width - pinWidth) / pinGap);
  const left = props.left || 0;
  const top = props.top || 0;

  const generateVerticalPins = (classNames) => {
    let pinsArray = [];
    for (let i = 0; i < VerticalPinNum; i++) {
      const pos = 7 + (i * pinGap);
      let pinStyle = { width: pinWidth + "px", left: pos + "px", margin: 0 };
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
    for (let i = 0; i < horizontalPinNum; i++) {
      const pos = 0 + (i * pinGap);
      let pinStyle = { height: pinWidth + "px", top: pos + "px" };
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
  const cpuClassNames = "flex flex-col relative border-2 border-black bg-zinc-900 py-8 px-8 rounded-xl shadow-lg space-y-2 items-center " + props.classNames

  return (
    <div className={cpuClassNames} style={{ height: height + "px", width: width +"px", left: left, top: top }}>
      {topPins}
      {bottomPins}
      {leftPins}
      {rightPins}
      {props.children}
    </div>
  )
}

const Circuits = (props) => {
  const startX = props.startX || 0;
  const startY = props.startY || 0; 
  const points = startX + "," + startY + " " + (props.points || "")
  return (
    <svg className="absolute h-screen w-full" style={{ height: "100%", width: "100%" }}>
      <polyline points={points} style={{ fill: "none", stroke: "#99C37A", strokeWidth: 3 }} />
      <circle cx={startX} cy={startY} r={10} fill="#99823D" />
      <circle cx={startX} cy={startY} r={6} fill="black" />
    </svg>
  )
}

function App() {

  return (
    <div className="flex h-screen justify-center bg-emerald-900">
      <div className="flex h-screen min-w-[1000px]">
        <Cpu width={250} height={250} classNames="m-auto">
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
        <div className="absolute">
          <Cpu width={150} height={150} top={50} left={50}>
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5 text-center">
                <p className="text-lg text-white font-semibold">
                  Topic A
                </p>
                <p className="text-slate-500 font-medium">
                  Subtitle
                </p>
              </div>
            </div>
          </Cpu>
        </div>
        <Circuits startX={360} startY={255} points={"360,255 388,280 388,310"}></Circuits>
        <Circuits startX={385} startY={250} points={"385,250 403,270 403,310"}></Circuits>
      </div>
    </div>
  )
}

export default App
