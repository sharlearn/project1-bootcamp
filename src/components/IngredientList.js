const IngredientList = ({ ingredients, handleDelete }) => {
  return (
    <div>
      {ingredients.map((ingredients) => (
        <ul>
          <li key={ingredients.id}>
            {ingredients.ingredient} {ingredients.quantity}
            {ingredients.unit}
            <button onClick={() => handleDelete(ingredients.id)}>X</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default IngredientList;
