import React from 'react'

export default function Instruction({
    step,
    instruction
}) {
    return (
        <ol>
            <li className="instructionsList">
                <span>{step}</span>
                <span>{instruction}</span>
            </li>
        </ol>
    )
}
