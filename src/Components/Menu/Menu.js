import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="secondary" expand="lg" className="mb-5 nav-menu ">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/e-shop" exact className="btn btn-link text-white">
              Catalog
            </NavLink>
            <NavLink to="e-shop/buscet" className="btn btn-link text-white">
              Buscet
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Menu;
