import React, { useState } from "react";
import IngredientList from "./IngredientList";
import InstructionsList from "./InstructionsList";

const RecipeCard = ({ recipeNames, ingredientsList, instructionsList }) => {
  /*   const [recipeName, setRecipeName] = useState("Name of Recipe");
  const [item, setItem] = useState({});
  const [ingredients, setIngredients] = useState([
    { ingredient: "lemon", quantity: 1, unit: "piece", id: uuid() },
    { ingredient: "honey", quantity: 1, unit: "tsp", id: uuid() },
    { ingredient: "water", quantity: 300, unit: "ml", id: uuid() },
  ]);

  const [instructions, setInstructions] = useState();
  const [instructionsList, setInstructionsList] = useState(["one", "two"]); */

  const [recipeName, setRecipeName] = useState(recipeNames);
  const [item, setItem] = useState({});
  const [ingredients, setIngredients] = useState(ingredientsList);

  const [instructions, setInstructions] = useState();
  const [instructionList, setInstructionList] = useState(instructionsList);

  const newIngredient = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const removeIngredient = (id) => {
    const newIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id
    );
    setIngredients(newIngredients);
  };

  const updateIngredient = (event) => {
    setIngredients([...ingredients, item]);
    setItem({});
    console.log(ingredients, item);
    event.preventDefault();
  };

  const newInstructions = (event) => {
    setInstructions(event.target.value);
    console.log(`new instructions ${instructions} ${typeof instructions}`);
  };

  const addInstructions = (event) => {
    setInstructionList([...instructionList, event.target.value]);
    console.log(`addinstructions ${instructionList}`);
    setInstructions([]);
    event.preventDefault();
  };

  return (
    <>
      {console.log("wh" + ingredients)}
      <div className="recipe-card">
        <h3>{recipeName}</h3>
        <div className="Ingredients">
          <h4>Ingredients List :</h4>
          <IngredientList
            ingredients={ingredients}
            handleDelete={removeIngredient}
          />
          <form onSubmit={updateIngredient}>
            <label>Ingredients: </label>
            <input type="text" name="ingredient" onChange={newIngredient} />

            <label>Quantity: </label>
            <input type="text" name="quantity" onChange={newIngredient} />

            <label>Unit</label>
            <select name="unit" onChange={newIngredient}>
              <option value="piece">piece</option>
              <option value="tsp">tsp</option>
              <option value="ml">ml</option>
            </select>
            <button type="submit">+</button>
          </form>
        </div>
        <div className="Instructions">
          <h4>Instructions :</h4>
          <InstructionsList instructions={instructionsList} />
          <form onSubmit={addInstructions}>
            <label>Add Steps :</label>
            <input
              type="text"
              name="instructions"
              onChange={newInstructions}
            ></input>
            <button type="submit">+</button>
          </form>
        </div>
      </div>
    </>
  );
};

export { RecipeCard };
