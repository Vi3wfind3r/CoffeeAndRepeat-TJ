import React from 'react';
import * as Cookies from 'js-cookie';
import * as actions from '../actions';
import Navbar from './navbar';
import './question-page.css';
import {connect} from 'react-redux';

export class QuestionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feedback: null
        };
    }

    componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            this.props.dispatch(actions.getUsers(accessToken));
        }
    }

    onSubmitAnswer(e) {
        e.preventDefault();
        let userAnswer = this.userInput.value.toLowerCase();
        let correctAnswer = this.props.questions[this.props.index].answer;
        this.userInput.value = '';
        if(userAnswer === correctAnswer) {
            this.setState({feedback: <div className="correct-answer">
                        <p>Correct!</p>
                        <button className="next-question">Next Question</button>
                     </div>
            })
        } else { 
            this.setState({
                feedback: <div className="incorrect-answer">
                        <p>Incorrect</p>
                        <button className="show-answer">Show Answer</button>
                        <button className="next-question">Next Question</button>
                    </div>
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="question-box">
                    <ul className="question-list">
                        <li>
                            {this.props.questions[this.props.index].question}
                        </li>
                    </ul>
                    <ul className="answer-section">
                        <label>Answer</label>
                        <input ref={(value) => this.userInput = value} className="answer-input" placeholder="E.g. coffee" type="text"></input>
                        <button onClick={(e) => this.onSubmitAnswer(e)} className="submit-answer">Submit</button>
                    </ul>
                </div>
                {this.state.feedback}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    currentUser: state.currentUser,
    state: state,
    questions: state.questions,
    index: state.index
});

export default connect(mapStateToProps)(QuestionPage);
