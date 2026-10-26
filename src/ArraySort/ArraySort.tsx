import Node from "../Node/Node.tsx" 
import { type ArraySortState } from "../dataStructuresTypes.ts"

const [nodeBgColor, nodeColor] = ["black", "white"]
const [coloredNodeBg, coloredNodeColor] = ["white", "black"]

function ArraySort({ currState }: { currState: ArraySortState }) {
    let arr = currState[0]
    let i = currState[1][0]
    let j = currState[1][1]

    if (!currState) {
        arr = []
        i = 0
        j = 0
    }

    return (
        <>
            <div style={{ display: "flex", width: "fit-content" }} className="list">
                {
                    arr.map((value, nodeIndex) => {
                        const bgColor = (nodeIndex === i || nodeIndex === j) ? coloredNodeBg : nodeBgColor
                        const color = (nodeIndex === i || nodeIndex === j) ? coloredNodeColor : nodeColor 

                        return <Node value={value} nodeBgColor={bgColor} nodeColor={color} />
                    })
                }
            </div>
        </>
    )
}

export default ArraySort 
