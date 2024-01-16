import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavigationBar() {

  const containerStyle = {
    maxWidth: 1440,
    padding: '0 8%',
    margin: 'auto'
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" >
      <Container style={containerStyle}>
        <Navbar.Brand as={Link} to="/">City Bike App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/stations">Stations</Nav.Link>
            <Nav.Link as={Link} to="/journeys">Journeys</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;