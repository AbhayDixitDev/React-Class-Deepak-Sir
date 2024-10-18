import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand link="/" style={{cursor:"pointer"}}>Crud Using React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/add">Add</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
              <Nav.Link href="/delete">Delete</Nav.Link>
              <Nav.Link href="/update">Update</Nav.Link>
            </Nav>
          </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar1;
