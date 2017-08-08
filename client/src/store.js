import {createStore, applyMiddleware} from 'redux-thunk';
import thunk from 'redux-thunk';
import reducer from './reducer';

export default createStore(reducer, applyMiddleware(thunk));