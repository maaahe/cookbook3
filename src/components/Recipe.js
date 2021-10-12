import React, {useContext} from 'react'
import IngredientList from './IngredientList'
import Instruction from './Instruction'
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
        <div className="recipe">
            <div className="recipe-header">
                <h1>{name}</h1>
                
                <div>
                    <button class="btn">
                        Edit
                    </button>
                            
                    <button
                        class="btn btn--danger"
                        onClick={() => handleRecipeDelete(id)}
                    >
                        Delete
                    </button>
                </div>
                
            </div>


            <div class="recipe-point">
                <label>Cook time</label>
                <span>{cookTime}</span>
            </div>

            <div class="recipe-point">
                <label>Instructions</label>
                <span>{
                    instructions.map((instruction) => 
                        <Instruction 
                            step={instruction.step}
                            instruction={instruction.instruction}
                        />
                    )
                
                }</span>
            </div>

            <div class="recipe-point">
                <label>Ingredients</label>
                <IngredientList ingredients={ingredients}/>
            </div>

            
            
        </div>
    )
}
