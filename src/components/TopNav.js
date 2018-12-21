import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

class TopNav extends Component {
  render() {
    
    return (
      <Navbar color="warning">
        <NavbarBrand> tic-tac-toe </NavbarBrand>
      </Navbar>
    )
  }
}

export default TopNav