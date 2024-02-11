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
        </div>
    )
}

export default Circuit;