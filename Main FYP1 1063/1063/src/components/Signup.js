import React from 'react';
import './style.css';
import $ from 'jquery';
import {  Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class About extends React.Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.senddata = this.senddata.bind(this);
        this.state = {
          info:[],
          };
    }
    handleChange(){
        var gender="";
        if(document.getElementById('genderm').checked){
        gender='male';
        }
        else{
        gender='female';
       
        }
        var info= {
         fname : document.getElementById('fname').value,
         lname : document.getElementById('lname').value,
         email : document.getElementById('Email').value,
         pwd :  document.getElementById('Password').value,
         city :  document.getElementById('city').value,
         gender
        };
        this.setState(this.state.info=info)
    }
    senddata(evt){
      if(document.getElementById('Password').value===document.getElementById('cPassword').value)
      {
        var password=document.getElementById('Password').value;
        console.log(this.state.info)
        if(this.state.user!=''){
          $.ajax({
              type: "POST",
              url: '/signup',
              data: this.state.info,
              success: function (){ 
                
                         },
            });
      }
      else{
        alert("password did'nt Matched")
      }
        evt.preventDefault();
       
        }
       
    }
render(){
    return(
     <div>
        <div className="innercontrol">
        <Form>
        <FormGroup row>
          <Label for="Email" sm={2}>First Name</Label>
          <Col sm={10}>
            <Input type="text" onChange={this.handleChange} name="fname" id="fname" placeholder="First Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Email" sm={2}>Last Name</Label>
          <Col sm={10}>
            <Input type="text" onChange={this.handleChange} name="lname" id="lname" placeholder="Last Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" onChange={this.handleChange} name="email" id="Email" placeholder="@email.com" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" onChange={this.handleChange} name="password" id="Password" placeholder="password " />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Password" sm={2}>Confirm Password</Label>
          <Col sm={10}>
            <Input type="password" onChange={this.handleChange} name="cpassword" id="cPassword" placeholder="Confirm password" />
          </Col>
          
        </FormGroup>
        <FormGroup row>
          <Label for="Password" sm={2}>City</Label>
          <Col sm={10}>
            <Input type="password" onChange={this.handleChange} name="city" id="city" placeholder="city" />
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-2">Gender</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input id="genderm" onClick={this.handleChange} type="radio" name="radio2" />{' '}
                male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input id="genderf" onClick={this.handleChange} type="radio" name="radio2" />{' '}
                Female
              </Label>
            </FormGroup>
    
          </Col>
        </FormGroup>
        <div className="row">
        <Button className="ml-3 btn-lg" onClick={this.senddata} outline color="success">success</Button>{' '}        

        </div>
        </Form>
        </div>
     </div>
    );
}
}