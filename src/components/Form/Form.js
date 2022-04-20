import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { addBook } from '../../Redux/books/books';
import '../Books/Books.css';

function Form({ id }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const categories = ['Fiction', 'Non-Fiction', 'Cooking', 'History', 'Biography', 'Poetry', 'Art',
    'Science', 'Self-Help', 'Travel', 'Comics', 'Drama', 'Fantasy', 'Humor',
    'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Young Adult', 'Adventure', 'Comedy', 'Dystopia',
    'Erotica', 'Horror', 'Paranormal', 'Philosophy', 'Psychology', 'Spirituality', 'Western',
    'Business', 'Education', 'Finance', 'Health', 'Law', 'Medicine', 'Politics', 'Religion', 'Other'];
  return (
    <div
      className="form__container"
      onSubmit={(event) => {
        event.preventDefault();
        if (!type.length) return;
        const newBook = {
          id,
          title,
          author,
          type,
        };
        dispatch(addBook(newBook));
        setTitle('');
        setAuthor('');
        setType('');
      }}
    >
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form className="form">
        <input
          className="form__input"
          type="text"
          id="book__name"
          placeholder="Book title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          required
        />
        <input
          className="form__input"
          type="text"
          id="book__author"
          placeholder="Author"
          onChange={(event) => setAuthor(event.target.value)}
          value={author}
          required
        />
        <select
          className="form__input"
          id="book__type"
          value={type.length ? type : 'Category'}
          onChange={(event) => setType(event.target.value)}
          name="categories"
        >
          <option
            className="selected__book"
            value="Category"
            disabled
          >
            Type of book
          </option>
          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
        <button type="submit" className="add__book__button">ADD BOOK</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Form;
