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
            feedback: null,
            input: true
        };
    }

    componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            this.props.dispatch(actions.getUsers(accessToken));
            this.props.dispatch(actions.fetchQuestions())
        }
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
            input: true
        }); 
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
            this.setState({feedback: <div className="correct-answer">
                        <p>Correct!</p>
                        <button onClick={(e) => this.correctQuestion(e)} className="next-question">Next Question</button>
                     </div>
            });
           
        } else { 
            this.setState({
                feedback: <div className="incorrect-answer">
                        <p>Incorrect</p>
                        <button className="show-answer">Show Answer</button>
                        <button onClick={(e) => this.incorrectQuestion(e)} className="next-question">Next Question</button>
                    </div>
            })
        }
    }

    render() {
        let question;
        let input;
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
        return (
            <div>
                <Navbar />
                <div className="question-box">
                    <ul className="question-list">
                        <li>
                            {question}
                        </li>
                    </ul>
                    {input}
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
});

export default connect(mapStateToProps)(QuestionPage);
