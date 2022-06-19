import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AllBook';
import Header from '../Navigation/Header';
import { getBooks } from '../../redux/books/books';
import './Books.css';

export default function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <>
      <Header />
      <div className="books_container">
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </div>
      <AddBook />
    </>
  );
}
