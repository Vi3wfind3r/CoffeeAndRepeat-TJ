import React from 'react';
import Navbar from './navbar';
import './end-screen.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class EndScreen extends React.Component {
  render() {
    let incorrectQuestions = this.props.incorrectQuestions.map((el, index) => {
      return <li key={index}>
              <p>{el.question}</p>
              <p>{el.answer}</p>
              <p>You missed this {el.count} times</p>
            </li>
    });

    return (
      <div>
        <Navbar />
        <div className="end-message">
          <p className="finished wow zoomInUp">You're Finished!</p>
        </div>
        <div className="end-screen-buttons">
          <Link to='/questions'>
            <button className="start-over">Start New Session</button>
          </Link>
          <Link to='/reading'>
            <button className="review">Review</button>
          </Link>
        </div>
        <div>
          <ul>
            {incorrectQuestions}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  incorrectQuestions: state.incorrectQuestions
});

export default connect(mapStateToProps)(EndScreen);