import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar({ setPage }) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="title" href="#home">
          Eat Your Eggs
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => setPage(true)}>Add Recipe</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
