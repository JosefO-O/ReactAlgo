import DataStructureViewer from "./DataStructureViewer/DataStructureViewer.tsx"

import ArraySort from "./ArraySort/ArraySort.tsx"

import insertionSort from "./ArraySort/sortFunctions/insertionSort.ts"
import bubbleSort from "./ArraySort/sortFunctions/bubbleSort.ts"



function App() {
    return (
        <>
            <DataStructureViewer DsComponent={ ArraySort } algorithm={ insertionSort } dsValue={ [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] }/>
            <DataStructureViewer DsComponent={ ArraySort } algorithm={ bubbleSort } dsValue={ [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] }/>
        </>
    )
}

export default App
