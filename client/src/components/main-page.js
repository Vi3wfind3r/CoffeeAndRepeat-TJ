import React from 'react';
import App from './app';
import QuestionPage from './question-page';
import EndScreen from './end-screen';
import Reading from './reading';
import {Route} from 'react-router-dom';

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/reading" component={Reading} />
        <Route exact path="/questions" component={QuestionPage} />
        <Route exact path="/end-screen" component={EndScreen} />
      </div>
    )
  }
}