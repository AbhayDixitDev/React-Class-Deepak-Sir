
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./navbar.css"
const Navbar1 = () => {

  return (

    <Navbar expand="lg" variant="dark" bg="black" style={{ alignItems: "center" }}>
      <Container fluid>
        <Navbar.Brand ><Link className="navlink" to="/">Camping</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/shop">Shop</Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" >
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="navlink" to="/foxkit">Foxkit</Link>


          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Link className="navlink" to="/login">Account</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navbar1;