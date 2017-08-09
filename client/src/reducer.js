import * as actions from './actions';

const initialState = {
  questions:[],
  currentUser: null
};

export default (state=initialState, action)  => {
  switch(action.type) {
    case actions.setUser: 
      return {
        ...state, currentUser: action.user
      };

    default: 
      return state;
  }
};
