import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Navigation/Header';
import Book from './Book';
import AddBook from './AllBook';
import { fetchBooks, removeBook } from '../../redux/books/books';

const booksList = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="content">
      <div id="books-page">
        <Header />
        <ul id="books-list">
          {booksList.map(({
            id,
            category,
            bookName,
            authorName,
            progress,
            currentChapter,
            chapterName,
          }) => (
            <Book
              key={id}
              category={category}
              bookName={bookName}
              authorName={authorName}
              progress={progress}
              chapterName={chapterName}
              currentChapter={currentChapter}
              onRemove={() => dispatch(removeBook({ id }))}
            />
          ))}
        </ul>
        <hr />
        <div id="add-book">
          <h2>ADD NEW BOOK</h2>
          <AddBook />
        </div>
      </div>
    </div>
  );
};
export default booksList;
