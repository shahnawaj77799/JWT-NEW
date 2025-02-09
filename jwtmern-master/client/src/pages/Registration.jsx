// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from "axios";
// import {message} from "antd";
// import {useNavigate} from "react-router-dom";
// const Registration=()=>{
//     const [input, setInput] =useState({});    
//     const navigate= useNavigate();
//     const handleInput=(e)=>{
//        let name=e.target.name;
//        let value=e.target.value;
//        setInput(values=>({...values, [name]:value}));
//        console.log(input);
//     }
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         try {
//              let api="https://jwtmern-uaak.onrender.com/user/registration";
//              const response =await  axios.post(api, input);
//              console.log(response);
//              message.success(response.data.msg);
//              navigate("/login");
//         } catch (error) {
//              console.log(error);
//         }
//     }
//     return(
//         <>
//         <div style={{width:"400px", margin:"auto"}}>
//             <h2> User Registration</h2>
//         <Form style={{width:"400px"}}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Name</Form.Label>
//         <Form.Control type="text" name="name" onChange={handleInput} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Contact no</Form.Label>
//         <Form.Control type="text" name="contact" onChange={handleInput} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Email</Form.Label>
//         <Form.Control type="email" name="email" onChange={handleInput} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password"  name="password" onChange={handleInput} />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//     </div>
//         </>
//     )
// }

// export default Registration;





import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  // Handle form input changes
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = "http://localhost:8000/user/registration";
      const response = await axios.post(api, input);
      message.success(response.data.msg);
      navigate("/login");
    } catch (error) {
      console.log(error);
      message.error("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <style>
        {`
          .registration-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f8f9fa;
          }

          .registration-box {
            background-color: #fff;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            text-align: center;
          }

          .registration-box h2 {
            font-size: 2rem;
            color: #007bff;
            margin-bottom: 20px;
          }

          .registration-box .form-control {
            border-radius: 5px;
            margin-bottom: 15px;
          }

          .registration-box button {
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .registration-box button:hover {
            background-color: #0056b3;
          }

          .registration-box .form-text {
            font-size: 0.9rem;
            color: #888;
            margin-top: 10px;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .registration-box h2 {
              font-size: 1.8rem;
            }

            .registration-box button {
              font-size: 1rem;
            }
          }

          @media (max-width: 576px) {
            .registration-box h2 {
              font-size: 1.5rem;
            }

            .registration-box {
              padding: 20px;
            }
          }
        `}
      </style>

      <div className="registration-container">
        <div className="registration-box">
          <h2>User Registration</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleInput}
                placeholder="Enter your full name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContact">
              <Form.Label>Enter Contact No</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                onChange={handleInput}
                placeholder="Enter your contact number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleInput}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleInput}
                placeholder="Enter your password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <div className="form-text">
            <small>
              Already have an account? <a href="/login">Login here</a>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
