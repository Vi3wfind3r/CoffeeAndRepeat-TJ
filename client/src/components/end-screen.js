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
          <a onClick={() => {
            this.props.dispatch(actions.startNewGame())
            this.props.history.push(`/questions`) 
            this.props.dispatch(actions.fetchQuestions())
            }
          }>
            <div>Start New Game</div>
          </a>
          {/*<Link to='/questions' className="start-over" onClick={(e) => }>
            Start New Session
          </Link>*/}
          <Link to='/reading' className="review">
            Review
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