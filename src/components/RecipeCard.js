import React from "react";
import IngredientList from "./IngredientList";
import InstructionsList from "./InstructionsList";

const RecipeCard = ({ recipeName, ingredientsList, instructionsList }) => {
  const ingredients = ingredientsList;
  return (
    <>
      <div className="recipe-card">
        <h3>{recipeName}</h3>
        <div className="Ingredients">
          <h4>Ingredients:</h4>
          <IngredientList ingredients={ingredients} handleDelete={false} />
        </div>
        <div className="Instructions">
          <h4>Instructions :</h4>
          <InstructionsList instructions={instructionsList} />
        </div>
      </div>
    </>
  );
};

export { RecipeCard };
