import {SET_USER} from './actions';

const initialState = {
  questions:[
    {
      question: 'What kind of coffee is distinguished by markings poured at the end?',
      answer: 'machiatto',
      correct: false
    }
  ],
  currentUser: null,
  index: 0
};

export default (state=initialState, action)  => {
  switch(action.type) {
    case SET_USER: 
      return {
        ...state, currentUser: action.currentUser
      };

    default: 
      return state;
  }
};
