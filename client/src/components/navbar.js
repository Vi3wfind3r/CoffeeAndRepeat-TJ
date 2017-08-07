import React from 'react';
import './navbar.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul className='navbar'>
          <li>Hello !</li>
          <li>Logout</li>
        </ul>
      </nav>
    );
  }
}