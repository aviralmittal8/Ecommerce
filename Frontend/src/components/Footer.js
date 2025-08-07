import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p>&copy; {new Date().getFullYear()} Store 92. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 footer-icon">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 footer-icon">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light footer-icon">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;