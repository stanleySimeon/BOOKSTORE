/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Navigation/Header';
import Book from './Book';
import AddBook from './AllBook';
import { fetchBooks, removeBook } from '../../redux/books/books';

// const booksList = () => {
//   const booksList = useSelector((state) => state.books);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, []);

//   return (
//     <div className="container">
//       <div id="book_Container">
//         <Header />
//         <ul id="book_list">
//           {booksList.map((book) => (
//             <Book
//               item_id={book.item_id}
//               key={book.id}
//               bookName={book.title}
//               authorName={book.author}
//               category={book.category}
//               progress={book.progress}
//               removeBook={removeBook}
//             />
//           ))}
//         </ul>
//         <hr />
//         <div id="add_book">
//           <h2>ADD NEW BOOK</h2>
//           <AddBook />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default booksList;

const booksList = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="container">
      <div id="book_Container">
        <Header />
        <ul id="book_list">
          {booksList.map((book) => (
            <Book
              item_id={book.item_id}
              key={book.id}
              bookName={book.title}
              authorName={book.author}
              category={book.category}
              progress={book.progress}
              removeBook={removeBook}
            />
          ))}
        </ul>
        <hr />
        <div id="add_book">
          <h2>ADD NEW BOOK</h2>
          <AddBook />
        </div>
      </div>
    </div>
  );
};
export default booksList;
