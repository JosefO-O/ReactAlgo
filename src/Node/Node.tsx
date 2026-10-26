import "./Node.css"

function Node({ value, nodeBgColor, nodeColor }: { value: number, nodeBgColor: string, nodeColor: string }) {
    return (
        <>
            <div className="node" style={{ backgroundColor: nodeBgColor, color: nodeColor }}>{value}</div>
        </>
    )
}

export default Node
