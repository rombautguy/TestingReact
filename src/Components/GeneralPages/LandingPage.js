
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col,
  Button,
  Input
} from 'reactstrap';
export default function LandingPage(props) {
  return <div className="wrapper">
    <section>
      <Container fluid className="landing-container">
        <Row>
          <Col xs="12" md="6" className="p-4 text-center">
            <Row>
              <Col xs="12" className="mb-4 text-center justify-content-center">
                <img src="/images/landing_logo.png" className="w-100" />
              </Col>
            </Row>
          </Col>
          <Col xs="12" md="6">
            <h1 className="mb-4 text-title">Where Work Happens</h1>
            <Row>
              <Col xs="12" className="mb-4">
                <p className="text-description">When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.</p>
              </Col>
              <Col xs="12" className="mb-5">
                <Row>
                  <Col xs="12" md="6" className="mb-4 text-center justify-content-center">
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      className="input-email"
                      placeholder="Email address"
                      // defaultValue={cardInfo.ShippingFirstName}
                      // onChange={(e) => {
                      //   cardInfo.RecipientFirstName = e.target.value;
                      //   this.setState({ cardInfo: cardInfo });
                      // }}
                    />
                  </Col>
                  <Col xs="12"  md="6" className="mb-4">
                    <Link to='/register'><button className="btn-get-started">GET STARTED</button></Link>
                  </Col>
                </Row>
                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  </div>;
}
