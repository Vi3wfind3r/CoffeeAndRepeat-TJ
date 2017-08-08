import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
  
  render() {
    return (
      <nav>
        <ul className='navbar'>
          <li>Hello !</li>
          <Link to='/api/auth/logout' style={{textDecoration: "none"}}>
            <li>Logout</li>
          </Link>
        </ul>
      </nav>
    );
  }
}