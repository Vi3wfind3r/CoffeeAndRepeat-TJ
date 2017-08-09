import React from 'react';
import Navbar from './navbar';
import './end-screen.css';
import {Link} from 'react-router-dom';

export default class EndScreen extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="end-message">
          <p>You're Finished!</p>
        </div>
        <div className="end-screen-buttons">
          <Link to='/questions'>
            <button className="start-over">Start New Session</button>
          </Link>
          <Link to='/reading'>
            <button className="review">Review</button>
          </Link>
        </div>
      </div>
    )
  }
}