import {SET_USER} from './actions';

const initialState = {
  questions:[],
  currentUser: null
};

export default (state=initialState, action)  => {
  switch(action.type) {
    case SET_USER: 
    console.log('reducer action user', action.currentUser);
      return Object.assign({}, state, {currentUser: action.currentUser});

    default: 
      return state;
  }
};
