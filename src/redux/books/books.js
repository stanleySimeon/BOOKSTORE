/* eslint-disable no-param-reassign */
const getUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tli4IjMEVydK5jkQkZDP/books';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const EDIT_BOOK = 'EDIT_BOOK';
const FETCHED_BOOK = 'FETCHED_BOOK';

const initialState = [];

// Actions

export const addBook = (book) => async (dispatch) => {
  await fetch(getUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(book),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: ADD_BOOK, payload: book }),
      () => dispatch({ type: ADD_BOOK, payload: null }),
    );
};
export const removeBook = (id) => async (dispatch) => {
  await fetch(`${getUrl}/${id}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ item_id: id }),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: REMOVE_BOOK, payload: id }),
      () => dispatch({ type: REMOVE_BOOK, payload: null }),
    );
};

export const editBook = (book) => async (dispatch) => {
  await fetch(`${getUrl}/${book.item_id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(book),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: EDIT_BOOK, payload: book }),
      () => dispatch({ type: EDIT_BOOK, payload: null }),
    );
};

export const getBooks = () => async (dispatch) => {
  await fetch(getUrl)
    .then((books) => books.json())
    .then(
      (data) => dispatch({ type: FETCHED_BOOK, payload: data }),
      () => dispatch({ type: FETCHED_BOOK, payload: [] }),
    );
};

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case EDIT_BOOK: {
      const bookList = state.filter((book) => book.item_id !== action.payload.item_id);
      return [...bookList, action.payload];
    }
    case FETCHED_BOOK: {
      const bookList = [];
      Object.keys(action.payload).forEach((key) => {
        const book = action.payload[key][0];
        book.item_id = key;
        bookList.push(book);
      });
      return bookList;
    }
    default:
      return state;
  }
};
export default booksReducer;
