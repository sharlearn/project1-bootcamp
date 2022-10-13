import { RecipeCard } from "./RecipeCard";

const RecipeList = ({ allRecipes }) => {
  return (
    <div>
      {console.log("JE" + allRecipes[0]["ingredients"])}
      {console.log("DD" + allRecipes[0]["title"])}
      {console.log("aa" + allRecipes[0]["instructions"])}
      {allRecipes.map((recipe) => (
        <RecipeCard
          recipeNames={recipe["title"]}
          ingredientsList={recipe["ingredients"]}
          instructionsList={recipe["instructions"]}
        />
      ))}
    </div>
  );
};

export { RecipeList };
