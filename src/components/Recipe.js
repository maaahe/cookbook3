import React, {useContext} from 'react'
import Ingredients from './Ingredients'
import {RecipeContext} from "../App"

export default function Recipe(
    {
        id,
        name,
        cookTime,
        instructions,
        ingredients,
    }
) {

    const {handleRecipeDelete} = useContext(RecipeContext)

    return (
        <div>
            <div>
                <button>
                    Edit
                </button>
                        
                <button
                    onClick={() => handleRecipeDelete(id)}
                >
                    Delete
                </button>
            </div>
            
            <h1>{name}</h1>

            <div>
                <label>Cook time</label>
                <span>{cookTime}</span>
            </div>

            <div>
                <label>Instructions</label>
                <span>{instructions}</span>
            </div>

            <div>
                <label>Ingredients</label>
                <Ingredients ingredients={ingredients}/>
            </div>
        </div>
    )
}
