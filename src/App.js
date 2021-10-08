import React, {useState} from "react"
import RecipeEdit from "./components/RecipeEdit";
import RecipeList from "./components/RecipeList";
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext();

function App() {

  const [recipes, setRecipes] = useState(sampleRecipes)

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New Recipe",
      cookTime: "",
      instructions: "",
      ingredients: [{
        id: uuidv4(),
        ingredientName: "",
        amount: 0
      },{
        id: uuidv4(),
        ingredientName: "",
        amount: "1 Tbs"
      }],
    }

    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete (id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
    return null
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList
        recipes={recipes}
      />
      <RecipeEdit />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: uuidv4(),
    name: "Marinated strawberries",
    cookTime: "1:45",
    instructions: "1. Pick strawberry 2. Marinate strawberry 3. Eat strawberry",
    ingredients: [{
      ingredientName: "strawberry",
      amount: 3
    }, {
      ingredientName: "jam",
      amount: "2 scoops"
    }]
  },
  {
    id: uuidv4(),
    name: "Roasted chocolate",
    cookTime: "0:45",
    instructions: "1. Roast chocolate 2. Eat strawberry",
    ingredients: 
    [
      {
      ingredientName: "cacao beans",
      amount: "1 kilo"
      }, {
      ingredientName: "chia seeds",
      amount: "3 scoops"
      }
    ]
  }
]

export default App