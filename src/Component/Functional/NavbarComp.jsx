import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { CartContext } from "../../CartContext";

export default function NavbarComp() {
  const { value, setValue } = useContext(CartContext);

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/mahasiswa" className="nav-link">
              Mahasiswa
            </Link>
            <Link to="/class" className="nav-link">
              Class
            </Link>
            <Link to="/hooks" className="nav-link">
              Hooks
            </Link>
            <Link to="/useeffects" className="nav-link">
              Use Effects
            </Link>
            <Link to="/product" className="nav-link">
              Product
            </Link>
            <Link to="/reducer" className="nav-link">
              Reducer
            </Link>
          </Nav>
          <Navbar.Text>
            <Button variant="danger">
              <i className="fas fa-shopping-cart"></i>
              <Badge bg="light" text="dark" className="ms-2">
                {value}
              </Badge>
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
