import * as Cookies from 'js-cookie';

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