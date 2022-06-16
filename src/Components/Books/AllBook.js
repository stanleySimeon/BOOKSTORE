import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const AllBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const booksList = books.map((book) => (
    <li key={book.id}>
      <span>{book.title}</span>
      {' '}
      <span>{book.author}</span>
      <button type="button" onClick={() => dispatch(removeBook(book))}>
        Remove
      </button>
    </li>
  ));
  return <ul>{booksList}</ul>;
};
export default AllBook;
