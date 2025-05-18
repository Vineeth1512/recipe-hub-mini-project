// NotFound.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className="error-code">404</h1>
            <h2 className="error-text">Page Not Found</h2>
            <p className="error-desc">Sorry, the page you are looking for does not exist.</p>
            <Button variant="danger" as={Link} to="/">Go Home</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
