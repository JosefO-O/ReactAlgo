import { type ComponentType } from "react"
import { type ArraySortState } from "../dataStructuresTypes"

import { useState, useRef } from "react"

type PossibleStates = 
    ArraySortState

interface ViewerProps {
    dsValue: any, // the data structure
    DsComponent: ComponentType<any>, // component that represents the data structure
    algorithm: (dsValue: any) => Generator<PossibleStates> // applies the algorithm on the data structure
}

function DataStructureViewer({ dsValue, DsComponent, algorithm  }: ViewerProps) {
    const [gen, _] = useState(algorithm(dsValue))
    const [stateStack, setStateStack] = useState([gen.next()])
    const [top, setTop] = useState(0)

    const [isPaused, setIsPaused] = useState(true) 
    const playingId = useRef<number | null>(null)

    function nextState() {
        const next = (top === stateStack.length-1) ? gen.next() : stateStack[top+1] 

        if (top === stateStack.length-1 && !next.done)
            setStateStack([...stateStack, next])

        if (!next.done)
            setTop(top+1)
    }

    function previousState() {
        if (top > 0)
            setTop(top-1)
    }

    function playPause() {
        setIsPaused(!isPaused)

        if (!isPaused && playingId.current !== null) {
            clearInterval(playingId.current)
            playingId.current = null
        }

        else if (isPaused && playingId.current === null) {
            playingId.current = setInterval(() => {
                nextState()
            }, 1000)
        } 
    }

    return (
        <div className="dsViewer">
            <div className="ds">
                <DsComponent currState={ stateStack[top].value } />
            </div>

            <div className="buttons">
                <button className="previousButton" onClick={ previousState }> P </button>
                <button className="playPauseButton" onClick={ playPause }>{ (isPaused) ? "paused" : "playing" }</button>
                <button className="nextButton" onClick={ nextState }> N </button>
            </div>
        </div>
    )
}

export default DataStructureViewer
