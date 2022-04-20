import Header from '../Header/Header';
import Book from './Book';
import './Books.css';

function Books() {
  return (
    <>
      <Header />
      <div className="books-container">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
      <div className="form__container">
        <hr />
        <h2>ADD NEW BOOK</h2>
        <form className="form">
          <input className="form__input" type="text" id="book__name" placeholder="Book title" />
          <input className="form__input" type="text" id="book__author" placeholder="Author" />
          <select className="form__input" id="book__type">
            <option value="">Category</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            <option value="science">Science</option>
            <option value="thriller">Thriller</option>
            <option value="history">History</option>
            <option value="biography">Biography</option>
            <option value="poetry">Poetry</option>
            <option value="art">Art</option>
            <option value="comics">Comics</option>
            <option value="cooking">Cooking</option>
            <option value="diy">DIY</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="self-help">Self-Help</option>
            <option value="travel">Travel</option>
            <option value="other">Other</option>
          </select>
          <button type="button" className="add__book__button">ADD BOOK</button>
        </form>
      </div>
    </>
  );
}

export default Books;
