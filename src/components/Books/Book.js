import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { RemoveBook } from '../../Redux/books/books';
import './Books.css';

function Book({
  author, title, type, id, index,
}) {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="book-description">
        <h3 className="type__of__book">{type}</h3>
        <h2 className="book__title">{title}</h2>
        <h3 className="author">{author}</h3>
        <span className="buttons">
          <button type="button" className="commentBtn">Comments</button>
          <span className="separate__bar" />
          <button
            type="button"
            className="removeBtn"
            book__I={index}
            onClick={
            (event) => {
              const index = Number(event.target.getAttribute('index'));
              dispatch(RemoveBook(index, id));
            }
}
          >
            Remove
          </button>
          <span className="separate__bar" />
          <button type="button" className="editBtn">Edit</button>
        </span>
      </div>
      <div className="circle-progress">
        <FontAwesomeIcon className="circle" icon={faCircleNotch} />
        <span className="progress-text">
          <span className="percent">96%</span>
          {' '}
          <br />
          {' '}
          Completed
        </span>
      </div>
      <div className="bar" />
      <div className="book-chapter">
        <h4 className="current__chapter">CURRENT CHAPTER</h4>
        <p className="chapter__number">Chapter 17</p>
        <button className="update__progress__button" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Book;
