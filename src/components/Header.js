import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
        <Navbar collapseOnSelect className="App-header">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="https://www.gofundme.com/angelena-atlas" target="_blank" rel="noopener noreferrer">Support Us &hearts; </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown title={<Glyphicon glyph="globe"/>}>
                <MenuItem href="/">Home</MenuItem>
                <MenuItem href="/explore">Explore</MenuItem>
                <MenuItem href="#">Contribute</MenuItem>
                <MenuItem href="#">About & Contact</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      )
  }
}

export default Header;
