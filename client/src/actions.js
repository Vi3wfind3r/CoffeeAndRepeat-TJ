import * as Cookies from 'js-cookie';

export const DISPLAY_QUESTION = 'DISPLAY_QUESTION';
export const displayQuestion = (questions) => ({
  type: DISPLAY_QUESTION,
  questions
});

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
    return dispatch(displayQuestion(questions));
  })
  .catch(err => {
    console.error(`Fetch Questions Error: ${err}`);
  })
}