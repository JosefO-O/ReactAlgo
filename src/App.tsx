import DataStructureViewer from "./DataStructureViewer/DataStructureViewer.tsx"

import ArraySort from "./ArraySort/ArraySort.tsx"

import insertionSort from "./ArraySort/algorithms/insertionSort.ts"
import bubbleSort from "./ArraySort/algorithms/bubbleSort.ts"
import selectionSort from "./ArraySort/algorithms/selectionSort.ts"
import quickSort from "./ArraySort/algorithms/quickSort.ts"

const arrayGrande = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100000));
function App() {
    return (
        <>
            <DataStructureViewer DsComponent={ ArraySort } algorithm={ quickSort } dsValue={ arrayGrande }/>
        </>
    )
}

export default App
