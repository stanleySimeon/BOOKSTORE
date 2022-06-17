/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = ({
  category,
  bookName,
  authorName,
}) => (
  <li className="book">
    <div className="book-description">
      <span className="category">{category}</span>
      <h3 className="book-name">{bookName}</h3>
      <span className="author-name">{authorName}</span>
      <div className="book-buttons">
        <button type="button">Comments</button>
        <div className="vr" />
        <button type="button" onClick={removeBook}>Remove</button>
        <div className="vr" />
        <button type="button">Edit</button>
      </div>
    </div>
  </li>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  progress: PropTypes.number,
  currentChapter: PropTypes.number,
  chapterName: PropTypes.string,
};

Book.defaultProps = {
  currentChapter: null,
  chapterName: null,
  progress: null,
};

export default Book;
