import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
         Link,
         Route

} from 'react-router-dom'
import login from './Login.js';
import signup from './Signup.js';

class App extends Component {
  render() {
    return (
     
        
        <div className="App">
 
    <div>

 
    </div>
    
        
        <div className="row container-fluid main-div bg-secondary">
        <div className="col-md-4 box1">
        <img className="imgbox" src="http://parga.us/wp-content/uploads/2018/04/personalised-ba-shower-guest-book-photo-album-memory-book-bunting-personalised-baby-shower-guest-book-400-x-300-pixels.jpg" />
        </div>
        <div className="col-md-7 box2">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1><p>feugiat ultrices massa. Suspendisse ac augue ex. Vestibulum non velit ac nunc lobortis interdum. Morbi volutpat neque ut eros semper iaculis. Sed congue vel lorem nec euismod. Phasellus eleifend tortor nec augue placerat pharetra. Cras auctor erat non</p>
        <p>feugiat ultrices massa. Suspendisse ac augue ex. Vestibulum non velit ac nunc lobortis interdum. Morbi volutpat neque ut eros semper iaculis. Sed congue vel lorem nec euismod. Phasellus eleifend tortor nec augue placerat pharetra. Cras auctor erat non</p>
        <button className="btn btn-success">Read more</button>
        
        </div>
</div>
<div className="main-container">
<div className="text-only text-left">
<h1><span className="span1">Wellcome</span> To Our Site</h1>
<hr className='hr' />
<p><b>gue ex. Vestibulum non velit ac nunc lobortis interdum. Morbi volutpat neque ut eros semper iaculis. Sed conguegue ex. Vestibulum non velit ac nunc lobortis interdum. Morbi volutpat neque ut eros semper iaculis. Sed congue</b></p>
<p>
gue ex. Vestibulum non velit ac nunc lobortis interdum. Morbi volutpat neque ut eros semper iaculis. Sed conguegue ex. Vestibulum non velit ac nunc lobortis interdum. Morbi volutpat neque ut eros semper iaculis. Sed congue
</p>
<ul>
  <li>
  gue ex. Vestibulum non velit ac nunc lobortis interdum. Morbi volutpat neque ut eros semper iaculis. Sed congue
  </li>
  <li>
  gue ex. Vestibulum non velit ac nunc lobortis interdum. Morbi volutpat neque ut eros semper iaculis. Sed congue
  </li>
</ul>
<blockquote>
    <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
    <footer>From WWF's website</footer>
  </blockquote>

</div>


<div className="cards text-left">
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card bg-secondary">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
</div>
    </div>
      
      
    );
  }
}

export default App;
