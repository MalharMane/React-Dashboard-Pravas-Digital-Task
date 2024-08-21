import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="header">
      <Navbar.Brand href="#"> &nbsp; Dashboard</Navbar.Brand>
    </Navbar>
  );
}

export default Header;

