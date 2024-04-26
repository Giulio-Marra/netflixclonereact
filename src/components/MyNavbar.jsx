import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";

const NetflixNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid className="align-items-center">
        <Navbar.Brand href="">
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="netflix-navbar-nav" />
        <Navbar.Collapse id="netflix-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">TV Shows</Nav.Link>
            <Nav.Link href="">Movies</Nav.Link>
            <Nav.Link href="">Recently Added</Nav.Link>
            <Nav.Link href="">My List</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 bg-dark text-white"
              aria-label="Search"
            />
            <Button className="btnSearch">
              <i class="bi bi-search"></i>
            </Button>
          </Form>
          <Nav className="align-items-center-lg">
            <Nav.Link href="">Kids</Nav.Link>
            <Nav.Link href="">
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>
            <NavDropdown
              title={
                <img
                  src={avatar}
                  alt="Profile"
                  style={{ width: 30, height: 30 }}
                />
              }
              id="nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="">Profile</NavDropdown.Item>
              <NavDropdown.Item href="">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NetflixNavbar;
