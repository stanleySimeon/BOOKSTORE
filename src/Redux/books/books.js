import { saveBook, removeBook } from '../BooksUpdate';

const NEW__BOOK = 'BOOKSTORE/books/NEW__BOOK';
const ADD__BOOK = 'BOOKSTORE/books/ADD__BOOK';
const REMOVE__BOOK = 'BOOKSTORE/books/REMOVE__BOOK';
const DELETED__BOOK = 'BOOKSTORE/books/DELETED__BOOK';
const LOAD__BOOKS = 'BOOKSTORE/books/LOAD__BOOKS';
const BOOKS__LOADED = 'BOOKSTORE/books/BOOKS__LOADED';

export const addBook = (book) => (dispatch) => {
  dispatch({ type: NEW__BOOK });
  saveBook(book).then((status) => {
    if (status === 201 || status === 200) {
      dispatch({ type: ADD__BOOK, payload: book });
    }
  });
};

export const RemoveBook = (index, id) => (dispatch) => {
  dispatch({ type: DELETED__BOOK });
  removeBook(id).then((status) => {
    if (status === 201 || status === 200) dispatch({ type: REMOVE__BOOK, payload: index });
  });
};

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW__BOOK:
    case LOAD__BOOKS:
    case DELETED__BOOK:
      return { ...state, waiting: true };
    case ADD__BOOK:
      return { ...state, books: [...state.books, action.payload], waiting: false };
    case BOOKS__LOADED:
      return { ...state, books: [...state.books, ...action.payload] };
    case REMOVE__BOOK:
      return {
        ...state,
        books: [...state.books.slice(0, action.payload), ...state.books.slice(action.payload + 1)],
      };
    default:
      return state;
  }
};
export default bookReducer;
