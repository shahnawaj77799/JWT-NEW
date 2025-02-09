// const DashBoard=()=>{
//     return(
//         <>
//           <h1> Dashboard</h1>
//         </>
//     )
// }

// export default DashBoard;







import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const DashBoard = () => {
  return (
    <>
      <style>
        {`
          /* Custom CSS for the Dashboard */
          .dashboard-header {
            text-align: center;
            margin-top: 20px;
            font-size: 2rem;
            font-weight: bold;
            color: #007bff;
          }

          .card-title {
            font-size: 1.2rem;
            font-weight: bold;
            color: #333;
          }

          .card-text {
            font-size: 1rem;
            color: #555;
          }

          .card-container {
            margin-top: 20px;
          }

          .card {
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }

          .btn-dashboard {
            background-color: #007bff;
            color: white;
            border-radius: 5px;
            padding: 10px 20px;
            text-decoration: none;
          }

          .btn-dashboard:hover {
            background-color: #0056b3;
            color: white;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .dashboard-header {
              font-size: 1.8rem;
            }

            .card-title {
              font-size: 1.1rem;
            }

            .card-text {
              font-size: 0.9rem;
            }
          }

          @media (max-width: 576px) {
            .dashboard-header {
              font-size: 1.5rem;
            }
          }
        `}
      </style>

      <Container>
        <h1 className="dashboard-header">Dashboard</h1>

        {/* Cards for dashboard content */}
        <Row className="card-container">
          <Col md={4} sm={12} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="card-title">Welcome, User!</Card.Title>
                <Card.Text className="card-text">
                  This is your personal dashboard where you can monitor your activities and progress.
                </Card.Text>
                <Button className="btn-dashboard">View Profile</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={12} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="card-title">Statistics</Card.Title>
                <Card.Text className="card-text">
                  Track your performance with various metrics and insights.
                </Card.Text>
                <Button className="btn-dashboard">View Stats</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={12} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="card-title">Notifications</Card.Title>
                <Card.Text className="card-text">
                  Stay updated with the latest notifications about your account.
                </Card.Text>
                <Button className="btn-dashboard">Check Notifications</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashBoard;
