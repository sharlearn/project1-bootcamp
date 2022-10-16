import { RecipeCard } from "./RecipeCard";

const RecipeList = ({ allRecipes }) => {
  return (
    <div>
      {allRecipes.map((recipe) => (
        <RecipeCard
          recipeName={recipe["title"]}
          ingredientsList={recipe["ingredients"]}
          instructionsList={recipe["instructions"]}
        />
      ))}
    </div>
  );
};

export { RecipeList };
