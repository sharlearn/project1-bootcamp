import React, { useState } from "react";
import { Card } from "react-bootstrap";
import IngredientList from "./IngredientList";
import InstructionsList from "./InstructionsList";
import CloseButton from "react-bootstrap/CloseButton";

const RecipeList = ({ allRecipes, setRecipeList }) => {
  // I think duplicating the state of allRecipeList here seems a bit dangerous. Could lead to out-of-sync data across your app.
  // Overall we would want to avoid data duplication in a child component like this, unless really necessary
  const [allRecipeList, setAllRecipeList] = useState([...allRecipes]);

  const deleteRecipe = (id) => {
    const newRecipeList = allRecipeList.filter((recipe) => recipe["id"] !== id);
    // if we don't duplicate our data, no need to update state twice here
    setRecipeList(newRecipeList);
    setAllRecipeList(newRecipeList);
    localStorage.setItem("recipes", JSON.stringify(newRecipeList));
  };

  return (
    <div>
      {allRecipes.map((recipe) => (
        <Card>
          <Card.Body className="recipe-card">
            <CloseButton
              className="delete-recipe"
              onClick={() => deleteRecipe(recipe["id"])}
            />
            <Card.Title name={recipe["id"]}>{recipe["title"]}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              Ingredients:
            </Card.Subtitle>
            <Card.Text>
              <IngredientList
                ingredients={recipe["ingredients"]}
                // this handleDelete prop seems odd to me. I saw you either pass false or a function here. I think you can just leave it undefined here!
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
