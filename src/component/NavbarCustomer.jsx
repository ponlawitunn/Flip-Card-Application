import React, { Component } from 'react'
import { Navbar,Image } from 'react-bootstrap';
import './Navbar.css';

export default class NavbarCustomer extends Component {
  render() {
    return (
        <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <Image src="picture/thai-sweden1.jpg"
        width="50"
        height="30"/>
          {' EZ-LANGUAGE '}
        </Navbar.Brand>
      </Navbar>
      </div>
    )
  }
}
