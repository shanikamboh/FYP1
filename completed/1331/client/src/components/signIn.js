import React, { Component } from 'react';
import "./signIn.css"
import { Form, FormGroup, Input, Label, Button, Col, Row } from 'reactstrap';
import NavBar from "./navbar";

export default class SignIn extends Component {
  render() {
    return (
      <div className="form">
        <NavBar />
        <Row>
          <Col md={4}>
            <Form row="true" className="formSetting" action="/signIn" method="POST" >
              <fieldset>
                <legend> Sign In</legend>
                <FormGroup>
                  <Col md={8} className="adminForm" >
                    <Label>
                      Name:
              </Label>
                    <Input type="email" name="email" placeholder="Email" />
                  </Col>
                  <Col md={8} className="adminForm" >
                    <Label  >
                      Password:
              </Label>
                    <Input type="password" name="password" placeholder="Password" />
                  </Col>
                  <Col md={8} className="adminForm" >
                    <Button color="success" > Log In </Button>
                  </Col>
                </FormGroup>
              </fieldset>
            </Form>
          </Col>
          <Col md={4}>
          </Col>
          <Col md={4}>
            <SignUp />
          </Col>
        </Row>

      </div>
    );
  }
}


class SignUp extends Component {
  render() {
    return (
      <Form action="/signUp" method="POST" className="formSetting" >
        <fieldset>
          <legend> Sign Up</legend>
          <Col sm={8} className="adminForm" >
            <Label>
              Name:
              </Label>
            <Input type="text" name="name" placeholder="Name" />
          </Col>
          <FormGroup>
            <Col sm={8} className="adminForm" >
              <Label>
                Email:
              </Label>
              <Input type="email" name="email" placeholder="Email" />
            </Col>
            <Col sm={8} className="adminForm" >
              <Label  >
                Password:
              </Label>
              <Input type="password" name="password" placeholder="Password" />
            </Col>
            <FormGroup check inline className="radio-btns" >
              <Label check>
                <Input type="radio" name="gender" value="male" />
                Male
              </Label>
            </FormGroup>
            <FormGroup check inline className="radio-btns" >
              <Label check>
                <Input type="radio" name="gender" value="female" />
                Female
              </Label>
            </FormGroup>
            <Col sm={8} className="adminForm" >
              <Button color="success" > Log In </Button>
            </Col>
          </FormGroup>
        </fieldset>
      </Form>
    )
  }
}