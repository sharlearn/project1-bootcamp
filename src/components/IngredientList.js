import { Converter } from "./Converter";

const IngredientList = ({ ingredients, handleDelete }) => {
  return (
    <div>
      {console.log(ingredients[0]["unit"])}
      <ol>
        {ingredients.map((ingredients) => (
          <li key={ingredients.id}>
            {ingredients.name} {ingredients.qty}
            {ingredients.unit}
            {handleDelete && (
              <button onClick={() => handleDelete(ingredients.id)}>X</button>
            )}
            <Converter qty={ingredients.qty} unit={ingredients.unit} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default IngredientList;
