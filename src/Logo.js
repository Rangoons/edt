import React, { Component } from 'react';
import logo from './media/logo.png';
import './App.css';

class Logo extends Component {
  render() {
    return (
        <div className="Header">
          <img src={logo} alt="logo" />
        </div>
    );
  }
}

export default Logo;
