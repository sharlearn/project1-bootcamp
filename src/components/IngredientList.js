import { Converter } from "./Converter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const IngredientList = ({ ingredients, handleDelete, hideConverter }) => {
  return (
    <Container>
      {ingredients.map((ingredients) => (
        <>
          <Row>
            <Col>{ingredients.name}</Col>
            <Col>{ingredients.qty}</Col>
            <Col>{ingredients.unit}</Col>
            <Col>
              {handleDelete && (
                <button onClick={() => handleDelete(ingredients.id)}>X</button>
              )}
            </Col>
            <Col>
              {!hideConverter && (
                <Converter qty={ingredients.qty} unit={ingredients.unit} />
              )}
            </Col>
          </Row>
        </>
      ))}
    </Container>
  );
};

export default IngredientList;
