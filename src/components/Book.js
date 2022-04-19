import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import './Books.css';

function Book() {
  return (
    <div className="book">
      <div className="book-description">
        <h3 className="type__of__book">Actions</h3>
        <h2 className="book__title">The Hunger Games</h2>
        <h3 className="author">Suzane Collins</h3>
        <span className="buttons">
          <button type="button" className="commentBtn">Comments</button>
          <span className="separate__bar" />
          <button type="button" className="removeBtn">Remove</button>
          <span className="separate__bar" />
          <button type="button" className="editBtn">Edit</button>
        </span>
      </div>
      <div className="circle-progress">
        <FontAwesomeIcon className="circle" icon={faCircleNotch} />
        <span className="progress-text">
          <span className="percent">64%</span>
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

export default Book;