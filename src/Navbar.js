import React, { Component } from 'react'
import Logo from './logo.png'

export default class Navbar extends Component {
  render () {
    return (
      <nav className="navbar">
        <img className="logo" alt="vts logo" src={Logo} />
      </nav>
    )
  }
}