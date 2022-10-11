import React from "react";
import "./App.css";
import { RecipeCard } from "./components/RecipeCard";
import { useState } from "react";

const App = () => {
  const [ingredients, setIngredients] = useState([
    { ingredient: "lemon", quantity: 1, unit: "piece", id: 1 },
    { ingredient: "honey", quantity: 1, unit: "tsp", id: 2 },
    { ingredient: "water", quantity: 300, unit: "ml", id: 3 },
  ]);

  return (
    <div className="App">
      <h1 className="App-Heading">Cook What</h1>
      <div className="content">
        <RecipeCard />
      </div>
    </div>
  );
};

export default App;
