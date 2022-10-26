import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import IngredientList from "./IngredientList";
import InstructionsList from "./InstructionsList";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CreateRecipe = ({ setPage, setRecipes, allRecipes, show }) => {
  // I think the naming here name <-> recipeName is a bit confusing and not clear what name is for as opposed to recipeName
  const [name, setName] = useState("");
  const [recipeName, setRecipeName] = useState("");

  const [ingredient, setIngredient] = useState({
    name: "",
    qty: 0,
    unit: "",
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
    // Does this work as expected? I would almost assume that this might lead to bugs if we don't position event.preventDefault right at the top
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
    localStorage.setItem("recipes", JSON.stringify(allCurrRecipes));

    setRecipes(allCurrRecipes);
    // setPage does not have any parameters
    setPage(false);
  };

  return (
    <Modal
      className="modal-create"
      show={show}
      onHide={setPage}
      size="lg"
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title>Create New Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleRecipeNameSubmit}>
          <Form.Label>Recipe Name</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="recipe name"
              value={name}
              onChange={handleRecipeNameChange}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              type="submit"
            >
              Enter
            </Button>
          </InputGroup>
        </Form>

        <Form onSubmit={ingredientsListUpdate}>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                className="input-ingredient"
                value={ingredient.name}
                onChange={ingredientChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Quantity</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  name="qty"
                  value={ingredient.qty}
                  onChange={ingredientChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Unit</Form.Label>
              <Form.Select
                variant="outline-secondary"
                name="unit"
                value={ingredient.unit}
                onChange={ingredientChange}
              >
                {/* I think we could create a function that renders all these:

                  const options = {
                    "tsp": teaspoon,
                    "tbs": tablespoon,
                    ...
                  }
                
                  const getOptions = () => {
                    return Object.entries(options).map((option) => <option value={option[0]>{option[1]}</option> })
                  }

                  Something along these lines. That way our list is easily extendable and we can be a bit more dynamic in our approach with dropdowns. Since the content and values here are static values, we can keep these values stored in an object and then retrieve them via a function. We could store them also in other datatypes, but the concept here is that static information, could possibly be stored by itself and then be used across our app in different ways. For example you want to have headings with all these measurements, then you can access the object again!
                
                */}
                <option value=""> </option>
                <option value="tsp">teaspoon</option>
                <option value="tbs">tablespoon</option>
                <option value="cup(s)">cup</option>
                <option value="fl">fluid ounce</option>
                <option value="ml">mililitres</option>
                <option value="l">litres</option>
                <option value="kg">kilograms</option>
                <option value="g">grams</option>
                <option value="oz">ounce</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Button variant="outline-secondary" size="sm" type="submit">
            +
          </Button>
        </Form>

        <Form onSubmit={instructionsListUpdate} value={instruction}>
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            onChange={instructionChange}
            value={instruction}
            required
          ></Form.Control>
          <Button variant="outline-secondary" size="sm" type="submit">
            +
          </Button>
        </Form>
        <Button
          className="save-recipe"
          variant="outline-secondary"
          onClick={handleSubmit}
        >
          Save Recipe
        </Button>

        <div className="recipe-preview">
          <h4>Recipe Preview</h4>
          <div>
            <h5>{recipeName}</h5>
          </div>
          <h5>Ingredients:</h5>
          <IngredientList
            ingredients={ingredientsList}
            handleDelete={removeIngredient}
            hideConverter="true"
          />
          <h5>Instructions:</h5>
          <InstructionsList instructions={instructionsList} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateRecipe;
