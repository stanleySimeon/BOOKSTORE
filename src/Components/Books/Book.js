import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { addBook } from '../../redux/books/books';

const Button = ({ text, handleClick }) => (
  <button type="button" onClick={handleClick}>{text}</button>
);

export default function InputBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const titleInput = useRef(null);

  const dispatch = useDispatch();

  const submitBook = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    const res = () => title !== '' && author !== '' && dispatch(addBook(newBook));
    res();
    titleInput.current.focus();
    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <div>
        <h2>ADD NEW BOOK</h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" ref={titleInput} placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Button text="ADD_BOOK" handleClick={submitBook} />
      </div>
    </section>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
