




import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  // User authentication check
  const userAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      let api = "https://jwt-new-1.onrender.com/user/userauth";
      const tokenRes = await axios.post(api, null, { headers: { "auth-token": token } });
      localStorage.setItem("username", tokenRes.data.name);
      localStorage.setItem("useremail", tokenRes.data.email);
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    userAuth();
  }, []);

  return (
    <>
      <style>
        {`
          /* CSS for Home Page */
          .home-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f7f7f7;
            font-family: 'Arial', sans-serif;
          }

          .welcome-card {
            background-color: #fff;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 600px;
            width: 100%;
            margin: 20px;
          }

          .welcome-card h1 {
            color: #007bff;
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .welcome-card p {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 30px;
          }

          .welcome-card button {
            padding: 12px 30px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .welcome-card button:hover {
            background-color: #0056b3;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .welcome-card h1 {
              font-size: 2rem;
            }

            .welcome-card p {
              font-size: 1rem;
            }

            .welcome-card {
              padding: 20px;
            }
          }

          @media (max-width: 576px) {
            .welcome-card h1 {
              font-size: 1.8rem;
            }

            .welcome-card p {
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <div className="home-container">
        <div className="welcome-card">
          <h1>Welcome to the Home Page</h1>
          <p>
            This is a secure JWT-based login system. If you're authenticated, 
            you'll be redirected to your dashboard.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
