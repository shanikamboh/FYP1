import React from 'react';
import './signup.css'
import { BrowserRouter as Router,
    Link,
    Route

} from 'react-router-dom'
import login from './Login.js';
import signup from './Signup.js';
import axios from 'axios';

class Login extends React.Component{
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submithandler = this.submithandler.bind(this);
        
        this.state = {
          user:{
            username:'',
            password:'',
            remember:'',
          },
        };
        
    }
    handleChange(){
        var info= {
         email : document.getElementById('email').value,
         pwd :  document.getElementById('pwd').value,
         rem :  document.getElementById('remember').checked,
        };
        this.setState(this.state.user=info)
    }
    submithandler(evt){
        evt.preventDefault();
        axios.post('/login', this.state.user).then(response=>{
            console.log(response)
        })

    }
    render(){
        
        return(
            <div>
   <form className='form center'>
   <h3>Login Please!!!</h3>
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="email" onChange={this.handleChange} className="form-control" id="email" />
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password"  onChange={this.handleChange} className="form-control" id="pwd" />
  </div>
  <div className="checkbox">
    <label><input onChange={this.handleChange} id="remember" type="checkbox" /> Remember me</label>
  </div>
  <input value="Login" onClick={this.submithandler} className="btn btn-info btn-block" />
</form>
<div className="alert-info">Don't Have Any Account???...<Link to="/signup">Signup</Link></div>
            
            </div>
        );
    }
}
export default Login;