import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import './AllBook.css';

export default function AddBook() {
  const dispatch = useDispatch();
  const [categoryState, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function submitBookToStore(event) {
    event.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      category: categoryState,
      title,
      author,
    };
    dispatch(addBook(newBook));
  }

  const handler = (event) => {
    event.preventDefault();
    setCategory('');
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form_container">
      <hr className="separator_line" />
      <h2>Add New Book</h2>
      <form onSubmit={handler} className="form">
        <input type="text" className="bookTitle" placeholder="Book title" value={title} onChange={(event) => setTitle(event.target.value)} required />
        <input type="text" className="authorName" placeholder="Author name" value={author} onChange={(event) => setAuthor(event.target.value)} required />
        <select type="text" className="selectOption" onChange={(event) => setCategory(event.target.value)}>
          <option value="category">Category</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Classics">Classics</option>
          <option value="Comic">Comic</option>
          <option value="Detective">Detective</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Fiction">Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Novel">Novel</option>
          <option value="Religion">Religion</option>
          <option value="Science">Science</option>
          <option value="Poesie">Poesie</option>
        </select>
        <button type="submit" className="addBtn" onClick={(event) => submitBookToStore(event)}>Add Book</button>
      </form>
    </div>
  );
}
