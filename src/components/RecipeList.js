import React from 'react'
import Ingredients from './Ingredients'

export default function RecipeList({
    recipes,
    handleRecipeAdd,
    handleRecipeDelete,
    showUuid
}) {
    return (
        <>
            <div>
                {recipes.map(recipe => 
                    <>
                        <div>
                            <button>
                                Edit
                            </button>
                            
                            <button
                                onClick={() => handleRecipeDelete(recipe)}
                            >
                                Delete
                            </button>
                        </div>
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
