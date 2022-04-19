const NEW__BOOK = 'BOOKSTORE/books/NEW__BOOK';
const ADD__BOOK = 'BOOKSTORE/books/ADD__BOOK';
const REMOVE__BOOK = 'BOOKSTORE/books/REMOVE__BOOK';
const DELETED__BOOK = 'BOOKSTORE/books/DELETED__BOOK';
const LOAD__BOOKS = 'BOOKSTORE/books/LOAD__BOOKS';
const BOOKS__LOADED = 'BOOKSTORE/books/BOOKS__LOADED';

const initialState = {
  books: [],
};

const reducer__book = (state = initialState, action = {}) => {
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
export default reducer__book;
