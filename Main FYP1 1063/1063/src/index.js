import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import { BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem
   } from 'reactstrap';
   
import login from './components/Login.js';
import signup from './components/Signup.js';
import About from './components/About.js';
import Home from './components/Home.js';

class Main extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
          <Router>
        <div>
          <Navbar className="bgcolor" light expand="md">
            <NavbarBrand><div>Zeeshan 1063<p className="para">Look at the Futute</p></div></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link btn-clr btn btn-info ml-4"  to="/signup">Signup</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link btn-clr btn btn-info ml-4"  to="/login">Login</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link btn-clr btn btn-info ml-4"  to="/about">About</Link>
                </NavItem>
               
              </Nav>
            </Collapse>
          </Navbar>
          <div className="greenBar"></div>


                <Route exact path='/signup' component={signup}/>
                <Route exact path='/login' component={login}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/' component={Home}/>




          <footer className="page-footer font-small bgcolor unique-color-dark">

  <div>
    <div className="container page-footer">

    
          <a className="fb-ic">
            <i className="fa fa-facebook white-text mr-4"> </i>
          </a>
          
          <a className="tw-ic">
            <i className="fa fa-twitter white-text mr-4"> </i>
          </a>
         
          <a className="gplus-ic">
            <i className="fa fa-google-plus white-text mr-4"> </i>
          </a>
          
          <a className="li-ic">
            <i className="fa fa-linkedin white-text mr-4"> </i>
          </a>
          
          <a className="ins-ic">
            <i className="fa fa-instagram white-text"> </i>
          </a>

        </div>
      
      </div>
      

  
  <div className="container text-center text-md-left">

    
    <div className="row  top-0 mt-3">

     
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">

        
        <h6 className="text-uppercase font-weight-bold">Company name</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

      </div>
     
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

       
        <h6 className="text-uppercase font-weight-bold">Products</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p>
          <a href="#!">Saylani Info</a>
        </p>
        <p>
          <a href="#!">Faisalabad</a>
        </p>
        <p>
          <a href="#!">Karachi</a>
        </p>
        <p>
          <a href="#!">React Developers</a>
        </p>

      </div>
      
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        
        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p>
          <a href="#!">Your Account</a>
        </p>
        <p>
          <a href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!">Shipping Rates</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p>

      </div>  
    </div>

  </div>
  <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="#"> Kinectro World</a>
  </div>

</footer>
        </div>
        </Router>
      );
    }
  
  }
ReactDOM.render(<Main />, document.getElementById('root'));
