import axios from 'axios';

const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Bl7Q94sH5gCnfPE3KMHt/books/';
const NEW__BOOK = 'NEW__BOOK';
const ADD__BOOK = 'ADD__BOOK';
const REMOVE__BOOK = 'REMOVE__BOOK';
const DELETED__BOOK = 'DELETED__BOOK';
const LOAD__BOOKS = 'LOAD__BOOKS';
const BOOKS__LOADED = 'BOOKS__LOADED';

export const saveBook = (book) => axios.post(API, {
  item_id: book.id, title: book.title, author: book.author, category: book.type,
});

export const addBook = async (book) => async (dispatch) => {
  dispatch({ type: NEW__BOOK });
  const data = await saveBook(book).then((status) => {
    if (status === 201 || status === 200) {
      dispatch({ type: ADD__BOOK, payload: book });
      console.log('Book added');
    }
  });
  return data;
};

export const removeBook = async (id) => {
  const response = await fetch(API, `${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((res) => res.data);
  return response;
};

export const RemoveBook = (index, id) => (dispatch) => {
  dispatch({ type: DELETED__BOOK });
  removeBook(id).then((status) => {
    if (status === 201 || status === 200) dispatch({ type: REMOVE__BOOK, payload: index });
  });
};

export const BooksLoad = async () => {
  const response = await fetch(API).then((res) => res.json())
    .then((result) => result);
  const Arr = Object.entries(response)
    .map(([id, book]) => ({ ...book[0], id: Number(id), type: book[0].category }));
  return Arr;
};

export const booksLoader = () => (dispatch) => {
  dispatch({ type: LOAD__BOOKS });
  BooksLoad().then((books) => dispatch({
    type: BOOKS__LOADED,
    payload: books,
  }));
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
