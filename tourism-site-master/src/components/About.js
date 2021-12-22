import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import MainCarousel from "./Carousel";
import { ReactComponent as Award } from "../assets/svg/award.svg";
import { ReactComponent as Shield } from "../assets/svg/shield.svg";
import { ReactComponent as Compass } from "../assets/svg/compass.svg";
import { ReactComponent as Heart } from "../assets/svg/heart.svg";

class About extends Component {
  render() {
    return (
      <div id='about'>
        <MainCarousel />

        <div className="subComponent" id="aboutBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>About Infinity Places</h1>
              <p>Booking, Tour Guide & Private Guided Tours</p>
            </header>
            <section className="svg-group text-center subComponent">
              <Row>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card" style={{backgroundColor:"#28a745" , color:"white"}}>
                    <Award width="48" height="48" strokeWidth="1" />
                    <p>Best Price Guarantee</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card" style={{backgroundColor:"#28a745" , color:"white"}}>
                    <Shield width="48" height="48" strokeWidth="1" />
                    <p>Trust and Safety</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card" style={{backgroundColor:"#28a745" , color:"white"}}>
                    <Heart width="48" height="48" strokeWidth="1" />
                    <p>Best Travel Agent</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card" style={{backgroundColor:"#28a745" , color:"white"}}>
                    <Compass width="48" height="48" strokeWidth="1" />
                    <p>Travel Insurance</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
