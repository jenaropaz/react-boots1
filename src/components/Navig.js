import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class Navig extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='sm' bg='primary' variant='dark'>
        <Navbar.Brand href='/'><i className='fa fa-star'></i> JCP</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
          <Nav className='ml-auto'activeKey='/'
          onSelect ={(selectedKey)=> alert(`selected ${selectedKey}`)}>
             
            <Nav.Link href='/'><i className='fa fa-home'></i> Home</Nav.Link>
            <Nav.Link href='/about'><i className='fa fa-male'></i> About</Nav.Link>
            <Nav.Link href='/login'><i className='fa fa-heart'></i> Login</Nav.Link>
            <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action 1</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Action 2</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Action 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Action 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href='#memes'>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navig;
