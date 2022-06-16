import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  category,
  bookName,
  authorName,
  progress,
  currentChapter,
  chapterName,
  onRemove,
}) => (
  <li className="book">
    <div className="book-description">
      <p className="category">{category}</p>
      <h3 className="book-name">{bookName}</h3>
      <p className="author-name">{authorName}</p>
      <div className="book-buttons">
        <button type="button">Comments</button>
        <div className="vr" />
        <button type="button" onClick={onRemove}>Remove</button>
        <div className="vr" />
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="can-go-bottom">
      <div className="progress-status">
        <img src={' '} alt="Progress Circle" height="40px" />
        <div className="progress-description">
          <p>
            {progress ?? 0}
            %
            <br />
            <p className="completed">Completed</p>
          </p>
        </div>
      </div>
      <div className="chapter-status">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter-number">
          {currentChapter > 0 ? `Chapter ${currentChapter}` : 'Not Started Yet!'}
          {currentChapter > 0 && chapterName ? ': "' : ''}
          {chapterName ?? ''}
          {currentChapter > 0 && chapterName ? '"' : ''}
        </p>
        <button className="blue-button" type="button">Update Progress</button>
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
  onRemove: PropTypes.func,
};

Book.defaultProps = {
  currentChapter: null,
  chapterName: null,
  progress: null,
  onRemove: null,
};

export default Book;
