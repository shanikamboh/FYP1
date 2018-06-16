import React from 'react';
import './signup.css';
import axios from 'axios';
import { BrowserRouter as Router,
    Link,
    Route

} from 'react-router-dom'
import login from './Login.js';
import signup from './Signup.js';

class Signup extends React.Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submithandler = this.submithandler.bind(this);
        this.state={
            user:{
                firstName:'',
                lastName:'',
                email:'',
                password:''
            },
        };
    }
    handleChange(){
       var password=document.getElementById('password').value;
       var password_confirmation=document.getElementById('password_confirmation').value;
       if(password==password_confirmation){
        var info ={
            firstName:document.getElementById('first_name').value,
            lastName: document.getElementById('last_name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        }
        this.setState(this.state.user=info)
       }
    }
    submithandler(evt){
        evt.preventDefault();
        axios.post('/signup', this.state.user).then(response=>{
            console.log('data sent to signup');
        })
    }
    render(){
        return (
            <div className="jumbotron">
            <div className="container">
            <div className="rows">
            <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                            <h3 className="panel-title">Please sign up for OurSite <small>It's free!</small></h3>
                             </div>
                             <div className="panel-body">
                            <form role="form">
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <div className="form-group">
                                <input type="text" onChange={this.handleChange} name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" onChange={this.handleChange} name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
    
                                <div className="form-group">
                                    <input type="email" onChange={this.handleChange} name="email" id="email" className="form-control input-sm" placeholder="Email Address" />
                                </div>
    
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="password" onChange={this.handleChange} name="password" id="password" className="form-control input-sm" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="password" onChange={this.handleChange} name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                </div>
                                
                                <input value="Register" onClick={this.submithandler} className="btn btn-info btn-block" />
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="alert-success">
        <p>Already got an Account??... 
            <Link to="/login">Login</Link></p>
        </div>
                
            </div>
        );
    }
}
    

export default Signup;