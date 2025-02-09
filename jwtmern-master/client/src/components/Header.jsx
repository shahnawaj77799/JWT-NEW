// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import {Link} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// const Header=()=>{
// const navigate= useNavigate();

// const logout=()=>{
//    localStorage.clear();
//    navigate("/home");
// }

// return(
//         <>  


//         {localStorage.getItem("username") ? (
//           <>
//              <Navbar bg="primary" data-bs-theme="dark">
//       <Container>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link as={Link} to="home">Home</Nav.Link>
//          </Nav>

//          Welcome : {localStorage.getItem("username")} email : 
//          {localStorage.getItem("useremail")}  
         
//          <button onClick={logout}> Logout </button>
//       </Container>
//     </Navbar>
//           </>
//         ) :(
//         <>
        
//         <Navbar bg="primary" data-bs-theme="dark">
//       <Container>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link as={Link} to="home">Home</Nav.Link>
//             <Nav.Link as={Link} to="login">Login</Nav.Link>
//             <Nav.Link as={Link} to="registration">Registration</Nav.Link>
//          </Nav>
//       </Container>
//     </Navbar>

//         </> 
//       )}   
      

    
//         </>
//     )
// }

// export default Header;





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
              display: none;
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
