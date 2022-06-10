import React from 'react';
import Form from './Form';
import './Books.css';

function Book() {
  const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  };
  return (
    <div className="book">
      <div className="book__title">
        <h2>{book.title}</h2>
      </div>
      <div className="book__author">
        <h3>{ book.author }</h3>
      </div>
      <Form />
    </div>
  );
}
export default Book;
