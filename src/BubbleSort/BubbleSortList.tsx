import { useState } from "react"
import { bubbleSort } from "./bubbleSort.ts"

import Node from "../Node/Node.tsx" 

function BubbleSortList({ array }: { array: number[] }) {
    const [iterator, _] = useState(bubbleSort(array))
    const [currState, setCurrState] = useState(iterator.next())

    let arr: number[]

    let i: number
    let j: number

    if (currState.value) {
        arr = currState.value[0]
        i = currState.value[1][0]
        j = currState.value[1][1]
    } else arr = []

    function showNextState() {
        const next = iterator.next()

        if (!next.done) 
            setCurrState(next)
    }

    return (
        <>
            <div style={{ display: "flex", width: "fit-content" }} className="list" onClick={ showNextState }>
                {
                    arr.map((value, nodeIndex) => {
                        return <Node value={value} isCurrSwapNode={ (nodeIndex == i || nodeIndex == j) ? true : false }/>
                    })
                }
            </div>
        </>
    )
}

export default BubbleSortList 
