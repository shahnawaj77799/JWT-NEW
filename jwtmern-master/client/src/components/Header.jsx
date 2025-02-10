









import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/home');
  };

  return (
    <>
      <style>
        {`
          /* Custom CSS for the Header */
          .navbar {
            padding: 10px 20px;
          }

          .navbar-brand {
            font-weight: bold;
            font-size: 1.5rem;
          }

          .navbar-nav .nav-link {
            font-size: 1.1rem;
            padding-right: 1rem;
          }

          .navbar-toggler {
            border-color: #fff;
          }

          .navbar-collapse {
            justify-content: flex-end;
          }

          .user-info {
            display: flex;
            align-items: center;
            color: white;
            margin-right: 15px;
          }

          .user-info span {
            margin-right: 10px;
            white-space: nowrap;
          }

          .user-info button {
            padding: 5px 15px;
            font-size: 1rem;
          }

          .navbar .nav-link {
            color: #fff;
          }

          .navbar .nav-link:hover {
            color: #ddd;
          }

          /* Responsive Navbar Adjustments */
          @media (max-width: 992px) {
            .navbar-nav {
              text-align: center;
            }
            .navbar-brand {
              font-size: 1.3rem;
            }
            .user-info {
              display: flex;
              flex-direction: column; /* Stack elements vertically on small screens */
              align-items: flex-start;
              text-align: left;
              margin-left: 0;  /* Reset margin */
            }
            .user-info button {
              margin-top: 5px;  /* Space out button from text */
            }
          }

          @media (max-width: 576px) {
            .navbar-brand {
              font-size: 1.1rem;
            }
          }
        `}
      </style>

      {localStorage.getItem('username') ? (
        // If the user is logged in
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">MyCompany</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
              </Nav>
              <div className="user-info">
                <span>
                  Welcome: {localStorage.getItem('username')} <br />
                  Email: {localStorage.getItem('useremail')}
                </span>
                <Button variant="outline-light" onClick={logout}>Logout</Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        // If the user is not logged in
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">MyCompany</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Header;


