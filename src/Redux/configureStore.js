import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({ categoriesReducer, bookReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
