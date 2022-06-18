/* eslint-disable react/self-closing-comp */
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { del } from '../../redux/books/books';
import './Book.css';

export default function Book({ book }) {
  const dispatch = useDispatch();
  const removeBook = (event, bookId) => {
    event.preventDefault();
    dispatch(del(bookId));
  };
  const percentage = 12;
  return (
    <div className="bookCard" id={book.id}>
      <div className="book_container_left">
        <span className="bookInfo">
          <p className="category">{book.category}</p>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
        </span>
        <ul className="btn_left_container">
          <li><button className="btn comment" type="button">Comments</button></li>
          <span className="bar"></span>
          <li><button className="btn remove" type="button" onClick={(event) => removeBook(event, book.item_id)}>Remove</button></li>
          <span className="bar"></span>
          <li><button className="btn add" type="button">Edit</button></li>
        </ul>
      </div>
      <div className="progress_container">
        <div className="progressBar">
          <CircularProgressbar
            value={percentage}
            styles={{
              strokeWidth: 1,
              root: {},
              path: {
                stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                strokeLinecap: 'butt',
                transition: 'stroke-dashoffset 0.5s ease 0s',
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
              },
              trail: {
                stroke: '#EDEDED',
                backgroundColor: '#2F4EE8',
                strokeLinecap: 'butt',
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
              },
              text: {
                fill: '#100',
                fontSize: '16px',
              },
              background: {
                fill: '#0290ff',
              },
            }}
          />
          <div className="show_percent">
            <span className="percent">{`${percentage}%`}</span>
            <p className="status complete">Completed</p>
          </div>
        </div>
        <span className="separator_right"></span>
        <div className="right_container">
          <p className="status current">CURRENT CHAPTER</p>
          <p className="chapter_number">Chapter 1</p>
          <button className="update_progress_btn btn" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: Proptypes.objectOf(Proptypes.string).isRequired,
};
