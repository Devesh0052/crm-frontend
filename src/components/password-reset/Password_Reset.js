import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({
    handleOnChange,
    handleOnResetSubmit,
    formSwitcher
  }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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

            <Button type="submit">Reset Password</Button>
          </Form>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("login")}>
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

