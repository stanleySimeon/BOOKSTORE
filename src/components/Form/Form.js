// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import PropTypes from 'prop-types';
// import { addBook } from '../../Redux/BooksUpdate';
import '../Books/Books.css';

function Form({
  title, setTitle, author, setAuthor, type, setType, categories, saveBook,
}) {
  // const dispatch = useDispatch();

  return (
    <div
      className="form__container"
      onSubmit={(event) => {
        event.preventDefault();
        if (!type?.length) return;
        saveBook();
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
          value={type?.length ? type : 'Category'}
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
          {categories?.map((category) => (
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
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  setAuthor: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveBook: PropTypes.func.isRequired,
};

export default Form;
