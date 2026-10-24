import ArraySort from "./ArraySort/ArraySort.tsx"

import insertionSort from "./ArraySort/sortFunctions/insertionSort.ts"
import bubbleSort from "./ArraySort/sortFunctions/bubbleSort.ts"


function App() {
    return (
        <>
            <ArraySort array={[4, 4, 4, 5, 6, 7, 3, 0, -1, 20, 50, 10, 1, 2, 3, 4, -2, -5]} sortFunction={ bubbleSort } />
            <ArraySort array={[4, 4, 4, 5, 6, 7, 3, 0, -1, 20, 50, 10, 1, 2, 3, 4, -2, -5]} sortFunction={ insertionSort } />
        </>
    )
}

export default App
