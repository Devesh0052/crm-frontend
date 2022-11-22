import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Login = ({
  handleOnChange,
  handleOnSubmit,
  formSwitcher
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit} >
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
                onChange={handleOnChange}
                required
              />
            </Form.Group>

            <Button type="submit" >Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("rest")}>
            Forget Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};