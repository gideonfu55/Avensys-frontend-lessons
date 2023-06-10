import get from 'axios'
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// State
const initialState = {
  movies: [],
  id: '',
  loading: false,
  error: null
};

// Actions
