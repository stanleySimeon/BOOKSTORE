// Actions types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Define an initial state
const initialState = [
  {
    title: 'Test and boost your knowledge',
    author: 'John Smith',
  },
];

// Books reducer
export default function bookReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        title: [...state.title, action.payload],
        author: [...state.author, action.payload],
      };
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    default:
      return state;
  }
}

// Actions creators
export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book,
  };
}

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    payload: book,
  };
}
