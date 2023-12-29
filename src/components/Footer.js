import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Footer.css'; 

function Footer() {
  return (
    <div className="footer-background">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4">
            <div className="contact-info">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Main Location:</span> 50 Faisal Town Lahore Nexusberry
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Phone:</span> (555) 555-5555
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Phone:</span> (92)234 -567853
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Email:</span> xyz_123nexusberry@icloud.com
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <Form className="contact-form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
