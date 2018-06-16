import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Gallery from "./components/gallery";
import Company from "./components/company";
import Contacts from "./components/contacts"
import SignIn from "./components/signIn";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>          
          <Route path="/home" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/company" component={Company} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/signIn" component={SignIn} />          
          <Home/>
        </Switch>
      </Router>
    );
  }
}

export default App;
