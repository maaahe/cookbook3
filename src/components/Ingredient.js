import React from 'react'

export default function Ingredient({name, amount}) {
    return (
        <div class="ingredientList">
            <span>{name}</span>
            <span>{amount}</span>
        </div>
    )
}
