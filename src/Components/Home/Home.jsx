import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; // External CSS file

const Home = () => {
  return (
    <>
       <Container className="home-container">
      {/* Welcome Section */}
      <Row className="welcome-section text-center">
        <Col>
          <h1 className="main-title">Welcome to Delicious Recipes</h1>
          <p className="subtitle">Discover and share everyday cooking inspiration!</p>
          <Button variant="danger" size="lg" as={Link} to="/receipes" className="explore-btn">
            Explore Recipes
          </Button>
        </Col>
      </Row>

      {/* Featured Recipes */}
      <Row>
        <Col>
          <h2 className="featured-title text-center">Featured Recipes</h2>
        </Col>
      </Row>

      <Row className="recipe-cards g-4">
        <Col md={4}>
          <Card className="recipe-card">
            <Card.Img variant="top" src="https://cdn.dummyjson.com/recipe-images/4.webp" />
            <Card.Body>
              <Card.Title>Classic Italian Pasta</Card.Title>
              <Card.Text>
                A traditional recipe with a rich tomato sauce and fresh herbs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="recipe-card">
            <Card.Img variant="top" src="https://cdn.dummyjson.com/recipe-images/21.webp" />
            <Card.Body>
              <Card.Title>Fresh Green Salad</Card.Title>
              <Card.Text>
                A light and healthy salad with seasonal vegetables and vinaigrette.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="recipe-card">
            <Card.Img variant="top" src="https://cdn.dummyjson.com/recipe-images/23.webp" />
            <Card.Body>
              <Card.Title>Chocolate Lava Cake</Card.Title>
              <Card.Text>
                A gooey, rich dessert that melts in your mouth.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    </>
 

    
  );
};

export default Home;
