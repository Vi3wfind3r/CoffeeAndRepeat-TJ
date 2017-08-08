import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/main-page';
import './index.css';

import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
