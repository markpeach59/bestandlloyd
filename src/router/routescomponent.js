import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// Page
import HomePage from '../pages/homepage';
import LoginPage from '../pages/loginpage';

class RoutesComponent extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </div>
    );
  }
}
export default RoutesComponent;
