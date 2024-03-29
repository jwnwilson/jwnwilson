export interface Props {
    height: number;
    width: number;
    rotate?: string;
    left: number;
    top: number;
    color? : string;
    classNames?: string;
  }

const Diode = (props: Props) => {
    const { left, top, height, width, color } = props;
    const middleLength = width * 0.4;
    const rotate = props.rotate || "";
    const diodeClassNames = "flex justify-center bg-gray-400 " + props.classNames
    return (
        <div id="diode" className="absolute">
            <div className="absolute border-2 border-slate-500" style={{ left: left, top: top, rotate: rotate }}>
                <div className={diodeClassNames} style={{ height: height + "px", width: width + "px" }}>
                    <div style={{ height: height + "px", width: width - middleLength + "px", left: left, top: top, backgroundColor: color }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diode;