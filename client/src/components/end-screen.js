import React from 'react';
import Navbar from './navbar';
import './end-screen.css';
import {Link,  withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import * as Cookies from "js-cookie";

export class EndScreen extends React.Component {

  componentDidMount() {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      this.props.dispatch(actions.getUsers(accessToken));
    }
  }


  render() {
    let time = '';
    let incorrectQuestions = this.props.incorrectQuestions.map((el, index) => {
      if(el.count > 1) {
        time = 'times';
      } else if (el.count === 1) {
        time = 'time';
      }
      return <li key={index}>
                <p className="review-question">{el.question}</p>
                <p className="review-answer">{el.answer}</p>
                <p className="review-count">You missed this {el.count} {time}</p>
                <hr className="review-hr"/>
              </li>
    });

    return (
      <div>
        <Navbar />
        <div className="end-message">
          <p className="finished wow zoomInUp">You're Finished!</p>
        </div>
        <div className="end-screen-buttons">
          <a onClick={() => {
            this.props.dispatch(actions.startNewGame())
            this.props.history.push(`/questions`) 
            this.props.dispatch(actions.fetchQuestions())
            }
          }>
            <div className="start-over">Start New Game</div>
          </a>
          <Link to='/reading' className="review-link">
            <div className="review">Review</div>
          </Link>
        </div>
           <hr />
        <div className="review-box">
          <ul className="review-section">
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