import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adminUser } from "../actions/userAction";

import Loader from "../Components/Loader";
import Success from "../Components/Success";
import Error from "../Components/Error";
import '../CSS/login.css';

function AdminLogin() {
  
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("admin123");
  const dispatch = useDispatch();

  const adminState = useSelector(state => state.adminUserReducer)
  const {loading, success, error} = adminState

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/admin";
    }
  }, []);

  function handleLogin() {
    const user = { email, password };
    dispatch(adminUser(user));
    
  }
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
          <Image src="https://images.all-free-download.com/images/graphicwebp/pizza_background_6821428.webp" alt="logo" style={{ width: "100%", height: "70%", marginTop: "200px",  borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",}} />
          </Col>
          <Col
            xs={12} sm={12} md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Form className="form adminlogin mt-5">
              <h1 className="text-center">Admin Login</h1>
              {loading && <Loader />}
              {success && <Success success="Admin Registered Successfully" />}
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleLogin}>
               Admin Login
              </Button>
              {error && <Error error="email or password incorrect" />}
             
            </Form>
          </Col>
          <Col md={3}>
          <Image src="https://images.all-free-download.com/images/graphicwebp/cooking_education_background_flying_food_ornament_book_icon_6828094.webp" alt="logo" style={{ width: "100%", height: "70%", marginTop: "200px",  borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",}} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminLogin;





