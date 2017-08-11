import {
  SET_USER,
  SET_QUESTIONS,
  REMOVE_QUESTION,
  INSERT_QUESTION,
  TRACK_INCORRECT,
  START_NEW_GAME
} from "./actions";
import LinkedList from "./linkedlist";

let questionsList = new LinkedList();
//can fudge by randomizing question list when setting questions

const initialState = {
  questions: questionsList,
  currentUser: null,
  index: 0,
  endScreen: false,
  // endScreen: true,
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
      const shuffle = array => {
        let currentIndex = array.length,
          temporaryValue,
          randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      };
      const shuffledArr = shuffle(action.questions);
      questionsList.transformArr(shuffledArr, questionsList);
      return {
        ...state,
        questions: questionsList
      };

    case REMOVE_QUESTION:
      questionsList.remove(0);
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

    case START_NEW_GAME:
      return {
        ...state,
        endScreen: false
      };

    default:
      return state;
  }
};
