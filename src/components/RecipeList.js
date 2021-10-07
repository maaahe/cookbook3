import React from 'react'
import Recipe from "./Recipe"


export default function RecipeList({
    recipes,
    handleRecipeAdd,
    handleRecipeDelete,
}) {
    return (
        <>
            <div>
                {recipes.map(recipe => 
                    <Recipe 
                        recipe={recipe}
                        {...recipe}
                        handleRecipeDelete={handleRecipeDelete}
                    />
                )}
            </div>

            

            <button onClick={handleRecipeAdd}>Add recipe</button>
        </>

    )
}
