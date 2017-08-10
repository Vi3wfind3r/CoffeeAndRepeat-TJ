import React from 'react';
import * as actions from '../actions';
import Navbar from './navbar';
import './question-page.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export class QuestionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feedback: null,
            input: true,
            showAnswer: false
        };
    }

    correctQuestion(e) {
        e.preventDefault();
        this.props.dispatch(actions.removeQuestion());
        this.setState({
            feedback: null,
            input: true
        })
    }

    incorrectQuestion(e) {
        e.preventDefault();
        this.props.dispatch(actions.insertQuestion());
        this.setState({
            feedback: null,
            input: true,
            showAnswer: false
        }); 
    }

    showAnswer(e) {
        e.preventDefault();
        this.setState({
            showAnswer: true
        })
    }

    onSubmitAnswer(e) {
        e.preventDefault();
        this.setState({
            input: false
        });
        let userAnswer = this.userInput.value.toLowerCase();
        let correctAnswer = this.props.questions.get(0).answer.toLowerCase();
        this.userInput.value = '';
        if(userAnswer === correctAnswer) {
            this.setState({
                feedback: 'correct'
            })
        } else { 
            this.setState({
                feedback: 'incorrect'
            })
        }
    }

    render() {
        let question;
        let input;
        let answer;
        let feedback;

        if(this.props.endScreen) {
            return <Redirect to="/end-screen"/>
        }

        if(this.state.feedback === 'correct') {
            feedback = <div className="correct-answer wow slideInDown" data-wow-duration="1s">
                         <p>Correct!</p>
                         <button onClick={(e) => this.correctQuestion(e)} className="next-question">Next Question</button>
                      </div>
        } else if (this.state.feedback === 'incorrect') {
            feedback = <div className="incorrect-answer wow slideInDown" data-wow-duration="1s">
                         <p>Incorrect</p>
                         <button onClick={(e) => this.showAnswer(e)} className="show-answer">Show Answer</button>
                         <button onClick={(e) => this.incorrectQuestion(e)} className="next-question">Next Question</button>
                     </div>
        }

        if(this.props.questions.head) {
            question = this.props.questions.get(0).question;
        }
        if(this.state.input) {
            input = <ul className="answer-section">
                        <label>Answer</label>
                        <input ref={(value) => this.userInput = value} className="answer-input" placeholder="E.g. coffee" type="text"></input>
                        <button onClick={(e) => this.onSubmitAnswer(e)} className="submit-answer">Submit</button>
                    </ul>;
        }

        if(this.state.showAnswer) {
            answer =  <p className="answer wow zoomInDown" data-wow-duration="1s">
                        {this.props.questions.get(0).answer.toLowerCase()}
                    </p>;
        }

        return (
            <div>
                <Navbar />
                <div className="question-box">
                    <ul className="question-list">
                        <li className="question">
                            {question}
                        </li>
                    </ul>
                    {input}
                </div>
                {feedback}
                {answer}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    currentUser: state.currentUser,
    state: state,
    questions: state.questions,
    endScreen: state.endScreen
});

export default connect(mapStateToProps)(QuestionPage);
