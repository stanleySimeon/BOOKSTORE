import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(book));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    }
    if (name === 'author') {
      setAuthor(value);
    }
    if (name === 'category') {
      setCategory(value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={title} onChange={handleChange} />
        <input type="text" name="author" value={author} onChange={handleChange} />
        <input type="text" name="category" value={category} onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
