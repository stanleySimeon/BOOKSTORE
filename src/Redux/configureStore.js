import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/book';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
