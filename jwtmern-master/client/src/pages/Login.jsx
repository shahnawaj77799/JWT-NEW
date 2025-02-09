// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const Login=()=>{
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");  
// const navigate=useNavigate();
//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//    try {
//     let api="https://jwtmern-uaak.onrender.com/user/login";

//      const response= await axios.post(api, {email:email, password:password});
//      console.log(response.data)
//      localStorage.setItem("token", response.data.token);
//      navigate("/home")
//    } catch (error) {
//       console.log(error);
//    }
//   }

//   return(
//         <>
//         <div style={{width:"400px", margin:"auto"}}>
//             <h2> User Login</h2>
//         <Form style={{width:"400px"}}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//     </div>
//         </>
//     )
// }

// export default Login;







import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = "https://jwt-new-1.onrender.com/user/login";
      const response = await axios.post(api, { email: email, password: password });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <style>
        {`
          .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f8f9fa;
          }

          .login-box {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            text-align: center;
          }

          .login-box h2 {
            font-size: 2rem;
            color: #007bff;
            margin-bottom: 20px;
          }

          .login-box .form-control {
            border-radius: 5px;
            margin-bottom: 15px;
          }

          .login-box button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .login-box button:hover {
            background-color: #0056b3;
          }

          .login-box .form-text {
            font-size: 0.9rem;
            color: #888;
            margin-top: 10px;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .login-box h2 {
              font-size: 1.8rem;
            }

            .login-box button {
              font-size: 1rem;
            }
          }

          @media (max-width: 576px) {
            .login-box h2 {
              font-size: 1.5rem;
            }

            .login-box {
              padding: 20px;
            }
          }
        `}
      </style>

      <div className="login-container">
        <div className="login-box">
          <h2>User Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); }}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); }}
                placeholder="Enter your password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <div className="form-text">
            <small>Don't have an account? <a href="/registration">Sign up here</a></small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
