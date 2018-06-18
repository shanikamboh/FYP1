import React from 'react';
import './style.css';
import $ from 'jquery';
import {  Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';

export default class About extends React.Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.senddata = this.senddata.bind(this);
        this.state = {
          user:[],
          };
    }
    handleChange(){
        var info= {
         email : document.getElementById('email').value,
         pwd :  document.getElementById('password').value,
        };
        this.setState(this.state.user=info)
    }
    senddata(evt){
        evt.preventDefault();
        if(this.state.user!=''){
            $.ajax({
                type: "POST",
                url: '/login',
                data: this.state.user,
                success: function (){  
                    console.log('data sent successfully')
                          },
              });
        }
       
    }
render(){
    return(
     <div>
        <div className="innercontrol">
        <Form>
        <FormGroup row>
          <Label for="Email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" onChange={this.handleChange} name="email" id="email" placeholder="email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Email" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" onChange={this.handleChange}  name="password" id="password" placeholder="password" />
          </Col>
        </FormGroup>   
        <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-5">
        <Button className="ml-5 float-right" onClick={this.senddata} outline color="success">Login</Button>{' '}        
        </div>
        </div>
        </Form>
        </div>
     </div>
    );
}
}