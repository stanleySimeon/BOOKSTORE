import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import './Books.css';

const Book = ({
  category, title: bookTitle, author, RemoveBook, progress, editBook,
}) => {
  (
    <div className="book">
      <div className="book-description">
        <h3 className="type__of__book">{category}</h3>
        <h2 className="book__title">{bookTitle}</h2>
        <h3 className="author">{author}</h3>
        <span className="buttons">
          <button type="button" className="commentBtn">Comments</button>
          <span className="separate__bar" />
          <button type="button" className="removeBtn" onClick={RemoveBook}>
            Remove
          </button>
          <span className="separate__bar" />
          <button type="button" className="editBtn" onClick={editBook}>
            Edit
          </button>
        </span>
      </div>
      <div className="circle-progress">
        <FontAwesomeIcon className="circle" icon={faCircleNotch} />
        <span className="progress-text">
          <span className="percent">{progress}</span>
          {' '}
          <br />
          {' '}
          Completed
        </span>
      </div>
      <div className="bar" />
      <div className="book-chapter">
        <h4 className="current__chapter">CURRENT CHAPTER</h4>
        <p className="chapter__number">Not Started!</p>
        <button className="update__progress__button" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
Book.propTypes = {
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number,
  RemoveBook: PropTypes.func,
};

export default Book;
