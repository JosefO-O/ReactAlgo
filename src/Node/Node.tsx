import "./Node.css"

function Node({ value, isCurrSwapNode }: { value: number, isCurrSwapNode: boolean }) {
    return (
        <>
            <div className={ isCurrSwapNode ? "swap_node" : "node" }>{value}</div>
        </>
    )
}

export default Node
