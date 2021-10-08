import React, {useContext} from 'react'
import Recipe from "./Recipe"
import {RecipeContext} from "../App"

export default function RecipeList({
    recipes
}) {

    const {handleRecipeAdd} = useContext(RecipeContext)

    return (
        <>
            <div>
                {recipes.map(recipe => 
                    <Recipe 
                        {...recipe}
                    />
                )}
            </div>

            

            <button onClick={handleRecipeAdd}>Add recipe</button>
        </>

    )
}
