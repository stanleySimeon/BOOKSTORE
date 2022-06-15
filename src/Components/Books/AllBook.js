import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';

const AllBook = ({
  id, title, author,
}) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook({ id }));
  };
  return (
    <div>
      <h2>
        Title:
        {title}
      </h2>
      <p>
        Author:
        {author}
      </p>
      <button type="button" text="REMOVE_BOOK" onClick={handleRemove}>Remove</button>
    </div>
  );
};

AllBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default AllBook;
