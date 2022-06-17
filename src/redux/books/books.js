import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JQgP60QXiQUZk48I3GP2/books/';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCHED_BOOK = 'FETCHED_BOOK';

// Actions types
export const fetchBooks = () => async (dispatch) => {
  const response = await axios.get(baseURL);
  const books = response.data;
  const booksData = Object.entries(books);
  const bookList = [];
  booksData.forEach(([key, book]) => {
    const id = key;
    const {
      title, author, category,
    } = book[0];
    bookList.push({
      id,
      title,
      author,
      category,
    });
  });

  dispatch({
    type: FETCHED_BOOK,
    payload: bookList,
  });
};

export const addBook = (book) => async (dispatch) => {
  await fetch(baseURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(book),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: ADD_BOOK, payload: book }),
    );
};

export const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${baseURL}/${id}`, {
    method: '',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ item_id: id }),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: REMOVE_BOOK, payload: id }),
    );
};

const bookReducer = (state = [{
  item_id: '',
  title: 'Learn React',
  author: 'John Doe',
  category: 'Programming',
  progress: 0,
  currentChapter: 0,
  chapterName: '',
}], action) => {
  switch (action.type) {
    case FETCHED_BOOK:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default (bookReducer);
