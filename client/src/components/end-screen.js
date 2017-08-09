import React from 'react';
import Navbar from './navbar';
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
          <Link to='/'>
            <button className="start-over">Start New Session</button>
          </Link>
            <button className="review">Review</button>
        </div>
      </div>
    )
  }
}