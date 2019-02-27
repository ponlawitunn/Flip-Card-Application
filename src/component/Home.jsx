import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
        <div className="body1">
        <Jumbotron>
          <h2>Welcome to EZ-Language</h2>
          <p className="p1">Learn language fast with <strong>EZ-Language</strong>. Start learning language today! More than 12 Languages. 
              For PC, Tablet & Mobile! Millions of subscribers. Simple, Effective, Fun. Great Customer Service. Voice Recognition. 
              Learn on the Go w/the App. Review Manager. Interactive Lessons.</p>

        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="picture/thai-sweden1.jpg" circle className="profile-pic"/>
            <h3>Thai-Sweden</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="picture/japan-sweden.jpg" circle className="profile-pic"/>
            <h3>Japan-Sweden</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="picture/iraq-sweden.jpg" circle className="profile-pic"/>
            <h3>Iraq-Sweden</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
        </Row>
        </div>
    )
  }
}
