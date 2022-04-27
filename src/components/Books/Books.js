import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Header from '../Header/Header';
import Book from './Book';
import Form from '../Form/Form';
import './Books.css';

function Books() {
  // dispatch the action to get the books from the server
  const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Bl7Q94sH5gCnfPE3KMHt/books';
  const bookList = useSelector(() => useState(), shallowEqual);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const categories = ['Fiction', 'Non-Fiction', 'Cooking', 'History', 'Biography', 'Poetry', 'Art',
    'Science', 'Self-Help', 'Travel', 'Comics', 'Drama', 'Fantasy', 'Humor',
    'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Young Adult', 'Adventure', 'Comedy', 'Dystopia',
    'Erotica', 'Horror', 'Paranormal', 'Philosophy', 'Psychology', 'Spirituality', 'Western',
    'Business', 'Education', 'Finance', 'Health', 'Law', 'Medicine', 'Politics', 'Religion', 'Other'];
  const saveBook = async () => {
    await axios.post(API, {
      item_id: uuidv4(),
      title,
      author,
      category: type,
    }).then(() => {
      axios.get(API).then((res) => (res.status));
    });
  };

  console.log(bookList);
  return (
    <>
      <Header />
      <div className="books-container">
        {!bookList.length ? bookList.map((book) => (
          <Book key={book.item_id} book={book} />
        )) : <p>No books to display</p>}
      </div>
      <Form
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        type={type}
        setType={setType}
        categories={categories}
        saveBook={saveBook}
      />
    </>
  );
}

export default Books;
