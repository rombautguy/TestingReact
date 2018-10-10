import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../GeneralPages/LandingPage';
import RegisterPage from '../GeneralPages/RegisterPage';

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/register' component={RegisterPage} />
      </Switch>
    );
  }
}
