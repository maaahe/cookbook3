import RecipeEdit from "./components/RecipeEdit";
import RecipeList from "./components/RecipeList";

export default function App() {
  return (
    <>
      <RecipeList recipes={sampleRecipes}/>
      <RecipeEdit />
    </>
  );
}

const sampleRecipes = [
  {
    id: 1,
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
    id: 2,
    name: "Roasted chocolate",
    cookTime: "0:45",
    instructions: "1. Roast chocolate 2. Eat strawberry",
    ingredients: [{
      ingredientName: "cacao beans",
      amount: "1 kilo"
    }, {
      ingredientName: "chia seeds",
      amount: "3 scoops"
    }]
  }]