import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import IngredientList from "./IngredientList";
import InstructionsList from "./InstructionsList";
import CloseButton from "react-bootstrap/CloseButton";

const RecipeList = ({ allRecipes, setRecipeList }) => {
  const [allRecipeList, setAllRecipeList] = useState([...allRecipes]);

  const deleteRecipe = (id) => {
    const newRecipeList = allRecipeList.filter((recipe) => recipe["id"] !== id);
    setRecipeList(newRecipeList);
    setAllRecipeList(newRecipeList);
    localStorage.setItem("recipes", JSON.stringify(newRecipeList));
  };

  return (
    <div>
      {console.log(allRecipes)}
      {allRecipes.map((recipe) => (
        <Card style={{ width: "85vw" }}>
          <Card.Body>
            <Card.Title>{recipe["title"]}</Card.Title>
            <CloseButton onClick={() => deleteRecipe(recipe["id"])} />
            <Card.Subtitle className="mb-2 text-muted">
              Ingredients:
            </Card.Subtitle>
            <Card.Text>
              <IngredientList
                ingredients={recipe["ingredients"]}
                handleDelete={false}
              />
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              Instructions:
            </Card.Subtitle>
            <Card.Text>
              <InstructionsList instructions={recipe["instructions"]} />
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export { RecipeList };
