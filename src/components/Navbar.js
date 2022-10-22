import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function NavigationBar({ setPage, allRecipes }) {
  return (
    <Navbar>
      <Navbar.Brand className="title">Eat Your Eggs</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={() => setPage(true)}>Add Recipe</Nav.Link>
        <NavDropdown title="Recipes" id="navbarScrollingDropdown">
          {allRecipes.map((recipe) => (
            <NavDropdown.Item>
              <Link
                activeClass="active"
                to={recipe["id"]}
                spy={true}
                smooth={true}
                duration={500}
              >
                {recipe["title"]}
              </Link>
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
