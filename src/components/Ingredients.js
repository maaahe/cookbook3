import React from "react"
import Ingredient from "./Ingredient"

export default function Ingredients ({ingredients}) {
    return (
        <div>
            {ingredients.map((ingredient) => 
                    <Ingredient 
                        name={ingredient.ingredientName}
                        amount={ingredient.amount}                 
                    />
            )}
        </div>
        
    )
}