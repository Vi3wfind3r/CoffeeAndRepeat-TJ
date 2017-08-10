import {SET_USER, SET_QUESTIONS, REMOVE_QUESTION, INSERT_QUESTION} from './actions';
import LinkedList from './linkedlist';

let questionsList = new LinkedList();
//can fudge by randomizing question list when setting questions

const initialState = {
  questions: questionsList,
  currentUser: null,
  index: 0,
  endScreen: false,
  incorrectQuestions: []
};

export default (state=initialState, action)  => {
  switch(action.type) {
    case SET_USER: 
      return {
        ...state, currentUser: action.currentUser
      };

    case SET_QUESTIONS:
      questionsList.transformArr(action.questions, questionsList);
      console.log('linked list', questionsList);
      return {
        ...state, questions: questionsList
      };
    
    
    case REMOVE_QUESTION:
      questionsList.remove(0);
      if(!questionsList.length) {
        return {
          ...state, endScreen: true
        }
      }
      return {
        ...state, questions: questionsList
      };
    
    case INSERT_QUESTION:
      let question = questionsList.get(0);
      questionsList.remove(0);
      questionsList.insert(Math.floor(Math.random()*(questionsList.length - 1) + 1), question);
      return {
        ...state, questions: questionsList
      }
    
    default: 
      return state;
  }
};

