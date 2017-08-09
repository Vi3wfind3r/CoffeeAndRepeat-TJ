import React from 'react';
import * as Cookies from 'js-cookie';
import * as actions from '../actions';
import Navbar from './navbar';
import './question-page.css';
import {connect} from 'react-redux';

export class QuestionPage extends React.Component {

    componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        console.log(accessToken);
        if (accessToken) {
            this.props.dispatch(actions.getUsers(accessToken));
            console.log(this.props.state);
        }
    }

    render() {
        const questions = this.props.questions.map((question, index) =>
            <li key={index}>{question}</li>
        );

        return (
            <div>
                <Navbar />
                <div className="question-box">
                    <ul className="question-list">
                        {questions}
                    </ul>
                    <ul className="answer-section">
                        <label>Answer</label>
                        <input className="answer-input" placeholder="E.g. coffee" type="text"></input>
                        <button className="submit-answer">Submit</button>
                    </ul>
                </div>
                <div className="correct-answer">
                    <p>Correct!</p>
                    <button className="next-question">Next Question</button>
                </div>
                <div className="incorrect-answer">
                    <p>Incorrect</p>
                    <button className="show-answer">Show Answer</button>
                    <button className="next-question">Next Question</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    currentUser: state.currentUser,
    state: state,
    questions: state.questions
});

export default connect(mapStateToProps)(QuestionPage);
