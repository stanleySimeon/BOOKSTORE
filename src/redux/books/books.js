// Actions types
import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Define an initial state
export const initialState = [
  {
    id: uuidv4(),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
  },
  {
    id: uuidv4(),
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
  },
];

// Books reducer
export default function bookReducer(state = initialState, { type, book }) {
  switch (type) {
    case ADD_BOOK:
      return [...state, book];
    case REMOVE_BOOK:
      return (state.filter(({ id }) => id !== book.id));
    default:
      return state;
  }
}
// Actions creators
export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book,
  };
}
