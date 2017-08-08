export const NEXT_QUESTION = 'NEXT_QUESTION';
export const nextQuestion = () => ({
  type: NEXT_QUESTION
});

export const SET_USER = 'SET_USER';
export const setUser = (user) => ({
  type: SET_USER,
  currentUser: user
});



//Async actions//
