import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col,
  Input
} from 'reactstrap';
import PasswordField from './PasswordField';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { fullname: false, email: false, password: false }
  }
  state = { fullname: false, email: false, password: false }
  fieldStateChanged = field => state => this.setState({ [field]: state.errors.length === 0 });
  passwordChanged = this.fieldStateChanged('password');


  render() {
    return <div className="wrapper">
      <section>
        <Container fluid className="landing-container">
          <Row>
            <Col xs="12" md="4" className="p-4 text-center">
            </Col>
            <Col xs="12" md="4">
              <h2 className="mb-4 text-sub-title">Just a few quick things to set up your account...</h2>
              <Row>
                <Col xs="12" className="mb-5">
                  <Row>
                    <Col xs="12" className="mb-4">
                      <label className="lbl-form-group">Full name</label>
                      <Input
                        type="text"
                        name="email"
                        id="email"
                        className="input-name"
                        placeholder="Full name"
                      />
                      <label className="lbl-form-group">Password</label>
                      <PasswordField
                        fieldId="password"
                        label="Password"
                        placeholder="Password"
                        onStateChanged={this.passwordChanged}
                        thresholdLength={7}
                        minStrength={6}
                        required
                      />
                    </Col>
                    <Col xs="12" className="mb-4 text-center">
                      <Link to='/'>
                      <button className="btn-get-started">Ready! <span className="ml-2">&#x2799;</span></button>
                      </Link>
                    </Col>
                  </Row>

                </Col>
              </Row>
            </Col>
            <Col xs="12" md="4" className="p-4 text-center">
            </Col>
          </Row>
        </Container>
      </section>
    </div>;
  }
}
