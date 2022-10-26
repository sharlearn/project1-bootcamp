import React, { useEffect, useState } from "react";
import "./App.css";
import CreateRecipe from "./components/CreateRecipe";
import { RecipeList } from "./components/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";

const App = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [createRecipe, setCreateRecipe] = useState(false);

  // On Navbar, I saw you use this function like setPage(true)
  // In that case you might want to define this function like so:
  /*

  const setPage = (bool) => setCreateRecipe(bool)

  */
  const setPage = () => {
    // setCreateRecipe(createRecipe ? false : true)
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
      {/* I think can include the div also in the conditional render, otherwise you end up with an empty div if !createRecipe */}
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
      {/* Same here, can conditionally render the div as well */}
      <div className="content">
        {!createRecipe && allRecipes && (
          <RecipeList allRecipes={allRecipes} setRecipeList={setRecipeList} />
        )}
      </div>
    </div>
  );
};

export default App;
