import React from 'react';
import './signup.css'
import { BrowserRouter as Router,
    Link,
    Route

} from 'react-router-dom'
import login from './Login.js';
import signup from './Signup.js';

class About extends React.Component{
    constructor() {
        super();
        
        this.state = {
          user:{
          },
        };
        
    }
    render(){
        
        return(
            <div className="main">
                <h1>project Build by</h1>
                <h3>Muhammad Awais Zeeshan</h3>
                <h1>project Build For</h1>
                <h3>Saylani Mass Training (Final Year Project 1)</h3>
                <h1>Date</h1>
                <h3>7th June,2018</h3>
                <h1>project Supervisor </h1>
                <h3>Sir Khurram Raheel</h3>
            </div>
        );
    }
}
export default About;