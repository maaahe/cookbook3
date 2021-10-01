import React from "react"

export default function Ingredients ({ingredients}) {
    return (
        <div>
            {ingredients.map((ingredient) => 
                <>
                    {ingredient.ingredientName}
                    {ingredient.amount}
                </>
            )}
        </div>
        
    )
}