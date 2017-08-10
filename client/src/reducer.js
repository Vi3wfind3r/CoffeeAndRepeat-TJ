import {
  SET_USER,
  SET_QUESTIONS,
  REMOVE_QUESTION,
  INSERT_QUESTION,
  TRACK_INCORRECT
} from "./actions";
import LinkedList from "./linkedlist";

let questionsList = new LinkedList();
//can fudge by randomizing question list when setting questions

const initialState = {
  questions: questionsList,
  currentUser: null,
  index: 0,
  endScreen: false,
  incorrectQuestions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.currentUser
      };

    case SET_QUESTIONS:
      questionsList.transformArr(action.questions, questionsList);
      return {
        ...state,
        questions: questionsList
      };

    case REMOVE_QUESTION:
      questionsList.remove(0);
      console.log("##LENGTH", questionsList.length);
      if (!questionsList.length) {
        return {
          ...state,
          endScreen: true
        };
      }
      return {
        ...state,
        questions: questionsList
      };

    case INSERT_QUESTION:
      let question = questionsList.get(0);
      questionsList.remove(0);
      questionsList.insert(
        Math.floor(Math.random() * (questionsList.length - 1) + 1),
        question
      );
      return {
        ...state,
        questions: questionsList
      };

    case TRACK_INCORRECT:
      let isThere = false;
      let newIncorrectQuestions = state.incorrectQuestions.map((el, index) => {
        if (el.question === action.question.question) {
          el.count++;
          isThere = true;
        }
        return el;
      });

      if (!isThere) {
        newIncorrectQuestions.push({ ...action.question, count: 1 });
      }
      return Object.assign({}, state, {
        incorrectQuestions: newIncorrectQuestions
      });

    default:
      return state;
  }
};
