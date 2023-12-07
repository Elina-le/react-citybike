import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {

  const containerStyle = {
    maxWidth: 1440,
    padding: '0 8%',
    margin: 'auto'
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" >
      <Container style={containerStyle}>
        <Navbar.Brand href="/">City Bike App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/stations">Stations</Nav.Link>
            <Nav.Link href="/journeys">Journeys</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;