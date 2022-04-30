import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addBooks } from '../../Redux/books/book';
import '../Books/Books.css';

const Form = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.book, shallowEqual);

  const categories = ['Fiction', 'Non-Fiction', 'Cooking', 'History', 'Biography', 'Poetry', 'Art',
    'Science', 'Self-Help', 'Travel', 'Comics', 'Drama', 'Fantasy', 'Humor',
    'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Young Adult', 'Adventure', 'Comedy', 'Dystopia',
    'Erotica', 'Horror', 'Paranormal', 'Philosophy', 'Psychology', 'Spirituality', 'Western',
    'Business', 'Education', 'Finance', 'Health', 'Law', 'Medicine', 'Politics', 'Religion', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const authorE = e.target.elements.author;
    const categoryE = e.target.elements.category;
    const bookE = e.target.elements.bookTitle;

    let ID;
    try {
      ID = parseInt(bookList[bookList.length - 1].id, 10) + 1;
    } catch (e) {
      ID = 0;
    }

    dispatch(addBooks({
      id: ID, category: categoryE.value, bookTitle: bookE.value, author: authorE.value,
    }));
  };

  return (
    <div className="form__container">
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input className="form__input" type="text" id="book__name" name="bookTitle" placeholder="Book title" required />
        <input className="form__input" type="text" id="book__author" name="author" placeholder="Author" required />
        <select className="form__input" id="book__type" name="category">
          <option className="selected__book" value="Category" disabled>Type of book</option>
          {' '}
          {
          categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))
          }
        </select>
        <button type="submit" className="add__book__button">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
