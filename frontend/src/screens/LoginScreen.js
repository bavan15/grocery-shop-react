import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../Actions/userActions";
import anytime from "../image/anytime.jpg";
import offer from "../image/offer3.png";
import logo from "../image/welcome.png";
import css from "../components/css/Nav.css";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login">
    <Row>
      <Col md={10}>
        <FormContainer>
          <h1>Sign In</h1>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label><i className="fas fa-envelope-square"></i> Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label><i className="fas fa-unlock-alt"></i> Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="success" className="signin-btn" block>
              Sign In
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
            Don???t have an account?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
              >
              <h7 style={{color:"blue"}}>Sign Up Now!</h7>
              </Link>
            </Col>
          </Row>
        </FormContainer>
      </Col>
    </Row>
    </div>
  );
};

export default LoginScreen;
