import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import IngredientList from "./IngredientList";

const RecipeCard = () => {
  const [recipeName, setRecipeName] = useState("To add input");
  const [ingredients, setIngredients] = useState([
    { ingredient: "lemon", quantity: 1, unit: "piece", id: 1 },
    { ingredient: "honey", quantity: 1, unit: "tsp", id: 2 },
    { ingredient: "water", quantity: 300, unit: "ml", id: 3 },
  ]);

  /*   const addIngredient = (ingredient, quantity, unit) => {
    setIngredients([
      ...ingredients,
      { ingredient: ingredient, quantity: quantity, unit: unit, id: uuid() },
    ]);
  }; */

  const removeIngredient = (id) => {
    const newIngredients = setIngredients(
      ingredients.filter((ingredient) => ingredient.id !== id)
    );
  };

  const updateIngredient = (e) => {
    setIngredients([...ingredients, { [e.target.name]: e.target.value }]);
  };

  return (
    <div>
      <h3>{recipeName}</h3>
      <h4>Ingredients List :</h4>
      <IngredientList
        ingredients={ingredients}
        handleDelete={removeIngredient}
      />
      <form>
        <label>Ingredients: </label>
        <input type="text" name="ingredient" onChange={updateIngredient} />

        <label>Quantity: </label>
        <input type="text" name="quantity" onChange={updateIngredient} />

        <label>Unit</label>
        <select name="unit" onChange={updateIngredient}>
          <option value="piece">piece</option>
          <option value="tsp">tsp</option>
          <option value="ml">ml</option>
        </select>
        <button>+</button>
      </form>
    </div>
  );
};

export { RecipeCard };
