import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';

function MyNav({ handleSearch }) {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
      <Navbar expand="lg" className={theme ==="light"? "border border-bottom-1" : "bg-dark border border-bottom-1"}>
        <Container fluid>
          <Navbar.Brand href="#home">EPICBOOKS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Aboutk</Nav.Link>
              <Nav.Link href="#link">Browse</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search your book"
                className="me-2"
                aria-label="Search"
                onChange={handleSearch}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNav;