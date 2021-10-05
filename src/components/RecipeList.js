import React from 'react'
import Ingredients from './Ingredients'

export default function RecipeList({
    recipes,
    handleRecipeAdd
}) {
    return (
        <>
            <div>
                {recipes.map(recipe => 
                    <>
                        <h1>{recipe.name}</h1>
                        <div>
                            <label>Cook time</label>
                            <span>{recipe.cookTime}</span>
                        </div>

                        <div>
                            <label>Instructions</label>
                            <span>{recipe.instructions}</span>
                        </div>

                        <div>
                            <label>Ingredients</label>
                            <Ingredients ingredients={recipe.ingredients}/>
                        </div>
                    </>
                )}
            </div>

            <button onClick={handleRecipeAdd}>Add recipe</button>
        </>

    )
}
