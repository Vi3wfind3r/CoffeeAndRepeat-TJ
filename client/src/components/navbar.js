import React from 'react';
import './navbar.css';

export default class Navbar extends React.Component {
  
  render() {
    return (
      <nav>
        <ul className='navbar'>
          <li className="greeting">Hello !</li>
          <li className="logout"><a href="/api/auth/logout">Logout</a></li>
        </ul>
      </nav>
    );
  }
}