import React, { useEffect } from "react";
import "./App.css";
import { RecipeCard } from "./components/RecipeCard";
import { useState } from "react";
import { RecipeList } from "./components/RecipeList";

const App = () => {
  const [allRecipes, setAllRecipes] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllRecipes(data);
        console.log(allRecipes);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="App-Heading">Cook What</h1>
      <div className="content">
        {allRecipes && <RecipeList allRecipes={allRecipes} />}
      </div>
    </div>
  );
};

export default App;
