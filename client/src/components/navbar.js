import React from 'react';
import './navbar.css';

export default class Navbar extends React.Component {
  
  render() {
    return (
      <nav>
        <ul className='navbar'>
          <li>Hello !</li>
            <li><a href="/api/auth/logout">Logout</a></li>
        </ul>
      </nav>
    );
  }
}