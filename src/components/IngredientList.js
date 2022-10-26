import { Converter } from "./Converter";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const IngredientList = ({ ingredients, handleDelete, hideConverter }) => {
  return (
    <Table responsive="sm" className="ingredient-list">
      <tbody>
        {ingredients.map((ingredients) => (
          // I think we can remove the fragment <> as we have the tr as parent element
          <>
            <tr>
              <td size="sm" className="ingredient-qty">
                {ingredients.qty}
              </td>
              <td size="sm" className="ingredient-unit">
                {ingredients.unit}
              </td>
              <td size="sm" className="ingredient-name">
                {ingredients.name}
              </td>

              {handleDelete && (
                <td>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => handleDelete(ingredients.id)}
                  >
                    X
                  </Button>
                </td>
              )}
              {/* I would rather reverse the logic here and say showConverter, logically easier to read than negating a negative */}
              {!hideConverter && (
                <td>
                  <Converter qty={ingredients.qty} unit={ingredients.unit} />
                </td>
              )}
            </tr>
          </>
        ))}
      </tbody>
    </Table>
  );
};

export default IngredientList;
