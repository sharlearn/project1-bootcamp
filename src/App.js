import React, { useEffect, useState } from "react";
import "./App.css";
import CreateRecipe from "./components/CreateRecipe";
import { RecipeList } from "./components/RecipeList";

const App = () => {
  const [allRecipes, setAllRecipes] = useState("");
  const [createRecipe, setCreateRecipe] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllRecipes(data);
      });
  }, []);

  return (
    <div className="app">
      <h1 className="app-heading">Eat Your Eggs</h1>
      {!createRecipe && (
        <button onClick={() => setCreateRecipe(true)}>Add Recipe</button>
      )}
      <div>{createRecipe && <CreateRecipe />}</div>
      <div className="content">
        {!createRecipe && allRecipes && <RecipeList allRecipes={allRecipes} />}
      </div>
    </div>
  );
};

export default App;
