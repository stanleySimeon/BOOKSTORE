import Header from "./Header";
import Book from "./Book";
import './Books.css';

function Books() {
    return (
        <>
            <Header />
            <div className="books-container">
                <Book />
                <Book />
                <Book />
                <hr />
                <div className='form__container'>
                    <h2>ADD NEW BOOK</h2>
                    <form className='form'>
                        <div className='form__group'>
                            <input className='form__input' type='text' id='book__name' placeholder='Book title' />
                            <input className='form__input' type='list' id='book__type' placeholder='Categories' />
                            <button type="button" className="add__book__button">ADD BOOK</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Books;