import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import { useCollection } from "../../hooks/useCollection";

const NavBar = () => {
  const { data } = useCollection("products")
  const objetosUnicos = [];
  const idsVistos = {};

  for (const objeto of data) {
    if (!idsVistos[objeto.category]) {
      // Si este id no se ha visto antes, añadirlo a la lista de objetos únicos
      objetosUnicos.push(objeto.category);
      // Marcar este id como visto
      idsVistos[objeto.category] = true;
    }
  }


  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Tienda Inti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {objetosUnicos.map((categoria, index) => (
                <NavDropdown.Item key={index} as={Link} to={`/category/${categoria}`}>
                  {categoria}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
