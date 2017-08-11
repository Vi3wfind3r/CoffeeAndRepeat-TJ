import * as Cookies from 'js-cookie';

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions
});

export const SET_USER = 'SET_USER';
export const setUser = (user) => ({
  type: SET_USER,
  currentUser: user
});

export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const removeQuestion = () => ({
  type: REMOVE_QUESTION
});

export const INSERT_QUESTION = 'INSERT_QUESTION';
export const insertQuestion = () => ({
  type: INSERT_QUESTION
});

export const TRACK_INCORRECT = 'TRACK_INCORRECT';
export const trackIncorrect = (question) => ({
  type: TRACK_INCORRECT,
  question
});

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
  type: START_NEW_GAME
});

//Async actions//
export const getUsers = (token) => dispatch => {
  const url = '/api/me';
  fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => {
    if(!response.ok){
      if(response.status === 401) {
        Cookies.remove('accessToken');
        return;
      }
      return Promise.reject(response.statusText);
    }
    return response.json()
  })
  .then(json => {
    return dispatch(setUser(json.firstName))
  })
  .catch(error => {
    console.error(error);
  })
}

export const fetchQuestions = () => dispatch => {
  return fetch('/api/questions')
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(questions => {
    return dispatch(setQuestions(questions));
  })
  .catch(err => {
    console.error(`Fetch Questions Error: ${err}`);
  })
}