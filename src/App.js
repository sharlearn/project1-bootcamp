import React, { useEffect, useState } from "react";
import "./App.css";
import CreateRecipe from "./components/CreateRecipe";
import { RecipeList } from "./components/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";

const App = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [createRecipe, setCreateRecipe] = useState(false);

  const setPage = () => {
    createRecipe ? setCreateRecipe(false) : setCreateRecipe(true);
  };
  const setRecipes = (recipe) => setAllRecipes(recipe);

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("recipes"));
    if (recipes) {
      setAllRecipes(recipes);
    }
  }, []);

  const setRecipeList = (recipeList) => setAllRecipes(recipeList);

  return (
    <div className="app">
      <NavigationBar setPage={setCreateRecipe} allRecipes={allRecipes} />
      <div>
        {createRecipe && (
          <CreateRecipe
            show={createRecipe}
            setPage={setPage}
            setRecipes={setRecipes}
            allRecipes={allRecipes}
          />
        )}
      </div>
      <div className="content">
        {!createRecipe && allRecipes && (
          <RecipeList allRecipes={allRecipes} setRecipeList={setRecipeList} />
        )}
      </div>
    </div>
  );
};

export default App;
