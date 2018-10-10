import React, { Component } from 'react';
import '../../css/theme/bootstrap.css';
import '../../css/theme/custom.css';
import '../../css/bootstrap-float-label.min.css';
import Main from './Main';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}
