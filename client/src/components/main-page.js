import React from 'react';
import App from './app';
import QuestionPage from './question-page';
import {Route} from 'react-router-dom';

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/questions" component={QuestionPage}/>
      </div>
    )
  }
}