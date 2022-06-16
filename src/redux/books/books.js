// Actions types
import BookstoreAPI from '../../Components/apiConnect';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCHED_BOOK = 'FETCHED_BOOK';

const fetchBooks = () => async (dispatch) => {
  const books = await BookstoreAPI.getBooks();
  if (books) {
    dispatch({ type: FETCHED_BOOK, books });
  }
};

const addBook = ({
  id, category, bookName, authorName,
}) => async (dispatch) => {
  const result = await BookstoreAPI.addBook({
    id, bookName, authorName, category,
  });
  if (result) {
    dispatch({
      type: ADD_BOOK,
      id,
      category,
      bookName,
      authorName,
    });
  }
};

const removeBook = ({ id }) => async (dispatch) => {
  const result = await BookstoreAPI.removeBook({ id });
  if (result) {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
};

const booksReducer = (state = [], actions) => {
  switch (actions.type) {
    case FETCHED_BOOK:
      return actions.books;
    case ADD_BOOK:
      return [
        ...state,
        {
          id: actions.id,
          category: actions.category,
          bookName: actions.bookName,
          authorName: actions.authorName,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== actions.id);
    default:
      return state;
  }
};

export {
  booksReducer as default, addBook, removeBook, fetchBooks,
};
