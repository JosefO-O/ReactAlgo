import { type ComponentType } from "react";
import { useState } from "react";

// TODO tipar DsComponent e state
// por enquanto vamos dizer que o state é um tem um arr na pos 0 e indices na posicao 1

function DataStructureViewer({ DsComponent, algorithm, dsValue }: { DsComponent: ComponentType<any>, algorithm: (algoDs: any) => Generator<any>, dsValue: any }) {
    const [gen, _] = useState(algorithm(dsValue))
    const [stateStack, setStateStack] = useState([gen.next()])
    const [top, setTop] = useState(0)

    function nextState() {
        if (top == stateStack.length-1)
            setStateStack([...stateStack, gen.next()])

        setTop(top+1)
    }

    function previousState() {
        if (top > 0)
            setTop(top-1)
    }

    return (
        <div className="dsViewer">
            <div className="ds">
                <DsComponent currState={ stateStack[top] } />
            </div>

            <div className="buttons">
                <button className="previousButton" onClick={ previousState }> P </button>
                <button className="playButton"></button>
                <button className="nextButton" onClick={ nextState }> N </button>
            </div>
        </div>
    )
}

export default DataStructureViewer
