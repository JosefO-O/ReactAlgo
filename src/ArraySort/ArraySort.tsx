import Node from "../Node/Node.tsx" 
import { type ArraySortState } from "../dataStructuresTypes.ts"

const [nodeBgColor, nodeColor] = ["black", "white"]
const [coloredNodeBg, coloredNodeColor] = ["white", "black"]

function ArraySort({ currState }: { currState: ArraySortState }) {
    let arr = currState[0]

    return (
        <>
            <div style={{ display: "flex", width: "fit-content" }} className="list">
                {
                    arr.map((value, nodeIndex) => {
                        const bgColor = (currState[1].includes(nodeIndex)) ? coloredNodeBg : nodeBgColor
                        const color = (currState[1].includes(nodeIndex)) ? coloredNodeColor : nodeColor 

                        return <Node value={value} nodeBgColor={bgColor} nodeColor={color} key={nodeIndex} />
                    })
                }
            </div>
        </>
    )
}

export default ArraySort 
