import React from 'react'     //rfce

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick = {clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
