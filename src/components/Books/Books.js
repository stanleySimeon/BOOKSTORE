import { useSelector, shallowEqual } from 'react-redux';
import Header from '../Header/Header';
import Book from './Book';
import Form from '../Form/Form';
import './Books.css';

function Books() {
  const BookList = useSelector((state) => state.bookReducer.books, shallowEqual);
  const id = BookList.length ? BookList[BookList.length - 1].id + 1 : BookList.length + 1;
  return (
    <>
      <Header />
      <div className="books-container">
        {
        !BookList.length ? <p className="no-books">No books yet</p> : BookList.map((Item, i) => (
          <Book
            key={Item.id}
            index={i}
            Id={Item.id}
            title={Item.title}
            author={Item.author}
            type={Item.type}
          />
        ))
        }
      </div>
      <Form id={id} />
    </>
  );
}

export default Books;
