const Circuit = (props) => {
    const { startX, startY, width } = props;
    const strokeWidth = width || 4;
    let circuitPoints = `${startX},${startY} `;
    let lastPoints: Array<number> = [startX, startY];
    props.points.forEach(points => {
        lastPoints = [startX + points[0], startY + points[1]];
        circuitPoints += `${lastPoints[0]},${lastPoints[1]} `
    });
    return (
        <div className="absolute">
            <svg style={{ height: "100%", width: "100%", overflow: "visible" }}>
                <polyline points={circuitPoints} style={{ fill: "none", stroke: "#99C37A", strokeWidth: strokeWidth }} />
                <circle cx={lastPoints[0]} cy={lastPoints[1]} r={8} fill="#99823D" />
                <circle cx={lastPoints[0]} cy={lastPoints[1]} r={5} fill="black" />
            </svg>
            <svg style={{ position: "relative", height: "100%", width: "100%", overflow: "visible", top: -150 }}>
                <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#148BB1"/>
                    <stop offset="100%" stopColor="#DBE2E8"/>
                </linearGradient>
                </defs>
                    <g 
                    className="path" 
                    stroke="url(#linear)" 
                    strokeWidth="8" 
                    fill="none" 
                    fillRule="evenodd" 
                    strokeLinecap="butt" 
                    strokeLinejoin="round" 
                    strokeOpacity="1"
                    strokeDasharray="8,960,24,960,16,400"
                    strokeDashoffset="6400">
                    <g>
                        <polyline points={circuitPoints}></polyline>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Circuit;