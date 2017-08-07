import React from 'react';
import * as Cookies from 'js-cookie';
import Navbar from './navbar';
import './question-page.css';

export default class QuestionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        fetch('/api/questions', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(questions =>
            this.setState({
                questions
            })
        );
    }

    render() {
        const questions = this.state.questions.map((question, index) =>
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
