import * as actions from './actions';

const initialState = {
  questions:[],
  currentUser: null
};

export default (state=initialState, action)  => {
  switch(action.type) {
    case actions.nextQuestion: 
      return {
        ...state};

    default: 
      return state;
  }
};
