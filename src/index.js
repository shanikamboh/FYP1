import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import login from './Login.js';
import signup from './Signup.js';
import Home from './Home.js';
import about from './About.js';
class Router1 extends React.Component{
    render(){
        return(
            <Router>
            <div>
                <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    
<a href="/">
<div className="logosec navbar-brand">
         <h3>Zeeshan</h3>
         <p className="logotext">network site</p>
         </div>
</a>

                <div>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
      <Link className="nav-link btn btn-success ml-4" to="/login">Login</Link>
        {/* <a className="nav-link btn btn-warning ml-4" href="#">Home <span className="sr-only">(current)</span></a> */}
      </li>
      <li className="nav-item">
      <Link className="nav-link btn btn-success ml-4"  to="/signup">Signup</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link btn btn-success ml-4"  to="/about">about</Link>
      </li>
    </ul>
                </div>
  </div>
</nav>
        </header>
            
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={login}/>
                <Route path='/signup' component={signup}/>
                <Route path='/about' component={about}/>
            <footer className="page-footer font-small unique-color-dark mt-4">

  <div>
    <div className="container">

     
      <div className="row py-4 d-flex align-items-center">

       
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0">Get connected with us on social networks!</h6>
        </div>
       
        <div className="col-md-6 col-lg-7 text-center text-md-right">

         
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
      

    </div>
  </div>

  
  <div className="container text-center text-md-left mt-5">

    
    <div className="row mt-3">

     
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        
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
      
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        
        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p>
          <i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
        <p>
          <i className="fa fa-envelope mr-3"></i> info@example.com</p>
        <p>
          <i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
        <p>
          <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>

      </div>
      
    </div>

  </div>
  <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="#"> Kinectro World</a>
  </div>

</footer>
            </div>
            </Router>
        )
    }
}

ReactDOM.render(<Router1 />, document.getElementById('root'));
