const IngredientList = ({ ingredients, handleDelete }) => {
  return (
    <div>
      <ol>
        {ingredients.map((ingredients) => (
          <li key={ingredients.id}>
            {ingredients.ingredient} {ingredients.quantity}
            {ingredients.unit}
            <button onClick={() => handleDelete(ingredients.id)}>X</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default IngredientList;
