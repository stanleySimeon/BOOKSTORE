import React from 'react';
import Header from '../Navigation/Header';
import Book from './Book';
import './Books.css';

function Books() {
  return (
    <div className="books">
      <Header />
      <Book />
    </div>
  );
}
export default Books;
