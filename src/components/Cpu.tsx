import {
  Button
} from "@material-tailwind/react";

const Cpu = (props) => {
    const width = props.width;
    const height = props.height;
    const onClick = props.onClick;
    const pinWidth = 7;
    const pinGap = 15;
    const horizontalPinNum = Math.floor((height - pinWidth) / pinGap);
    const VerticalPinNum = Math.floor((width - pinWidth) / pinGap);
    const left = props.left || 0;
    const top = props.top || 0;
  
    const generateVerticalPins = (classNames) => {
      let pinsArray = [];
      for (let i = 0; i < VerticalPinNum; i++) {
        const pos = 9 + (i * pinGap);
        let pinStyle = { width: pinWidth + "px", left: pos + "px", margin: 0 };
        if (i === 0) {
          delete pinStyle.margin;
        }
        pinsArray.push(
          <div key={"pins-" + i} className={classNames} style={pinStyle}></div>
        )
      }
      return pinsArray;
    }
  
    const generateHorizontalPins = (classNames: string, direction: string) => {
      let pinsArray = [];
      for (let i = 0; i < horizontalPinNum; i++) {
        const pos = 10 + (i * pinGap);
        let pinStyle = { height: pinWidth + "px", top: pos + "px" };
        pinStyle[direction] = "-28px";
        pinsArray.push(
          <div key={"pins-" + i} className={classNames} style={pinStyle}></div>
        )
      }
      return pinsArray;
    }
  
    let topPins = generateVerticalPins("absolute h-7 -top-7 bg-gray-400 rounded-[2px]");
    let bottomPins = generateVerticalPins("absolute h-7 -bottom-7 bg-gray-400 rounded-[2px]");
    let leftPins = generateHorizontalPins("absolute h-2 w-7 -top-1 bg-gray-400 rounded-[2px]", "left");
    let rightPins = generateHorizontalPins("absolute h-2 w-7 -top-1 bg-gray-400 rounded-[2px]", "right");
    const cpuClassNames = "flex flex-col relative border-2 border-black bg-gray-900 py-8 px-8 rounded-xl shadow-lg space-y-2 items-center z-10 justify-center " + props.classNames
    const cpuComponent = (
        <div className="absolute" style={{ height: height + "px", width: width + "px", left: left, top: top }}>
            <Button onClick={onClick} className={cpuClassNames} style={{ height: height + "px", width: width + "px"}}>
                {props.children}
            </Button>
            {topPins}
            {bottomPins}
            {leftPins}
            {rightPins}
        </div>
      
    )
  

    return (
        <div className="absolute">
            {cpuComponent}
        </div>
    )
}

export default Cpu;