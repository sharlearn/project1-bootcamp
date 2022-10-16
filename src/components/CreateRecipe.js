import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import IngredientList from "./IngredientList";
import InstructionsList from "./InstructionsList";

const CreateRecipe = ({ setPage, setRecipes, allRecipes }) => {
  const [name, setName] = useState("");
  const [recipeName, setRecipeName] = useState("");

  const [ingredient, setIngredient] = useState({
    name: "",
    qty: 0,
    unit: "piece(s)",
  });
  const [ingredientsList, setIngredientsList] = useState([]);

  const [instruction, setInstruction] = useState("");
  const [instructionsList, setInstructionsList] = useState([]);

  const handleRecipeNameChange = (event) => {
    setName(event.target.value);
  };
  const handleRecipeNameSubmit = (event) => {
    event.preventDefault();
    setRecipeName(name);
    setName("");
  };

  const ingredientChange = (event) => {
    setIngredient({
      ...ingredient,
      [event.target.name]: event.target.value,
      id: uuid(),
    });
  };

  const ingredientsListUpdate = (event) => {
    setIngredientsList([...ingredientsList, ingredient]);
    setIngredient({ name: "", qty: 0, unit: "" });
    event.preventDefault();
  };

  const removeIngredient = (id) => {
    const newIngredients = ingredientsList.filter(
      (ingredient) => ingredient.id !== id
    );
    setIngredientsList(newIngredients);
  };

  const instructionChange = (event) => {
    setInstruction(event.target.value);
  };

  const instructionsListUpdate = (event) => {
    event.preventDefault();
    setInstructionsList([...instructionsList, instruction]);
    setInstruction("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title: recipeName,
      ingredients: ingredientsList,
      instructions: instructionsList,
      id: uuid(),
    };
    const allCurrRecipes = [...allRecipes, newRecipe];
    console.log(allCurrRecipes);
    localStorage.setItem("recipes", JSON.stringify(allCurrRecipes));
    setRecipes(allCurrRecipes);
    setPage(false);
  };

  return (
    <div className="create-recipe">
      {console.log(allRecipes)}
      <h3>Create New Recipe</h3>
      <div>
        <h4>Recipe Name: {recipeName}</h4>
        <form onSubmit={handleRecipeNameSubmit}>
          <input type="text" value={name} onChange={handleRecipeNameChange} />
          <input type="submit" value="enter" />
        </form>
      </div>
      <div>
        <h4>Ingredients:</h4>
        <IngredientList
          ingredients={ingredientsList}
          handleDelete={removeIngredient}
        />
        <form onSubmit={ingredientsListUpdate}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={ingredient.name}
            onChange={ingredientChange}
          />

          <label>Quantity:</label>
          <input
            type="text"
            name="qty"
            value={ingredient.qty}
            onChange={ingredientChange}
          />

          <label>Unit:</label>
          <select name={ingredient.unit} onChange={ingredientChange}>
            <option value="piece(s)">Piece(s)</option>
            <option value="ml">Mililtres</option>
            <option value="l">Litres</option>
            <option value="kg">Kilograms</option>
            <option value="g">Grams</option>
          </select>
          <button type="submit">+</button>
        </form>
      </div>
      <div>
        <h4>Instructions:</h4>
        <InstructionsList instructions={instructionsList} />
        <form onSubmit={instructionsListUpdate} value={instruction}>
          <input
            value={instruction}
            className="insert-instructions"
            onChange={instructionChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <button onClick={handleSubmit}>Save Recipe</button>
    </div>
  );
};

export default CreateRecipe;
