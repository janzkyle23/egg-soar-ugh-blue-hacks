import React from 'react';
import { Link, Redirect } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './style.css';

const Navigation = (props) => {
  let prevScroll = 0
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav.navbar')      
    navbar.classList[window.scrollY > prevScroll ? 'add' : 'remove']('hide')
    prevScroll = window.scrollY
  })

  return (
    <Navbar collapseOnSelect className="color-nav" expand="lg" fixed="top">
    <Link to={{pathname: "/"}}><Navbar.Brand href="#home" style={{color: '#f4f4f4'}}></Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto mb-2">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="#">Settings</Nav.Link>
        <Nav.Link href="#">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Navigation;