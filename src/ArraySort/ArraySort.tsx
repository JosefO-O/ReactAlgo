import Node from "../Node/Node.tsx" 

function ArraySort({ currState }: { currState: any }) {
    let arr: number[]

    let i: number
    let j: number

    if (currState.value) {
        arr = currState.value[0]
        i = currState.value[1][0]
        j = currState.value[1][1]
    } else arr = []

    return (
        <>
            <div style={{ display: "flex", width: "fit-content" }} className="list">
                {
                    arr.map((value, nodeIndex) => {
                        return <Node value={value} isCurrSwapNode={ (nodeIndex == i || nodeIndex == j) ? true : false }/>
                    })
                }
            </div>
        </>
    )
}

export default ArraySort 
