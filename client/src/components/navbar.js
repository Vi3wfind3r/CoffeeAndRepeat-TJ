import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

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