import {
  useDispatch, useSelector, shallowEqual,
} from 'react-redux';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Book from './Book';
import { getBooks } from '../../Redux/books/book';
import Form from '../Form/Form';
import './Books.css';

const Books = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books, shallowEqual);

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <>
      <Header />
      <div className="books-container">
        {bookList.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            category={book.category}
            title={book.bookTitle}
            author={book.author}
          />
        ))}
        <Form />
      </div>
    </>
  );
};

export default Books;
