// Action types
const ADD__BOOK = 'ADD__BOOK';
const REMOVE__BOOK = 'bookstore/books/REMOVE__BOOK';
const FETCHED__DATA = 'FETCHED__DATA';

// Reducer
const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED__DATA:
    {
      const books = [];
      Object.keys(action.books).forEach((key) => {
        const book = action.books[key];
        book.item_id = key;
        books.push(book);
      });
      return books;
    }
    case ADD__BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE__BOOK:
      return [
        ...state.filter((book) => book.item_id !== action.book.item_id),
      ];
    default: return state;
  }
};

// Action Creators
const addBook = (book) => ({ type: ADD__BOOK, book });

const removeBook = (book) => ({ type: REMOVE__BOOK, book });

const dataFetch = (books) => ({ type: FETCHED__DATA, books });

// Async Actions
const getBooks = () => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hyR6UTGdJTnPM50BreqJ/books')
    .then((books) => dispatch(dataFetch(books)));
};
const addBooks = (book) => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hyR6UTGdJTnPM50BreqJ/books/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then(() => dispatch(addBook(book)));
};

const removeBooks = (book) => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hyR6UTGdJTnPM50BreqJ/books/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: book.item_id }),
  })
    .then(() => dispatch(removeBook(book)));
};

export {
  getBooks, addBooks, removeBooks,
};
export default booksReducer;
