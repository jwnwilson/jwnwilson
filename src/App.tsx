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

const Circuit = (props) => {
  const { startX, startY } = props;
  let circuitPoints = `${startX},${startY} `;
  let lastPoints: Array<number> = [startX, startY];
  props.points.forEach(points => {
    lastPoints = [startX + points[0], startY + points[1]];
    circuitPoints += `${lastPoints[0]},${lastPoints[1]} `
  });
  return (
    <svg className="absolute h-screen w-full" style={{ height: "100%", width: "100%", overflow: "visible" }}>
      <polyline points={circuitPoints} style={{ fill: "none", stroke: "#99C37A", strokeWidth: 4 }} />
      <circle cx={lastPoints[0]} cy={lastPoints[1]} r={8} fill="#99823D" />
      <circle cx={lastPoints[0]} cy={lastPoints[1]} r={5} fill="black" />
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
        {/* top circuits */}
        <Circuit startX={387} startY={300} points={[[0,-15], [-40,-30], [-40,-30]]}></Circuit>
        <Circuit startX={402} startY={300} points={[[0,-20], [-40,-35], [-40,-50]]}></Circuit>
        <Circuit startX={417} startY={300} points={[[0,-25], [-40,-40], [-40,-55]]}></Circuit>
        <Circuit startX={432} startY={300} points={[[0,-30], [-40,-45], [-40,-60]]}></Circuit>
        <Circuit startX={447} startY={300} points={[[0,-35], [-40,-50], [-40,-80], [-205,-175]]}></Circuit>
        <Circuit startX={462} startY={300} points={[[0,-40], [-40,-55], [-40,-85], [-220,-190]]}></Circuit>
        <Circuit startX={477} startY={300} points={[[0,-45], [-40,-60], [-40,-90], [-235,-205]]}></Circuit>
        <Circuit startX={492} startY={300} points={[[0,-30], [0,-45], [0,-60]]}></Circuit>
        <Circuit startX={507} startY={300} points={[[0,-20], [0,-35]]}></Circuit>
        <Circuit startX={522} startY={300} points={[[0,-15], [15,-30], [15,-45]]}></Circuit>
        <Circuit startX={537} startY={300} points={[[0,-15], [15,-30], [15,-55]]}></Circuit>
        <Circuit startX={552} startY={300} points={[[0,-15], [15,-30], [15,-45]]}></Circuit>
        <Circuit startX={567} startY={300} points={[[0,-15], [45,-55], [45,-60]]}></Circuit>
        <Circuit startX={582} startY={300} points={[[0,-15], [45,-55], [45,-75]]}></Circuit>
        <Circuit startX={597} startY={300} points={[[0,-15], [45,-55], [45,-60]]}></Circuit>
        <Circuit startX={612} startY={300} points={[[0,-15], [15,-25], [35,-25]]}></Circuit>
        {/* bottom circuits */}
        <Circuit startX={387} startY={615} points={[[0,15], [-40,30], [-40,30]]}></Circuit>
        <Circuit startX={402} startY={615} points={[[0,20], [-40,35], [-40,50]]}></Circuit>
        <Circuit startX={417} startY={615} points={[[0,25], [-40,40], [-40,55]]}></Circuit>
        <Circuit startX={432} startY={615} points={[[0,30], [-40,45], [-40,60]]}></Circuit>
        <Circuit startX={447} startY={615} points={[[0,35], [-40,50], [-40,90], [95,175]]}></Circuit>
        <Circuit startX={462} startY={615} points={[[0,40], [-40,55], [-40,85], [100,175]]}></Circuit>
        <Circuit startX={477} startY={615} points={[[0,45], [-40,60], [-40,80], [105,175]]}></Circuit>
        <Circuit startX={492} startY={615} points={[[0,30], [0,45], [0,60]]}></Circuit>
        <Circuit startX={507} startY={615} points={[[0,20], [0,35]]}></Circuit>
        <Circuit startX={522} startY={615} points={[[0,15], [15,30], [15,45]]}></Circuit>
        <Circuit startX={537} startY={615} points={[[0,15], [15,30], [15,55]]}></Circuit>
        <Circuit startX={552} startY={615} points={[[0,15], [15,30], [15,45]]}></Circuit>
        <Circuit startX={567} startY={615} points={[[0,15], [45,55], [45,60]]}></Circuit>
        <Circuit startX={582} startY={615} points={[[0,15], [45,55], [45,75]]}></Circuit>
        <Circuit startX={597} startY={615} points={[[0,15], [45,55], [45,60]]}></Circuit>
        <Circuit startX={612} startY={615} points={[[0,15], [15,25], [35,25]]}></Circuit>
        {/* left circuits */}
        <Circuit startX={345} startY={345} points={[[-15, 0], [-30, -40], [-30, -60]]}></Circuit>
        <Circuit startX={345} startY={360} points={[[-20, 0], [-35, -40], [-50, -40]]}></Circuit>
        <Circuit startX={345} startY={375} points={[[-25, 0], [-40, -40], [-55, -40]]}></Circuit>
        <Circuit startX={345} startY={390} points={[[-30, 0], [-45, -40], [-60, -40]]}></Circuit>
        <Circuit startX={345} startY={405} points={[[-45, 0], [-70, 40], [-100,40], [-225,175]]}></Circuit>
        <Circuit startX={345} startY={420} points={[[-40, 0], [-65, 40], [-100,40], [-225,180]]}></Circuit>
        <Circuit startX={345} startY={435} points={[[-35, 0], [-60, 40], [-100,40], [-225,185]]}></Circuit>
        <Circuit startX={345} startY={450} points={[[-30, 0], [-25, 0]]}></Circuit>
        <Circuit startX={345} startY={465} points={[[-20, 0], [-35, 0]]}></Circuit>
        <Circuit startX={345} startY={480} points={[[-15, 0], [-35,30], [-55,30]]}></Circuit>
        <Circuit startX={345} startY={495} points={[[-15, 0], [-35,30], [-45,30]]}></Circuit>
        <Circuit startX={345} startY={510} points={[[-15, 0], [-35,30], [-55,30]]}></Circuit>
        <Circuit startX={345} startY={525} points={[[-15, 0], [-55,60], [-70,60]]}></Circuit>
        <Circuit startX={345} startY={540} points={[[-15, 0], [-55,60], [-80,60]]}></Circuit>
        <Circuit startX={345} startY={555} points={[[-15, 0], [-55,60], [-70,60]]}></Circuit>
        <Circuit startX={345} startY={570} points={[[-10, 0], [-25,25], [-25,45]]}></Circuit>
        {/* right circuits */}
        <Circuit startX={655} startY={345} points={[[15, 0], [30, -40], [30, -60]]}></Circuit>
        <Circuit startX={655} startY={360} points={[[20, 0], [35, -40], [50, -40]]}></Circuit>
        <Circuit startX={655} startY={375} points={[[25, 0], [40, -40], [55, -40]]}></Circuit>
        <Circuit startX={655} startY={390} points={[[30, 0], [45, -40], [60, -40]]}></Circuit>
        <Circuit startX={655} startY={405} points={[[45, 0], [70, 40], [95,40], [225,-185]]}></Circuit>
        <Circuit startX={655} startY={420} points={[[40, 0], [65, 40], [100,40], [225,-180]]}></Circuit>
        <Circuit startX={655} startY={435} points={[[35, 0], [60, 40], [105,40], [225,-175]]}></Circuit>
        <Circuit startX={655} startY={450} points={[[30, 0], [25, 0]]}></Circuit>
        <Circuit startX={655} startY={465} points={[[20, 0], [35, 0]]}></Circuit>
        <Circuit startX={655} startY={480} points={[[15, 0], [35,30], [55,30]]}></Circuit>
        <Circuit startX={655} startY={495} points={[[15, 0], [35,30], [45,30]]}></Circuit>
        <Circuit startX={655} startY={510} points={[[15, 0], [35,30], [55,30]]}></Circuit>
        <Circuit startX={655} startY={525} points={[[15, 0], [55,60], [70,60]]}></Circuit>
        <Circuit startX={655} startY={540} points={[[15, 0], [55,60], [80,60]]}></Circuit>
        <Circuit startX={655} startY={555} points={[[15, 0], [55,60], [70,60]]}></Circuit>
        <Circuit startX={655} startY={570} points={[[10, 0], [25,25], [25,45]]}></Circuit>
      </div>
    </div>
  )
}

export default App
