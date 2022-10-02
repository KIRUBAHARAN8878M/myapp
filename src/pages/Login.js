import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import Success from "../Components/Success";
import Error from "../Components/Error";
import '../CSS/login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginState = useSelector(state => state.loginUserReducer)
  const {loading, success, error} = loginState

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function handleLogin() {
    const user = { email, password };
    dispatch(loginUser(user));
  }
  // function userCredentials(){
  //   setEmail("user@gmail.com");
  //   setPassword("user123")
  // }
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
        

          </Col>
          <Col
           xs={12} sm={12} md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Form className="form loginform">
              <h1 className="text-center text-white">Login</h1>
              {loading && <Loader />}
              {success && <Success success="User logged in" />}
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center text-white">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>

              <span className="text-danger">
              {error && <Error error="Email or Password incorrect" />}
              </span>

              <div className="py-4 text-center">
                <p className="text-white">
                  Don't have an account? <Link to="/register"> Register</Link>
                </p>
                {/* <Button onClick={userCredentials}>
                User Credentials
              </Button> */}
              </div>
            
            </Form>
          </Col>
          <Col md={3}>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
