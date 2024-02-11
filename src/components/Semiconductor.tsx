const SemiConductor = (props) => {
    const width = props.width;
    const height = props.height;
    const rotate = props.rotate;
    const absolute = props.absolute || false;
    const pinWidth = 5;
    const pinGap = 10;
    const horizontalPinNum = Math.floor((height - 5) / pinGap);
    const left = props.left || 0;
    const top = props.top || 0;

    const generateHorizontalPins = (classNames: string, direction: string) => {
        let pinsArray = [];
        for (let i = 0; i < horizontalPinNum; i++) {
            const pos = 5 + (i * pinGap);
            let pinStyle = { height: pinWidth + "px", top: pos + "px" };
            pinStyle[direction] = "-10px";
            pinsArray.push(
                <div key={"pins-" + i} className={classNames} style={pinStyle}></div>
            )
        }
        return pinsArray;
    }

    let leftPins = generateHorizontalPins("absolute h-2 w-3 -top-1 bg-gray-400 rounded-[1px]", "left");
    let rightPins = generateHorizontalPins("absolute h-2 w-3 -top-1 bg-gray-400 rounded-[1px]", "right");
    const cpuClassNames = "flex flex-col relative border-2 border-black bg-gray-900 rounded shadow-lg items-center " + props.classNames
    const cpuComponent = (
        <div className={cpuClassNames} style={{ height: height + "px", width: width + "px", left: left, top: top, rotate: rotate }}>
            {leftPins}
            {rightPins}
            {props.children}
        </div>
    )

    if (absolute) {
        return (
            <div className="absolute">
                {cpuComponent}
            </div>
        )
    } else {
        return cpuComponent
    }

}

export default SemiConductor;